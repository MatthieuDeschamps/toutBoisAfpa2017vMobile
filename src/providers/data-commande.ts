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
    var url = "http://localhost/toutboisPhpMobile/loglucoV/";
    var response = this.http.get(url+"listeCommandeIdCli.php?idClient="+idC).map(res => res.json());
    //var response = this.http.get(url+"listeCommandeIdCli.php?idClient="+idC).map(res => res.json());
    return response
  }

}
