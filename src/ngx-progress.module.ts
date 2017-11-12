import { NgModule, ModuleWithProviders, Optional, SkipSelf, InjectionToken, Inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService, LoaderProvider } from './loader.service';
import { NgxProgressBuffer, NgxProgressLoader } from './ngx-progress.tokens';
import { NgxProgressInterceptor } from './ngx-progress.interceptor';
import { LoaderComponent } from './loader.component';

const defaultBuffer = 0;

export interface NxgProgressProviders {
  loaderProvider?: () => LoaderProvider | null;
  buffer?: number | null;
}

@NgModule({
  declarations: [LoaderComponent],
  entryComponents: [LoaderComponent],
  providers: [
    LoaderService,
    { provide: NgxProgressBuffer, multi: false, useValue: defaultBuffer },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: NgxProgressInterceptor },
  ]
})
export class NgxProgressModule {

  static forRoot(config: NxgProgressProviders): ModuleWithProviders {

    return {
      ngModule: NgxProgressModule,
      providers: [
        LoaderService,
        { provide: NgxProgressBuffer, multi: false, useValue: config.buffer },
        config && config.loaderProvider && {
          provide: LoaderService, multi: false, useFactory: config.loaderProvider
        } || []
      ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: NgxProgressModule) {
    if (parentModule) {
      throw new Error(`NgxProgressModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
