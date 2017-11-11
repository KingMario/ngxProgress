import { InjectionToken } from '@angular/core';

export const NgxProgressBuffer =
    new InjectionToken<number>('NgxProgress: buffer');

export const NgxProgressLoader =
    new InjectionToken<any>('NgxProgress: loader');
