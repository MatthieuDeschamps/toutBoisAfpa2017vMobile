import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {ListeCommandesPage} from "../liste-commandes/liste-commandes";
import {DataCommande} from "../../providers/data-commande";

/*
  Generated class for the Client page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-client',
  templateUrl: 'client.html'
})
export class ClientPage {
  user;
  url="http://localhost/toutboisPhpMobile/loglucoV/";
  loader;
  listeCommande: Array<any>;



  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataCommande, public loadingCtrl:LoadingController) {
    this.user = navParams.data.client;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
    console.log('numéro de client est :'+this.user.numeroClient);
  }

  ngOnInit()
  {
    this.presentLoading();
    this.data.chargerListeCommande(this.user.numeroClient).subscribe(
      data => {
        this.listeCommande = data;
        console.log(data);
        this.loader.dismiss();
      },
      err => {
        console.log(err);
      },
      () => console.log('Chargement Commande Client ok')
    );
  }

  ViewCommande(commande){
    this.navCtrl.push(ListeCommandesPage,{listeCommande:commande});

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Chargement..."
    });
    this.loader.present();
  }







}
