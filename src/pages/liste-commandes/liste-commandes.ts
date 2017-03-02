import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {DataCommande} from "../../providers/data-commande";
import {DataClients} from "../../providers/DataClients";

/*
  Generated class for the ListeCommandes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-liste-commandes',
  templateUrl: 'liste-commandes.html'
})
export class ListeCommandesPage {
  commande;

  //listeCommandes: Array<any>;
  // loader:any;

  constructor(public navCtrl: NavController, public data:DataCommande, public navParams: NavParams,public loadingCtrl:LoadingController) {

   this.commande = navParams.data.listeCommande;
  }


  ionViewDidLoad() {
    console.log('Affichage des commandes');
    //console.log(this.user.numeroClient);
  }


}
