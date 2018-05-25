import { Component, OnInit } from '@angular/core';
import { PartidoCrudService } from '../../../services/partido-crud.service';
import { Partido } from '../../../models/partidos';

@Component({
  selector: 'app-admin-partidos',
  templateUrl: './admin-partidos.component.html',
  styleUrls: ['./admin-partidos.component.css']
})
export class AdminPartidosComponent implements OnInit {

  partido: Partido;

  constructor(private partidoService: PartidoCrudService) {
    this.partido = new Partido();
   }



  ngOnInit() {
  }

  savePartido(partido) {
    console.log(partido);
    this.partidoService.addPartido(partido);

  }





}
