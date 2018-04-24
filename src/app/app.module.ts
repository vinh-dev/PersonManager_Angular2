import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { InMemoryDataService } from "./in-memory-data.service";
import { AppComponent } from './app.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonService } from './person.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { PersonSearchComponent } from './person-search/person-search.component';

import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    MessagesComponent,
    PersonSearchComponent,
    PersonDetailComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule.forRoot(),

  ],

  providers: [
    PersonService,
    MessageService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
