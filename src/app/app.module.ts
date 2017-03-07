import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Accueil } from '../pages/accueil/accueil';
import { LoginPage } from "../pages/login/login";
import { ClientPage } from "../pages/client/client";
import { DataClients } from "../providers/DataClients";
import {ListeCommandesPage} from "../pages/liste-commandes/liste-commandes";
import {DataCommande} from "../providers/data-commande";
import {ListeDetailCommandePage} from "../pages/liste-detail-commande/liste-detail-commande";
import {MapPage} from "../pages/map/map";

@NgModule({
  declarations: [
    MyApp,
    Accueil,
    LoginPage,
    ClientPage,
    ListeCommandesPage,
    ListeDetailCommandePage,
    MapPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Accueil,
    LoginPage,
    ClientPage,
    ListeCommandesPage,
    ListeDetailCommandePage,
    MapPage,

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    DataClients,
    DataCommande,
  ]
})
export class AppModule {}
