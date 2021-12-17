import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../servicios/api.service';


@Component({
  selector: 'app-menu-docente',
  templateUrl: './menu-docente.page.html',
  styleUrls: ['./menu-docente.page.scss'],
})
export class MenuDocentePage implements OnInit {

  user:any;
  password:any;
  constructor(private activeRoute:ActivatedRoute, private router:Router, private api:APIService) {
    this.activeRoute.queryParams.subscribe(params=>{//Utilizo lambda
      if(this.router.getCurrentNavigation().extras.state){//Validamos si el extras de la navegación tiene parametros
         this.user=this.router.getCurrentNavigation().extras.state.user;
         this.password=this.router.getCurrentNavigation().extras.state.password;
         console.log(this.user);
         console.log(this.password);//Muestro por consola el parámetro obtenido
      }});

  }


  segmentChanged(event : any){
    console.log(event)
    let ruta= event.detail.value
    this.router.navigate(['menu-docente/' +ruta]);
  }

  cerrarS(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}


