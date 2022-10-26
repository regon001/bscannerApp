import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {

  code: any;
  constructor(private router: Router, public activated: ActivatedRoute) { }

  ngOnInit() {
    this.activated.queryParams.subscribe(params =>{
      this.code = this.router.getCurrentNavigation().extras.state.codeqr;
      console.log('El código es: '  + this.code);
    });
  }

}
