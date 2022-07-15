import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnatomyComponent } from '@app/anatomy/anatomy.component';
import { DynamicAnatomyComponent } from './components/dynamic-anatomy/dynamic-anatomy.component';
import { HeaderComponent } from './layout/header/header.component';
import { NoRecordFoundComponent } from './components/no-record-found/no-record-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AnatomyComponent,
    DynamicAnatomyComponent,
    HeaderComponent,
    NoRecordFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
