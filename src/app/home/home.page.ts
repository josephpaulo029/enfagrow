import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  initprcid: any = "";

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
    this.initprcid = ""
  }

  ionViewDidEnter() {
    this.initprcid = ""
  }

  onNext() {
    this.router.navigate(['/secondregister', { prcid: this.initprcid }]);
  }
}
