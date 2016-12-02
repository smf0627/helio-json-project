import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JsonListComponent } from './json-list/json-list.component';
import { JsonDetailComponent } from './json-detail/json-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonListComponent,
    JsonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
