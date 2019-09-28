import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
export interface Dev {
  // id: number,
  // name: string,
  // skills: any[],
  // img: string
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  visitors = new BehaviorSubject([]);
  visitorslist = new BehaviorSubject([]);

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'events.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
        });
    });
  }

  seedDatabase() {
    this.http.get('assets/seed.sql', { responseType: 'text' })
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(_ => {
            this.loadVisitors();
            this.dbReady.next(true);
          })
          .catch(e => console.error(e));
      });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getList(): Observable<any[]> {
    return this.visitors.asObservable();
  }

  loadVisitors() {
    // let query = 'SELECT product.name, product.id, developer.name AS creator FROM product JOIN developer ON developer.id = product.creatorId';
    let query = 'SELECT * FROM visitor';
    return this.database.executeSql(query, []).then(data => {
      let products = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          products.push({
            id: data.rows.item(i).id,
            names: data.rows.item(i).names,
            prcid: data.rows.item(i).prcid,
            // mobilenumber: data.rows.item(i).mobilenumber,
            // emailadd: data.rows.item(i).emailadd,
            wavelia: data.rows.item(i).wavelia,
            useragree: data.rows.item(i).useragree,
            img: data.rows.item(i).img,
            // creator: data.rows.item(i).creator,
          });
        }
      }
      this.visitors.next(products);
    });
  }

  addVisitor(details) {
    let data = [details.names, details.prcid, details.wavelia, details.useragree, details.img];
    return this.database.executeSql('INSERT INTO visitor (names, prcid, mobilenumber, emailadd, wavelia, useragree, img) VALUES (?,?,?,?,?,?,?)', data).then(data => {
      this.loadVisitors();
    });
  }

  updateVisitor(details) {
    let data = [details.names, details.prcid, details.wavelia, details.useragree, details.img];
    return this.database.executeSql(`UPDATE visitor SET names = ?, prcid = ?, mobilenumber = ?, emailadd = ?, wavelia = ?, useragree = ?, img = ? WHERE id = ${details.id}`, data).then(data => {
      this.loadVisitors();
    })
  }

  deleteVisitor(id){
    return this.database.executeSql('DELETE FROM visitor WHERE id = ?', [id]).then(_ => {
      this.loadVisitors();
    });
  }

}
