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

  // visitors: Observable<any[]>;
  visitors = [];

  constructor(public storage: Storage, private db: DatabaseService) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getList().subscribe(data => {
          console.log(data)
          data.forEach(element => {
            if (element.useragree == 1) {
              this.visitors.push(element)
            }
          });
          // this.visitors = data;
          console.log(this.visitors)

        })
      }
    });
  }

}
