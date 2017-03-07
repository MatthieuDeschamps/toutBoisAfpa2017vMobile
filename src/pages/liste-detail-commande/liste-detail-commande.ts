import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {DataCommande} from "../../providers/data-commande";

/*
  Generated class for the ListeDetailCommande page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-liste-detail-commande',
  templateUrl: 'liste-detail-commande.html'
})
export class ListeDetailCommandePage {
  commande;
  detailCommande  : Array<any>;
  loader          : any;
  url             = "http://matthieudeschamps.be/toutboisMobile/";


  constructor(public navCtrl    : NavController,
              public navParams  : NavParams,
              public loadingCtrl: LoadingController,
              public  dataCom   : DataCommande)
  {
    this.commande     = navParams.data.commande;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeDetailCommandePage');
  }

  ngOnInit()  {
    this.presentLoading();
    this.dataCom.chargerDetailCommande(this.commande.id_commande).subscribe(
      dataCOM => {
        this.detailCommande = dataCOM;
        console.log(dataCOM);

        this.loader.dismiss();
      },
      err => {
        console.log(err);
      },
      () => console.log('Chargement détail commande ok ')
    );
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Chargement des commandes en cours..."
    });
    this.loader.present();
  }

}
