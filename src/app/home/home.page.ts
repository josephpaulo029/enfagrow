import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  initName: any = "";

  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
    this.initName = ""
  }

  ionViewDidEnter() {
    this.initName = ""
  }

  onNext() {
    this.router.navigate(['/secondregister', { names: this.initName }]);
  }
}
