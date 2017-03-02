import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Accueil } from '../pages/accueil/accueil';
import {LoginPage} from "../pages/login/login";
import {ClientPage} from "../pages/client/client";
import {ListeCommandesPage} from "../pages/liste-commandes/liste-commandes";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = LoginPage;
  rootPage: any = Accueil;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: Accueil },
      { title: 'Clients', component: ClientPage },
      { title: 'Commandes', component: ListeCommandesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  goBack(){
    this.nav.setRoot(LoginPage);
  }
}

