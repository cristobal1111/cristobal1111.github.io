import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationDurations } from '@angular/material/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  constructor(private animationCtrl: AnimationController) { }
  @ViewChild('logoDest2', {read: ElementRef, static: true}) logoDest2: ElementRef;
  @ViewChild('logoDest1', {read: ElementRef, static: true}) logoDest1: ElementRef;


  ngAfterViewInit(){
    const logo2=this.animationCtrl
    .create()
    .addElement(this.logoDest2.nativeElement)
    .duration(8000)
    .iterations(1)
    .fromTo('opacity', '0.2', '1');

    const logo1=this.animationCtrl
    .create()
    .addElement(this.logoDest1.nativeElement)
    .duration(8000)
    .iterations(1)
    .fromTo('opacity', '0', '1');

    const animacion = this.animationCtrl
    .create()
    .iterations(1)
    .addAnimation([logo2,logo1]);

    animacion.play();
  }


  ngOnInit() {
  }

}
