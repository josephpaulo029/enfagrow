import { Component, ViewChild, OnInit } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';
import { DatabaseService, Dev } from './../services/database.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-secondregister',
  templateUrl: './secondregister.page.html',
  styleUrls: ['./secondregister.page.scss'],
})
export class SecondregisterPage implements OnInit {

  visitors: any;

  product: any = {};

  selectedView = 'devs';

  signature = '';
  isDrawing = false;
  checked: Boolean = false;
  @ViewChild('info', { static: false }) infoFrm

  @ViewChild(SignaturePad, { static: true }) signaturePad: SignaturePad;
  signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 200,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };

  constructor(public storage: Storage, private db: DatabaseService) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getList().subscribe(data => {
          this.visitors = data;
          console.log(this.visitors)

        })
      }
    });
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    // this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    this.signature = ""

  }

  addProduct(info: NgForm) {
    console.log(info.value)
    let details;
    details = info.value;
    details.img = this.signature;
    details.wavelia = ""
    console.log(details)
    this.db.addVisitor(details)
      .then(_ => {
        this.signature = ""
        this.signaturePad.clear()
        this.infoFrm.reset()
      });
  }

  ionViewDidEnter() {
    this.signaturePad.clear()
    this.signature = ""
    this.storage.get('savedSignature').then((data) => {
      this.signature = data;
    });
    this.infoFrm.reset()
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.isDrawing = false;
    this.signature = this.signaturePad.toDataURL();
    this.storage.set('savedSignature', this.signature);
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    this.isDrawing = true;
    console.log('begin drawing');
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
