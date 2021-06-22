import { Component, OnInit } from '@angular/core';
import { Hoteles } from 'src/app/interfaces/hotelInterface';
import { HotelesService } from '../../services/hoteles.service';

@Component({
  selector: 'app-hoteles-listado',
  templateUrl: './hoteles-listado.component.html',
  styleUrls: ['./hoteles-listado.component.css']
})
export class HotelesListadoComponent implements OnInit {

  hoteles:Hoteles[] = [];
  isBack:boolean = true;

  constructor(private hotelesService:HotelesService) { }

  ngOnInit(): void {
     this.hotelesService.buscarHoteles().subscribe(data => {
      this.hoteles = data.data
    })
  }

  filterByRating(rating:number):void {
    const oldHoteles = this.hoteles;
    this.hoteles =  this.hoteles.filter(hotel => Number(hotel.hotel.rating) === rating )
    this.isBack = !this.isBack;
  }

  goBack():void {
    this.hotelesService.buscarHoteles().subscribe(data => {
      this.hoteles = data.data
      this.isBack = !this.isBack;
    })
  }



}
