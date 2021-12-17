import { Injectable } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IAgendaUser } from '../interfaces/iusuarios';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BdRegistrAppService {


  
  agenda: IAgendaUser[]=[];
  private _storage: Storage | null = null;
  constructor(private storage: Storage, public toastController:ToastController, private router:Router, public loadingController: LoadingController) {
    this.init();
    this.cargarUsuarios();
   }


  async cargarUsuarios() {
    const listaUsuario = await this.storage.get('usuarios');

    if(listaUsuario){
      this.agenda=listaUsuario;
    }
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;


  }

  async iniciarSesion(user:string, password: string ){
    //Verificar si existe el usuario y contraseña

    const existe= await this.agenda.find(u=>u.strUsuario==user && u.strPassword==password);
    this.presentLoadingWithOptions();
    if ( user!=="" && password !=="") {
      if (!existe) {
        this.presentToast("Usuario o contraseña incorrecta!");
      } else {
        this.presentToast("Sesión iniciada exitosamente!");
        this.loadingController.dismiss();
        let NavigationExtras: NavigationExtras={
          state:{user,password}
        };
        this.router.navigate(['/menu-docente'], NavigationExtras);
      }
    } else {
      this.presentToast("Debe ingresar un usuario y contraseña!");
    }
  


  }



  guardar(user:string, password: string ){
    //Verificar si existe el usuario y contraseña

    const existencia=this.agenda.find(u=>u.strUsuario==user && u.strPassword==password);
    if (!existencia) {
      this.agenda.unshift({strUsuario:user, strPassword:password});
      this._storage.set('agenda', this.agenda);
      this.presentToast("Registrado exitosamente!");
    } else { 
      this.presentToast("El usuario ya existe");
    }
  }


  async presentToast(mensaje:string) {

    const toast = await this.toastController.create({

      message: mensaje,

      translucent:true,

      color:'medium',

      position: 'top',

      duration: 2000

    });

    toast.present();

  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: "crescent",
      duration: 1000,
      message: 'Iniciando Sesión',
      //translucent: true,
      //cssClass: 'custom-class custom-loading',
    });
    await loading.present();
  }
}