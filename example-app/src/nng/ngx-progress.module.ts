import { NgModule, ModuleWithProviders, Optional, SkipSelf, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService, LoaderProvider } from './loader.service';
import { NgxProgressBuffer, NgxProgressLoader } from './ngx-progress.tokens';
import { NgxProgressInterceptor } from './ngx-progress.interceptor';

const defaultBuffer = 0;

@NgModule({
  providers: [
    LoaderService,
    { provide: NgxProgressBuffer, multi: false, useValue: defaultBuffer },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: NgxProgressInterceptor },
  ]
})
export class NgxProgressModule {

  static forRoot({ loaderProvider = null, buffer = defaultBuffer }:
   { loaderProvider?: any | null, buffer?: number }): ModuleWithProviders {
    return {
      ngModule: NgxProgressModule,
      providers: [
        { provide: NgxProgressBuffer, multi: false, useValue: buffer },
        { provide: NgxProgressLoader, multi: false, useValue: loaderProvider },
        loaderProvider && { provide: LoaderService, multi: false, useFactory: loaderFactory, deps: [NgxProgressLoader] }
      ]
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: NgxProgressModule) {
    if (parentModule) {
      throw new Error(`NgxProgressModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}

export function loaderFactory(loader: any): any {
  if (typeof loader === 'function') {
    return loader();
  }

  return loader;
}
