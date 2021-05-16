import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  cHMadeName:string = "";
  cHName:string = "";
  cHFirst:string = "";
  cHPicture:string = "";
  cHPower;

  constructor(private storage:Storage, private navCtrl:NavController) { }

  //on boot, send the infomation to new variables to be accessible
  ngOnInit() 
  {
    this.storage.get("madeMadeName")
    .then((data)=>{
      this.cHMadeName;
    })
    .catch();

    this.storage.get("madeName")
    .then((data)=>{
      this.cHName;
    })
    .catch();

    this.storage.get("madeFirst")
    .then((data)=>{
      this.cHFirst;
    })
    .catch();

    this.storage.get("madePower")
    .then((data)=>{
      this.cHPower;
    })
    .catch();

    this.storage.get("madePicture")
    .then((data)=>{
      this.cHPicture;
    })
    .catch();
  }

  //set user information to variable and return them to heroes page
  updateStatus()
  {
    this.storage.set('madeMadeName', this.cHMadeName)
    this.storage.set('madeName', this.cHName)
    this.storage.set('madeFirst', this.cHFirst)
    this.storage.set('madePower', this.cHPower)
    this.storage.set('madePicture', this.cHPicture)
    .then(()=>{
      this.navCtrl.navigateBack('/heroes');
    })
    .catch()
  }

}
