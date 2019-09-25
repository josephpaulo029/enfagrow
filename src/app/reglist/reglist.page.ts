import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatabaseService, Dev } from './../services/database.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reglist',
  templateUrl: './reglist.page.html',
  styleUrls: ['./reglist.page.scss'],
})
export class ReglistPage implements OnInit {

    // developers: Dev[] = [];
 
    products: Observable<any[]>;
 
    // developer = {};
    product = {};
  
    

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

}
