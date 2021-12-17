import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';
import { BdRegistrAppService } from '../../servicios/bd-registr-app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})

export class LoginPage  {

  hide = true;

  user:string;
  password:string;


  constructor(private router:Router, private animationCtrl: AnimationController, public alertController: AlertController,
     public bdRegistrApp: BdRegistrAppService, ) {}


  async iniciar(){
    this.bdRegistrApp.iniciarSesion(this.user, this.password);
  }
  guardar(){
    this.bdRegistrApp.guardar(this.user, this.password);
  }

  @ViewChild('logo', { read: ElementRef, static: true }) logo: ElementRef;

  ngAfterViewInit(){
    const Loguito=this.animationCtrl
    .create()
    .addElement(this.logo.nativeElement)
    .duration(2000)
    .iterations(1)
    .keyframes([
      { offset: 0, transform: 'scale(1))', opacity: '0.3' },
      { offset: 1, transform: 'scale(1.2)', opacity: '0.6' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);

    Loguito.play();
  }

  /*
  iniciar(){
    if (this.user !="" && this.password !="") {
      let navigationExtras:NavigationExtras={
        state : {dato: this.user} //Credenciales de inicio de sesión
      }
      this.router.navigate(['/menu-docente'], navigationExtras);
  
    } else {
      this.presentAlert("Ups","Usuario o Contraseña Incorrecta");
    }

    console.log();
  }
  */

  Rpassword(){
    this.router.navigate(['/recuperar-c']);
  }

}
