import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../Services/heroes.service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
})
export class HeroesPage implements OnInit {
  heroData:any = [];
  doneMadeName:string;
  doneName:string;
  doneFirst:string;
  donePower:string;
  donePicture:string;

  constructor(private heroesService:HeroesService, private storage:Storage) { }

  //on boot, gather all information for cards and get it, type to console for verification
  ngOnInit() 
  {
    this.heroesService.getHeroData().subscribe(
      (data)=>{
        this.heroData = data.Info;
        console.log(this.heroData);
      }
    );

    //attempt to take in stored data
      this.storage.get('madeMadeName')
      .then((data)=>{
        this.doneName = data;
      })
      .catch()

      this.storage.get('madeName')
      .then((data)=>{
        this.doneMadeName = data;
      })
      .catch()
      
      this.storage.get('madeFirst')
      .then((data)=>{
        this.doneFirst = data;
      })
      .catch()
      
      this.storage.get('madePower')
      .then((data)=>{
        this.donePower = data;
      })
      .catch()
      
      this.storage.get('madePicture')
      .then((data)=>{
        this.donePicture = data;
      })
      .catch()
  }

}
