import { Component, OnInit } from '@angular/core';
import { PartidoCrudService } from '../../../services/partido-crud.service';
import { Partido } from '../../../models/partidos';
import { map } from 'rxjs/operators';

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
    this.partido = new Partido();
  }

  savePartido(partido: Partido) {
    console.log(partido);
    this.partidoService.getAllPartidos();
    this.partidoService.addPartido(partido).subscribe(
      resPartido => {console.log('partido: '); console.log(resPartido); }
    );

  }





}
