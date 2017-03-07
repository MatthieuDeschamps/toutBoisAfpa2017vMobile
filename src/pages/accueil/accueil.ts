import { Component } from '@angular/core';

import { NavController, NavParams,LoadingController  } from 'ionic-angular';
import {DataClients} from "../../providers/DataClients";
import { ClientPage } from "../client/client";
//import {ListeCommandesPage} from "../liste-commandes/liste-commandes";
import {LoginPage} from "../login/login";
//import { InsertPage } from "../insert/insert";
//import { UpdatePage } from "../update/update";

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class Accueil {

  listeclients  : Array<any>;
  loader        : any;

  constructor(public navCtrl: NavController,
              public dataClient:DataClients,
              public navParams:NavParams,
              public loadingCtrl:LoadingController)
  {

  }

  ngOnInit()
  {
    this.presentLoading();
    this.dataClient.LoadClients().subscribe(
      data => {
        this.listeclients = data;
        console.log(data);
        this.loader.dismiss();
      },
      err => {
        console.log(err);
      },
      () => console.log('Recherche clients ok')
    );
  }

  /*Refresh()
  {
    this.presentLoading();
    this.data.LoadClients().subscribe(
      data => {
        this.listeclients = data;
        console.log(data);
        this.loader.dismiss();
      },
      err => {
        console.log(err);
      },
      () => console.log('Actualisation clients ok')
    );
  }*/

  Viewperson(client)
  {
    this.navCtrl.push(ClientPage,{client:client});

  }

  goBack(){
    this.navCtrl.push(LoginPage);
  }



  /*
  Insert()
  {
    this.navCtrl.push(InsertPage);
  }

  update(client)
  {
    this.navCtrl.push(UpdatePage,{client:client});
  }
  */

/*
  Delete(id:any)
  {
    this.presentLoading();
    this.data.DeleteMember(id).subscribe(
      data => {
        this.clients = data;
        console.log(data);
        this.loader.dismiss();
      },
      err => {
        console.log(err);
      },
      () => console.log('Movie Search Complete')
    );
  }
  search(event, key)
  {
    if(event.target.value.length > 0) {
      this.data.searchMembers(event.target.value).subscribe(
        data => {
          this.clients = data;
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
      );
    }
  }
*/
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Chargement..."
    });
    this.loader.present();
  }

}
