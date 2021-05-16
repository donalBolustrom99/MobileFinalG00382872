import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{


  constructor(private flashlight: Flashlight) {}

  ngOnInit()
  {

  }

  //flashing method when button is click flashlight will turn on, imports above
  flashlightToggle()
  {
    this.flashlight.toggle();
  }
}