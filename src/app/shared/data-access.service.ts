import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

constructor(private http: HttpClient) { }

get2070ProcessCard(){
  let card = 'http://10.51.8.92:441/api/CoreProcessCard/Get2070';
  return this.http.get(card);
}

getPlant5ProcessCard(){
  let plant = 'http://10.51.8.92:441/api/CoreProcessCard/GetPlant5';
  return this.http.get(plant)
}

}
