import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from 'ionic-native';



import { ListeCommandesPage }       from "../liste-commandes/liste-commandes";
import { MapPage }                  from "../map/map";
import { DataCommande }             from "../../providers/data-commande";


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
  url="http://matthieudeschamps.be/toutboisMobile/";




  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public data:DataCommande)
  {
    this.user = navParams.data.client;
  }


  ViewCommande(client){
    this.navCtrl.push(ListeCommandesPage,{client:client});
    console.log('ViewCommande : '+client);
  }

  ViewMap(client){
    this.navCtrl.push(MapPage,{client:client});
  }

  ViewNavigateTo(adresse){

    let options: LaunchNavigatorOptions ={
      start: 'London,ON',
      app: LaunchNavigator.APP.USER_SELECT
    };
    LaunchNavigator.navigate(adresse, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );

  }

  ionViewDidLoad() {
    console.log('Chargement -->  DétailClient via ClientPage');
    console.log('Numéro de client est :'+this.user.numeroClient);
  }







}
