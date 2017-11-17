import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LatLngLiteral } from '@agm/core';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  coordinates: LatLngLiteral = { lat: 40, lng: 40 };
  mapZoom: number = 12;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  onLocate() {
    const toast = this.toastCtrl.create({
      message: 'Geolocation is not available in your device',
      duration: 3000,
      position: 'top'
    });

    const success = (position: Position) => {
      this.coordinates.lat = position.coords.latitude;
      this.coordinates.lng = position.coords.longitude;
      this.mapZoom = 16;
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, () => toast.present());
    } else {
      toast.present();
    }
  }
}
