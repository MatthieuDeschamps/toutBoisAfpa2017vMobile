import {Component, ViewChild} from '@angular/core';
import {NavParams} from 'ionic-angular';


declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  @ViewChild('map') mapElement;
  public map : any;
  user;

  constructor(public navParams: NavParams) {
    this.user = navParams.data.client;
    this.map = null;
    this.loadMap();
  }


  ionViewDidLoad() {
    this.initMap();
    console.log('la latitude est:' + this.user.lat);
    console.log('la latitude est:' + this.user.long);
  }

  initMap(){
    let  latlng = new google.maps.LatLng(this.user.lat,this.user.long);
    let marker = new google.maps.Marker({
      position: latlng,
      title:'ICI le client est:' + this.user.nomEntrepriseClient,
    });
    let mapOptions = {
      center: latlng,
      zoom:15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions,marker);
  }

  /*loadMap(){

    let option = {timeout: 2000,enableHightAccuracy: true};
    Geolocation.getCurrentPosition(option).then((position)=> {

      let latlng = new google.maps.LatLng(position.coord.latitude,position.coord.latitude);
      let mapOptions = {
        center:latlng,
        zoom:15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(document.getElementById("map"),mapOptions);

    });
  }*/
  loadMap(){
    let latLng = new google.maps.LatLng(this.user.Lat, this.user.long);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }





}
