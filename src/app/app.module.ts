import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnatomyComponent } from '@app/features/anatomy/anatomy.component';
import { DynamicAnatomyComponent } from '@components/dynamic-anatomy/dynamic-anatomy.component';
import { HeaderComponent } from '@app/layout/header/header.component';
import { NoRecordFoundComponent } from '@components/no-record-found/no-record-found.component';
import { VitalComponent } from '@app/features/vital-check/vital-check.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnatomyComponent,
    DynamicAnatomyComponent,
    HeaderComponent,
    NoRecordFoundComponent,
    VitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
