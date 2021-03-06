import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataClients {

  constructor(public http: Http) {
    console.log('Hello DataClients Provider');
  }

  LoadClients() {
    var url = "http://matthieudeschamps.be/toutboisMobile/detailClient.php";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
/*

  InsertMember(firstname,lastename,email,mobile,city,state,country,postalcode)
  {
    var url = 'http://nipc.esy.es/nip/backend/index.php?r=members/insert&firstname='+firstname+'&lastname='+lastename+'&email='+email+'&mobile='+mobile+'&city='+city+'&state='+state+'&country='+country+'&postalcode='+postalcode;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  DeleteMember(id)
  {
    var url = 'http://nipc.esy.es/nip/backend/index.php?r=members/deletemember&id='+id;
    var response = this.http.get(url).map(res => res.json());
    return response;

  }

  EditMember(id,firstname,lastename,email,mobile,city,state,country,postalcode)
  {
    var url = 'http://nipc.esy.es/nip/backend/index.php?r=members/editmembers&firstname='+firstname+'&lastname='+lastename+'&email='+email+'&mobile='+mobile+'&city='+city+'&state='+state+'&country='+country+'&postalcode='+postalcode+'&id='+id;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  searchMembers(name) {
    var url = 'http://nipc.esy.es/nip/backend/index.php?r=members/searchmembers&name='+name ;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
*/
}
