(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reglist-reglist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reglist/reglist.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reglist/reglist.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-img class=\"displayed\" src=\"../assets/images/enfagrow_logo.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row  class=\"containertext ion-align-items-center\">\n            <ion-col >\n                <ion-input placeholder=\"SEARCH\" ></ion-input>\n            </ion-col>\n         </ion-row> -->\n    <ion-button (click)=\"exportSqlite()\">\n      EXPORT\n    </ion-button>\n    <ion-row class=\"containertext ion-align-items-center\">\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor=\"let visit; of visitors\">\n            <ion-label>\n              <h2>{{ visit.names }}</h2>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button shape=\"round\" fill=\"outline\" color=\"Tertiary\" class=\"ion-float-right\" position=\"bottom\" href=\"home\">\n          BACK</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/reglist/reglist.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reglist/reglist.module.ts ***!
  \*******************************************/
/*! exports provided: ReglistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglistPageModule", function() { return ReglistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reglist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reglist.page */ "./src/app/reglist/reglist.page.ts");







const routes = [
    {
        path: '',
        component: _reglist_page__WEBPACK_IMPORTED_MODULE_6__["ReglistPage"]
    }
];
let ReglistPageModule = class ReglistPageModule {
};
ReglistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_reglist_page__WEBPACK_IMPORTED_MODULE_6__["ReglistPage"]]
    })
], ReglistPageModule);



/***/ }),

/***/ "./src/app/reglist/reglist.page.scss":
/*!*******************************************!*\
  !*** ./src/app/reglist/reglist.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('enfagrow_background.png') no-repeat fixed center;\n  background-size: contain; }\n\n.displayed {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n  height: 70%; }\n\n.scroll-content {\n  overflow-y: hidden; }\n\nion-button {\n  color: #2d355e;\n  border: solid 2px;\n  border-radius: 20px !important; }\n\n.containertext {\n  width: auto;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 3px #2d355e;\n  border-radius: 20px !important;\n  text-align: center;\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJnYTAyL0RvY3VtZW50cy9pb25pY1Byb2ovX2VuZmEvc3JjL2FwcC9yZWdsaXN0L3JlZ2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUVBQWE7RUFDWix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw4QkFBOEIsRUFBQTs7QUErQmhDO0VBQ1EsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFLbEMsa0JBQWtCO0VBQ2xCLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnbGlzdC9yZWdsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcblx0LS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9lbmZhZ3Jvd19iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uZGlzcGxheWVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNzAlO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuaW9uLWJ1dHRvbntcbiAgY29sb3I6ICMyZDM1NWU7XG4gIGJvcmRlcjogc29saWQgMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gaW9uLWJ1dHRvbntcbi8vICAgICBjb2xvcjogIzJkMzU1ZTtcbi8vIH1cblxuLy8gLmNlbnRlciB7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBtYXJnaW4tbGVmdDogYXV0bztcbi8vICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuLy8gICB3aWR0aDogNDAwcHg7XG4vLyAgIGhlaWdodDogNDAwcHg7XG4vLyB9XG5cbi8vIC5idXR0b25wb3NpdGlvbiB7XG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICAgIGxlZnQ6IDUwcHg7XG4vLyAgICAgYm90dG9tOiA1MHB4O1xuLy8gICAgIHJpZ2h0OiA1MHB4O1xuLy8gfVxuXG4vLyAuY29udGFpbmVyIHtcbi8vICAgICAgICAgd2lkdGg6IDYwMHB4OyBcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4vLyAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuXG4uY29udGFpbmVydGV4dCB7XG4gICAgICAgIHdpZHRoOiBhdXRvOyBcbiAgICAgICAgaGVpZ2h0OiBhdXRvOyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4ICMyZDM1NWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgLy8gcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIC8vIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/reglist/reglist.page.ts":
/*!*****************************************!*\
  !*** ./src/app/reglist/reglist.page.ts ***!
  \*****************************************/
/*! exports provided: ReglistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglistPage", function() { return ReglistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");







let ReglistPage = class ReglistPage {
    constructor(storage, db, plt, socialSharing, file) {
        this.storage = storage;
        this.db = db;
        this.plt = plt;
        this.socialSharing = socialSharing;
        this.file = file;
        // visitors: Observable<any[]>;
        this.visitors = [];
        this.forCSV = [];
        this.jsonData = [
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
    }
    ngOnInit() {
        this.db.getDatabaseState().subscribe(rdy => {
            if (rdy) {
                this.db.getList().subscribe(data => {
                    console.log(data);
                    data.forEach(element => {
                        if (element.useragree == 0) {
                            this.visitors.push(element);
                            let csvData;
                            csvData = {
                                prcid: element.prcid,
                                name: element.names
                            };
                            this.forCSV.push(csvData);
                        }
                    });
                    // this.visitors = data;
                    console.log(this.visitors);
                    console.log(this.forCSV);
                });
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
        console.log(blob);
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        console.log(url);
        let isSafariBrowser = navigator.userAgent.indexOf("Safari") != -1 &&
            navigator.userAgent.indexOf("Chrome") == -1;
        if (isSafariBrowser) {
            //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".csv");
        console.log(dwldLink);
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
        console.log(csvData);
        if (this.plt.is('cordova')) {
            this.file.writeFile(this.file.dataDirectory, 'enfagrowAttendees.csv', csvData, { replace: true }).then(res => {
                this.socialSharing.share(null, null, res.nativeURL, null).then(e => {
                    // Success
                }).catch(e => {
                    console.log('Share failed:', e);
                });
            }, err => {
                alert('Error: ' + err);
                console.log('Error: ', err);
            });
        }
        else {
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
};
ReglistPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] }
];
ReglistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reglist',
        template: __webpack_require__(/*! raw-loader!./reglist.page.html */ "./node_modules/raw-loader/index.js!./src/app/reglist/reglist.page.html"),
        styles: [__webpack_require__(/*! ./reglist.page.scss */ "./src/app/reglist/reglist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]])
], ReglistPage);



/***/ })

}]);
//# sourceMappingURL=reglist-reglist-module-es2015.js.map