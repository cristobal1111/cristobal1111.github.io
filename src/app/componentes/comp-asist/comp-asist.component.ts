import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Navigation } from 'selenium-webdriver';
import { APIService } from 'src/app/servicios/api.service';


@Component({
  selector: 'app-comp-asist',
  templateUrl: './comp-asist.component.html',
  styleUrls: ['./comp-asist.component.scss'],
})
export class CompAsistComponent {

  asignaturas:any;
  asignatura:any={

    id: null,
    ano: "",
    nombre: "",
    docente:"",
  };

  constructor(private api:APIService) { }
  
  ionViewWillEnter(){
    this.getAsignaturas();
  }

  getAsignaturas(){
    this.api.getAsignaturas().subscribe((data)=>{
      this.asignaturas=data;
    },
    (error)=>{console.log(error);});
  }

  getAsignatura(id){
    this.api.getAsignatura(id).subscribe((data)=>{
      this.asignatura=data;
    });
  }

}
