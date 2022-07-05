import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnisexComponent } from './anatomy/unisex/unisex.component';
import { DynamicAnatomyComponent } from './components/dynamic-anatomy/dynamic-anatomy.component';

@NgModule({
  declarations: [
    AppComponent,
    UnisexComponent,
    DynamicAnatomyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
