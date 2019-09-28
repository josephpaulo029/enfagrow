import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatabaseService, Dev } from './../services/database.service';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-reglist',
  templateUrl: './reglist.page.html',
  styleUrls: ['./reglist.page.scss'],
})
export class ReglistPage implements OnInit {

  // visitors: Observable<any[]>;
  visitors = [];
  forCSV = [];

  jsonData = [
    {
      prcid: '001',
      name: "Anil Singh",
    },
    {
      prcid: '002',
      name: 'Reena Singh',
    },
    {
      prcid: '003',
      name: 'Aradhya',
    },
  ];

  constructor(
    public storage: Storage,
    private db: DatabaseService,
    private plt: Platform,
    private socialSharing: SocialSharing,
    private file: File,

  ) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getList().subscribe(data => {
          console.log(data)
          data.forEach(element => {
            if (element.useragree == 1) {
              this.visitors.push(element)
              let csvData;
              csvData = {
                prcid: element.prcid,
                name: element.names
              }
              this.forCSV.push(csvData)
            }
          });
          // this.visitors = data;
          console.log(this.visitors)
          console.log(this.forCSV)


        })
      }
    });
  }

  downloadFile(data, filename = "data") {
    let csvData = this.ConvertToCSV(data, [
      "prcid",
      "name",
    ]);
    console.log(csvData);

    let blob = new Blob(["\ufeff" + csvData], {
      type: "text/csv;charset=utf-8;"
    });
    console.log(blob)


    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    console.log(url)



    let isSafariBrowser =
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1;
    if (isSafariBrowser) {
      //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    console.log(dwldLink)

    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    // dwldLink.click();
    // document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let str = "";
    let row = "No,";

    for (let index in headerList) {
      row += headerList[index] + ",";
    }
    row = row.slice(0, -1);
    str += row + "\r\n";
    for (let i = 0; i < array.length; i++) {
      let line = i + 1 + "";
      for (let index in headerList) {
        let head = headerList[index];

        line += "," + array[i][head];
      }
      str += line + "\r\n";
    }
    return str;
  }

  exportSqlite() {
    // this.downloadFile(this.jsonData, 'enfagrowAttendees');
    let csvData = this.ConvertToCSV(this.forCSV, [
      "prcid",
      "name",
    ]);

    console.log(csvData)

    if (this.plt.is('cordova')) {
      this.file.writeFile(this.file.dataDirectory, 'enfagrowAttendees.csv', csvData, { replace: true }).then(res => {
        this.socialSharing.share(null, null, res.nativeURL, null).then(e => {
          // Success
        }).catch(e => {
          console.log('Share failed:', e)
        });
      }, err => {
        alert('Error: ' + err)
        console.log('Error: ', err);
      });

    } else {
      // Dummy implementation for Desktop download purpose
      // var blob = new Blob([csv]);
      // var a = window.document.createElement('a');
      // a.href = window.URL.createObjectURL(blob);
      // a.download = 'newdata.csv';
      // document.body.appendChild(a);
      // a.click();
      // document.body.removeChild(a);
    }
  }

}
