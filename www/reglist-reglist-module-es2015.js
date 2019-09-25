(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reglist-reglist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reglist/reglist.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reglist/reglist.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background ion-padding\"  >\n    <ion-grid >\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-img class=\"displayed\" src=\"../assets/images/enfagrow_logo.png\"></ion-img>\n          </ion-col>\n        </ion-row>\n        <!-- <ion-row  class=\"containertext ion-align-items-center\">\n            <ion-col >\n                <ion-input placeholder=\"SEARCH\" ></ion-input>\n            </ion-col>\n         </ion-row> -->\n         <ion-row class=\"containertext ion-align-items-center\">\n            <ion-col  >\n                <ion-list >\n                    <ion-item *ngFor=\"let prod of products | async\">\n                      <ion-label><h2>{{ prod.names }}</h2></ion-label>\n                    </ion-item>\n                  </ion-list>\n            </ion-col>\n         </ion-row>\n         <ion-row>\n            <ion-col  >\n                <ion-button  shape=\"round\"  fill=\"outline\" color=\"Tertiary\" class=\"ion-float-right\" position=\"bottom\" href=\"home\">BACK</ion-button>\n            </ion-col>\n         </ion-row>\n    </ion-grid>\n</ion-content>\n\n\n"

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

module.exports = "ion-content.background {\n  --background: url('enfagrow_background.png') no-repeat fixed center;\n  background-size: contain; }\n\n.displayed {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n  height: 70%; }\n\n.scroll-content {\n  overflow-y: hidden; }\n\nion-button {\n  color: #2d355e;\n  border: solid 2px;\n  border-radius: 20px !important; }\n\n.containertext {\n  width: auto;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 3px #2d355e;\n  border-radius: 20px !important;\n  text-align: center;\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXljZWVmZXJuYW5kZXovRG9jdW1lbnRzL2lvbmljZm9sZGVyL2VuZmFncm93QXBwL3NyYy9hcHAvcmVnbGlzdC9yZWdsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1FQUFhO0VBQ1osd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHYjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsOEJBQThCLEVBQUE7O0FBK0JoQztFQUNRLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsOEJBQThCO0VBS2xDLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2xpc3QvcmVnbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50LmJhY2tncm91bmR7XG5cdC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvZW5mYWdyb3dfYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmRpc3BsYXllZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDcwJTtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbmlvbi1idXR0b257XG4gIGNvbG9yOiAjMmQzNTVlO1xuICBib3JkZXI6IHNvbGlkIDJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xufVxuXG5cbi8vIGlvbi1idXR0b257XG4vLyAgICAgY29sb3I6ICMyZDM1NWU7XG4vLyB9XG5cbi8vIC5jZW50ZXIge1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgIG1hcmdpbi1yaWdodDogYXV0bztcbi8vICAgd2lkdGg6IDQwMHB4O1xuLy8gICBoZWlnaHQ6IDQwMHB4O1xuLy8gfVxuXG4vLyAuYnV0dG9ucG9zaXRpb24ge1xuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICBsZWZ0OiA1MHB4O1xuLy8gICAgIGJvdHRvbTogNTBweDtcbi8vICAgICByaWdodDogNTBweDtcbi8vIH1cblxuLy8gLmNvbnRhaW5lciB7XG4vLyAgICAgICAgIHdpZHRoOiA2MDBweDsgXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuLy8gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cblxuLmNvbnRhaW5lcnRleHQge1xuICAgICAgICB3aWR0aDogYXV0bzsgXG4gICAgICAgIGhlaWdodDogYXV0bzsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjMmQzNTVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAvLyBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG5cblxuIl19 */"

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




let ReglistPage = class ReglistPage {
    constructor(storage, db) {
        this.storage = storage;
        this.db = db;
        // developer = {};
        this.product = {};
    }
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
};
ReglistPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }
];
ReglistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reglist',
        template: __webpack_require__(/*! raw-loader!./reglist.page.html */ "./node_modules/raw-loader/index.js!./src/app/reglist/reglist.page.html"),
        styles: [__webpack_require__(/*! ./reglist.page.scss */ "./src/app/reglist/reglist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
], ReglistPage);



/***/ })

}]);
//# sourceMappingURL=reglist-reglist-module-es2015.js.map