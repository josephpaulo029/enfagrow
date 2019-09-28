import { Component, ViewChild, OnInit } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';
import { DatabaseService, Dev } from './../services/database.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  signed: Boolean = false;
  isExisting: Boolean = false;
  existingVisitor: any
  names: any
  prcid: any
  // emailadd: any
  // mobilenumber: any

  @ViewChild('info', { static: false }) infoFrm

  @ViewChild(SignaturePad, { static: true }) signaturePad: SignaturePad;
  signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 200,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };

  constructor(
    public storage: Storage,
    private db: DatabaseService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getList().subscribe(data => {
          this.visitors = data;
          console.log(this.visitors)
          this.route.params.subscribe(params => {
            console.log(params)
            let param = params['prcid'];
            if (param == "") {
              this.infoFrm.reset()
            } else {
              this.prcid = param
              this.visitors.forEach(visit => {
                if (visit['prcid'] == this.prcid) {
                  this.isExisting = true
                  this.existingVisitor = visit
                  this.names = this.existingVisitor.names
                  this.prcid = this.existingVisitor.prcid
                  // this.mobilenumber = this.existingVisitor.mobilenumber
                  // this.emailadd = this.existingVisitor.emailadd
                }
              });
            }
            // In a real app: dispatch action to load the details here.
          });
        })
      }
    });
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    // this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    this.signature = ""
    this.signed = false;

  }

  clearFrm() {
    this.names = ""
    this.prcid = ""
    // this.mobilenumber = ""
    // this.emailadd = ""
  }

  addProduct(info: NgForm) {
    let details;
    details = info.value;
    details.useragree = details.useragree ? '1' : '0'
    details.img = this.signature;
    details.wavelia = "";
    console.log(this.isExisting)

    if (this.isExisting == false) {
      console.log('not', details)

      this.db.addVisitor(details)
        .then(_ => {
          this.signature = ""
          this.signaturePad.clear()
          this.infoFrm.reset()
          this.clearFrm()
          this.router.navigate(['/successreg']);

        });
    } else {
      details.id = this.existingVisitor.id
      console.log('yeah', details)

      this.db.updateVisitor(details)
        .then(_ => {
          this.signature = ""
          this.signaturePad.clear()
          this.infoFrm.reset()
          this.clearFrm()
          this.router.navigate(['/successreg']);

        });
    }
    console.log(details)

  }

  ionViewDidEnter() {
    this.signaturePad.clear()
    this.signed = false;
    this.signature = ""
    this.storage.get('savedSignature').then((data) => {
      this.signature = data;
    });
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.isDrawing = false;
    this.signed = true;
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
    this.signed = false;

  }
}
