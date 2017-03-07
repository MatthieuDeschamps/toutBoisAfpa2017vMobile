import { Component } from '@angular/core';
import {NavController, AlertController, LoadingController} from 'ionic-angular';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import { Accueil } from "../accueil/accueil";


/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  data : any;
  username: any;

  constructor(private navCtrl: NavController, private http : Http,
              private alert : AlertController, private loading : LoadingController) {
    this.data = {};
    this.data.username  = "";
    this.data.password = "";

  }

  login(){
    let username = this.data.username;
    let password = this.data.password;
    let data = JSON.stringify({username, password});
    let link = "http://matthieudeschamps.be/toutboisMobile/login.php";


    this.http.post(link, data)
      .map((res:Response)=>res.json())
      .subscribe(res=> {
        let loader = this.loading.create({
          content: "Vérification! Patientez merci...",
          duration: 1000
        });
        loader.present();
        this.navCtrl.setRoot(Accueil);
      }, error => {
        let alert = this.alert.create({
          title: 'Attention',
          subTitle: 'Mauvais identifiant ou mot de passe...',
          buttons: ['OK']
        });
        alert.present();
      });
  }

}
