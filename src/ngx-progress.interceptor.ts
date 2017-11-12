import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import { Injectable, Inject } from '@angular/core';
import { HttpHandler, HttpEvent, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { timer } from 'rxjs/Observable/timer';
import { LoaderService } from './loader.service';
import { NgxProgressBuffer, NgxProgressLoader } from './ngx-progress.tokens';

@Injectable()
export class NgxProgressInterceptor implements HttpInterceptor {

    private pendingRequests = 0;
    private start = false;
    private finish: Subject<boolean> = new Subject<boolean>();

    constructor(
        private loader: LoaderService,
        @Inject(NgxProgressBuffer) private buffer: number) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.pendingRequests++;

        const request = next.handle(req);

        timer(this.buffer)
            .takeUntil(this.finish)
            .take(1)
            .filter(() => !this.start)
            .subscribe(() => {
                this.start = true;
                this.loader.start();
            });

        return request
            .map(event => event)
            .catch(error => Observable.throw(error))
            .finally(() => {

                this.finish.next(false);
                this.pendingRequests--;

                if (this.pendingRequests === 0) {
                    this.start = false;
                    this.loader.stop();
                }
            });
    }
}
