# Angular NgxProgress

Progress loader for Angular 4+ include interceptor. Can be integrate with 3rd parties javascript library.

> Please support this project by simply putting a Github star. Share this library with friends on Twitter and everywhere else you can.

Follow me [![twitter](https://img.shields.io/twitter/follow/wizardnet972.svg?style=social&label=%20wizardnet972)](https://twitter.com/wizardnet972) to be notified about new releases.

## Installation

```sh
npm install ngxProgress --save
```

## For SystemJS

If you use SystemJS to load your files, you might have to update your config:

```js
System.config({
    map: {
        'ngxProgress': 'node_modules/ngxProgress/bundles/index.umd.js'
    }
});
```

## Default Usage

#### 1. Update the markup
Update your root Module for example app.module

```ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxProgressModule } from 'ngxProgress';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        NgProgressbarModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Example for custom 3rd party loader with angular/cli

#### 1. Download [NProgress.js](http://ricostacruz.com/nprogress)
- Download nProgress from CDN to `assets` folder: https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css
https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.js

#### 2. Import the files to the cli
Import `nprogress.js` and `nprogress.css` to `.angular-cli.json`

```json
"styles": [
    ...
    "assets/nprogress/nprogress.css",
    "styles.css",
    ...
],
"scripts": [
    ...
    "assets/nprogress/nprogress.js",
    ...
]
```

#### 3. Update the markup
Update your root Module for example app.module

```ts
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxProgressModule } from 'ngxProgress';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        NgProgressbarModule.forRoot({
            loaderProvider: NProgressLoader,
            buffer: 3000 /* the miliseconds before the loader is appear */
        }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

# License
 [MIT](/LICENSE)
