import { Injectable } from '@angular/core';

export interface LoaderProvider {
    start: () => void;
    stop: () => void;
}

@Injectable()
export class LoaderService implements LoaderProvider {

    start() {
        console.log('should implement Start method');
    }

    stop() {
        console.log('should implement Stop method');
    }
}
