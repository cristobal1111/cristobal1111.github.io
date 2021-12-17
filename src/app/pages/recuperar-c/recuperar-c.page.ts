import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-c',
  templateUrl: './recuperar-c.page.html',
  styleUrls: ['./recuperar-c.page.scss'],
})
export class RecuperarCPage implements OnInit {

  constructor(private router:Router, private animationCtrl:AnimationController) { }

  @ViewChild('recuperarI', {read: ElementRef, static: true}) recuperarI: ElementRef;

  ngAfterViewInit(){
    const meme=this.animationCtrl
    .create()
    .addElement(this.recuperarI.nativeElement)
    .duration(2000)
    .iterations(1)
    .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
    .fromTo('opacity', '0.2', '1');

    meme.play();
  }

  ngOnInit() {
  }

  
  volver(){
    console.log("volver");
    this.router.navigate(['/login']);
  }

}
