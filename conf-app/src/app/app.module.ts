import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {PresentateursComponent} from "./components/presentateurs/presentateurs.component";

import {SessionsComponent} from "./components/sessions/sessions.component";
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import {HomePageModule} from "./home/home.module";

@NgModule({
  declarations: [AppComponent, PresentateursComponent, SessionsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HomePageModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent],
  exports: [AppComponent
  ]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default);
  }
}
