import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  codigo: any;
  constructor(private barcodeScanner: BarcodeScanner, private router: Router) {}

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.codigo = barcodeData.text;
      console.log('Barcode data', this.codigo);
      this.navegar(this.codigo);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  navegar(qr: any){
    this.router.navigate(['code'], {
      state: {
        codeqr: qr
      }
    });
  }

}
