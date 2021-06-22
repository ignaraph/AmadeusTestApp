import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/interfaces/hotelInterface';

@Injectable({
  providedIn: 'root'
})
export class HotelesService  {

  private apiUrl:string = 'https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=MAD';

  constructor(private http:HttpClient ) { }

  buscarHoteles():Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl)
  }


}