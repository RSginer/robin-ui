# RobinUI
<div align="center">
  <img width="200px" src="https://raw.githubusercontent.com/ngBat/graphic-designs/master/robin-ui/logo/robin-ui.png">
  <br/>
RobinUI is a library with rich UI Angular components to make the frontend developers life more easy :D  
</div>


## Installation

To install this library, run:

```bash
$ npm install @ngbat/robin-ui --save
```

## Getting started

Install the package

```bash
$ npm install --save @ngbat/robin-ui 
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import RobinUI
import { RobinUIModule } from '@ngbat/robin-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RobinUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once RobinUI is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use RobinUI components in app.component.html -->
<h1>
  {{title}}
</h1>
<rb-sample-component></rb-sample-component>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

To link npm package 

```bash
npm run build
cd dist
npm link
```

and go to the project do you want to use

```bash
npm link @ngbat/robin-ui
npm i @ngbat/robin-ui
```

## License

MIT © | Support: [Rubén Soler](mailto:r.solerginer@gmail.com)
