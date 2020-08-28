import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'foo', pathMatch: 'full' },
      {
        path: 'foo',
        component: FooComponent
      }
    ], {
      anchorScrolling: 'enabled'
    })
  ],
  declarations: [ AppComponent, FooComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
