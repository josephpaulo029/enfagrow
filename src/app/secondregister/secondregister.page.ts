import { Component, ViewChild , OnInit } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';
import { DatabaseService, Dev } from './../services/database.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-secondregister',
  templateUrl: './secondregister.page.html',
  styleUrls: ['./secondregister.page.scss'],
})
export class SecondregisterPage implements OnInit {

  // developers: Dev[] = [];
 
  products: Observable<any[]>;
 
  // developer = {};
  product = {};

  selectedView = 'devs';
  
  signature = '';
  isDrawing = false;

  
  @ViewChild(SignaturePad,{static: true}) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 200,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };

  constructor(public storage: Storage,private db: DatabaseService) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        // this.db.getDevs().subscribe(devs => {
        //   this.developers = devs;
        // })
        this.products = this.db.getProducts();
      }
    });
  }

  // addDeveloper() {
  //   let skills = this.developer['skills'].split(',');
  //   skills = skills.map(skill => skill.trim());
 
  //   this.db.addDeveloper(this.developer['name'])
  //   .then(_ => {
  //     this.developer = {};
  //   });
  // }
 
  addProduct() {
    this.db.addProduct(this.product['names'])
    .then(_ => {
      this.product = {};
    });
  }

 

  ionViewDidEnter() {
    this.signaturePad.clear()
    this.storage.get('savedSignature').then((data) => {
      this.signature = data;
    });
  }
 
  drawComplete() {
    this.isDrawing = false;
  }
 
  drawStart() {
    this.isDrawing = true;
  }
 
  savePad() {
    this.signature = this.signaturePad.toDataURL();
    this.storage.set('savedSignature', this.signature);
    //this.signaturePad.clear();
    // let toast = this.toastCtrl.create({
    //   message: 'New Signature saved.',
    //   duration: 3000
    // });
    // toast.present();
  }
 
  clearPad() {
    this.signaturePad.clear();
  }
}
