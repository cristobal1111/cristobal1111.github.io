import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Declaración del elemento
  
  constructor(private router: Router, private animationCtrl: AnimationController) {
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },4500);
   }
  
  @ViewChild('gorro', { read: ElementRef, static: true }) gorro: ElementRef;
  @ViewChild('monos', { read: ElementRef, static: true }) monos: ElementRef;
  @ViewChild('letras', { read: ElementRef, static: true }) letras: ElementRef;
  
  ngAfterViewInit() {

    const Monitos=this.animationCtrl
    .create()
    .addElement(this.monos.nativeElement)
    .duration(3000)
    .iterations(1)
    .keyframes([
      { offset: 0, transform: 'scale(0.5) rotate(0)'},
      { offset: 0.5, transform: 'scale(1) rotate(180deg)' },
      { offset: 1, transform: 'scale(0.5) rotate(180deg)' }
    ])
    .fromTo('transform', 'translateY(100px)', 'translateY(235px)')
    .fromTo('opacity', '0.2', '1');

    const gorrito=this.animationCtrl
    .create()
    .addElement(this.gorro.nativeElement)
    .duration(3000)
    .iterations(1)

    .keyframes([
      { offset: 0, transform: 'scale(1) rotate(0)'},
      { offset: 0.5, transform: 'scale(0.5) rotate(180deg)' },
      { offset: 1, transform: 'scale(1) rotate(180deg)' }
    ])
    .fromTo('transform', 'translateY(100px)', 'translateY(-50px)')
    .fromTo('opacity', '0.2', '1'); 

    const letritas=this.animationCtrl
    .create()
    .addElement(this.letras.nativeElement)
    .duration(4000)
    .iterations(1)
    .fromTo('opacity', '0', '1')
    .fromTo('transform', 'translateY(100px)', 'translateY(-170px)')

    Monitos.play();
    gorrito.play();
    letritas.play();
  }

}
