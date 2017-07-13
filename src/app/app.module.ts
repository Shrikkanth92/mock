import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import {TextService} from './service/text.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NewComponent } from './component/new/new.component';
import { ResultComponent } from './component/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [
      TextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
