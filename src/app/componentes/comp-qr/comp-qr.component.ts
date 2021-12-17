import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-comp-qr',
  templateUrl: './comp-qr.component.html',
  styleUrls: ['./comp-qr.component.scss'],
})
export class CompQrComponent implements OnInit {

  qrScan:any={
    idAsignatura: null,
    seccion: "",
    asignatura: "",
    docente:"",
    correo: ""
  }


  constructor(private barcodeScanner:BarcodeScanner) { }

  ngOnInit() { }

  escanear(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.qrScan = barcodeData.text;
      console.log('Barcode data', this.qrScan);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
