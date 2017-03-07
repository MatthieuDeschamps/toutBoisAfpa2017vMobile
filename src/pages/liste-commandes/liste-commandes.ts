import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {DataCommande} from "../../providers/data-commande";
import {DataClients} from "../../providers/DataClients";
import {ListeDetailCommandePage} from "../liste-detail-commande/liste-detail-commande";

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
  user;
  listeCommandes  : Array<any>;
  loader          : any;

  constructor(public navCtrl      : NavController,
              public dataCOM      : DataCommande,
              public data         : DataClients,
              public navParams    : NavParams,
              public loadingCtrl  : LoadingController)
  {
    this.user           = navParams.data.client;

    console.log('user : '+navParams.data.client)
   // this.listeCommandes = navParams.data.commande;

  }


  ngOnInit()  {
    this.presentLoading();
    this.dataCOM.chargerListeCommande(this.user.numeroClient).subscribe(
      dataCOM => {
        this.listeCommandes = dataCOM;
        console.log(dataCOM);

        this.loader.dismiss();
      },
      err => {
        console.log(err);
      },
      () => console.log('Chargement Commande  ok ')
    );
  }

  ViewCommandeDetail(commandeDetail){
    this.navCtrl.push(ListeDetailCommandePage,{commande:commandeDetail});
    //console.log('ViewCommande : '+commandeDetail);
    //this.navCtrl.push(ListeCommandesPage,{listeCommandes:user});
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Chargement des commandes en cours..."
    });
    this.loader.present();
  }

  ionViewDidLoad() {
    console.log('Affichage des commandes');
    //console.log(this.user.numeroClient);
  }


}
