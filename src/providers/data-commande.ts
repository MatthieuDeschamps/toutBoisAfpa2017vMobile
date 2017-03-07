import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataCommande provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataCommande {


  constructor(public http: Http) {


  }

  chargerListeCommande(idC){
    var url = "http://matthieudeschamps.be/toutboisMobile/";
    var response = this.http.get(url+"listeCommandeIdCli.php?idClient="+idC).map(res => res.json());
    console.log('datacommande  numero de Client = '+ idC);
    //var response = this.http.get(url+"listeCommandeIdCli.php?idClient="+idC).map(res => res.json());
    return response

  }

  chargerDetailCommande(idCommande){
    var url = "http://matthieudeschamps.be/toutboisMobile/";
    var response = this.http.get(url+"detailCommandeIdCommande.php?idCommande="+idCommande).map(res => res.json());
    console.log('datacommande  numero de Commande = '+ idCommande);
    return response
  }







}
