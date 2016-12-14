import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SchemaListComponent } from './schema-list/schema-list.component';
import { SchemaDetailComponent } from './schema-detail/schema-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchemaService } from "./schema.service";

import { AppRoutingModule } from './app-routing.module';
import { SchemaSearchComponent } from './schema-search/schema-search.component';
import './rxjs-extensions';


// import { RouterModule } from '@angular/router';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    SchemaListComponent,
    SchemaDetailComponent,
    DashboardComponent,
    SchemaSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
    /*RouterModule.forRoot([
      {
        path: 'detail/:id',
        component: SchemaDetailComponent
          // 3 // path: '',
          // 3 // redirectTo: '/dashboard',
          // 3 // pathMatch: 'full'
          // 2 // path: 'dashboard',
          // 2 // component: DashboardComponent
          // 1 // path: 'schema',
          // 1 // component: SchemaListComponent
      }
    ])*/
  ],
  providers: [SchemaService],
  bootstrap: [AppComponent]
})


export class AppModule { }
