import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ObservedValuesFromArray} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient:HttpClient) { }

  //code to parse through api and gather wanted information
  getHeroData():Observable<any>
  {
    return this.httpClient.get('https://jsonblob.com/api/9852970b-b41e-11eb-8fb2-1d97fc792e2b');
  }
}
