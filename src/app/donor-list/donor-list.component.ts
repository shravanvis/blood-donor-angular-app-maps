import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

declare var google: any;
let map: any;
let marker: any;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
let infowindow: any;
const iconBase = 'http://maps.google.com/mapfiles/ms/icons/';


export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};


@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.scss']
})
export class DonorListComponent implements OnInit {

  // for toggle menu sidebar
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  @ViewChild('map', {static: false}) mapElement: ElementRef;

  farmers = [];
  createMarkers(place: any) {
    const latitude = parseFloat(place.coords.latitude);
    const longitude = parseFloat(place.coords.longitude);
    const donorMarker = new google.maps.Marker({
      map,
      position: { lat: latitude, lng: longitude },
      icon: iconBase + 'green-dot.png'
    });
  
    google.maps.event.addListener(donorMarker, 'click', function() {
      infowindow.setContent('<h3>' + place.name + '</h3><p>crop: ' + place.crop + '<br>Phone number: ' + place.phone + '<br>Email: ' + place.email + '<br>Quantity: ' + place.quantity + '<br>rupees: ' + place.expected_rupees + '<br>Address: ' + place.address + '</p>');
      infowindow.open(map, this);
    });
  }

  constructor(public route: Router) {
    firebase.database().ref('farmers/').on('value', resp => {
      this.farmers = [];
      this.farmers = snapshotToArray(resp);
      for (const donor of this.farmers) {
        this.createMarkers(donor);
      }
    });
    this.initMap();
   }

  ngOnInit() {
  }
  
  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: location.coords.latitude, lng: location.coords.longitude },
        zoom: 15
      });
  
      infowindow = new google.maps.InfoWindow();
  
  
      marker = new google.maps.Marker({
        position: { lat: location.coords.latitude, lng: location.coords.longitude },
        map,
        title: 'Click to zoom',
        icon: iconBase + 'blue-dot.png'
      });
  
      map.addListener('center_changed', () => {
        window.setTimeout(() => {
          map.panTo(marker.getPosition());
        }, 3000);
      });
  
      marker.addListener('click', (event: any) => {
        // infowindow.setPosition(event.latLng);
        this.route.navigate(['/add-donor'])
        infowindow.setContent('<h2>Farmer Location!</h2>' +
        '<h3><a href="/add-donor/' + marker.getPosition().lat() + '/' + marker.getPosition().lng()  + '">Register Here</a></h3>');
        infowindow.open(map, marker);
      });
    }, (error) => {
      console.log(error);
    }, options);
  }

}