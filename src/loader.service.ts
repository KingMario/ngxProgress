import { Injectable, Injector, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef } from '@angular/core';
import { LoaderComponent } from './loader.component';

export interface LoaderProvider {
    start: () => void;
    stop: () => void;
}

@Injectable()
export class LoaderService implements LoaderProvider {

    private instance;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    start() {
        if (this.instance) {
            return;
        }

        this.instance = this.componentFactoryResolver
            .resolveComponentFactory(LoaderComponent)
            .create(this.injector);

        this.appRef.attachView(this.instance.hostView);

        const htmlElement = (this.instance.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        htmlElement.setAttribute('style', 'position:fixed;top:0;left:0;width:100%;');

        document.body.appendChild(htmlElement);
    }

    stop() {
        if (this.instance) {
            this.appRef.detachView(this.instance.hostView);
            this.instance.destroy();
            this.instance = null;
        }
    }
}
