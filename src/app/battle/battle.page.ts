import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../Services/heroes.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.page.html',
  styleUrls: ['./battle.page.scss'],
})
export class BattlePage implements OnInit {
  heroData:any = [];
  public randomHero:string;
  constructor(private heroesService:HeroesService) { 
    this.heroData[Math.floor(Math.random()* this.heroData.length)];
  }

  
  //on start up, get the heroes array full and display for testing on console
  ngOnInit() 
  {
    this.heroesService.getHeroData().subscribe(
      (data)=>{
        this.heroData = data.Info;
        console.log(this.heroData);
      }
    );
  }

}
