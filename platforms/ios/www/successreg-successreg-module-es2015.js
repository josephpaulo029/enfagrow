(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["successreg-successreg-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/successreg/successreg.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/successreg/successreg.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"background ion-padding\">\n\n\n    <ion-grid >\n      \t<ion-row>\n            <ion-col>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-img class=\"displayed\" src=\"../assets/images/enfagrow_logo.png\"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"myfirsttext ion-text-center\">\n            <ion-col  >\n                <ion-label >YOU HAVE SUCCESSFULLY REGISTERED</ion-label>\n              </ion-col>\n         </ion-row>\n         <ion-row>\n            <ion-col >\n\t\t\t  \n            </ion-col>\n\t\t </ion-row>\n\t\t <ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t\n\t\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t\n\t\t\t\t</ion-col>\n\t    </ion-row>\n         <ion-row>\n            <ion-col class=\"ion-text-center\">\n                <ion-button shape=\"round\"  fill=\"outline\" color=\"Tertiary\"   href=\"home\" >PROCEED</ion-button>\n            </ion-col>\n         </ion-row>\n</ion-grid>\n\n\n\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/successreg/successreg.module.ts":
/*!*************************************************!*\
  !*** ./src/app/successreg/successreg.module.ts ***!
  \*************************************************/
/*! exports provided: SuccessregPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessregPageModule", function() { return SuccessregPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _successreg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./successreg.page */ "./src/app/successreg/successreg.page.ts");







const routes = [
    {
        path: '',
        component: _successreg_page__WEBPACK_IMPORTED_MODULE_6__["SuccessregPage"]
    }
];
let SuccessregPageModule = class SuccessregPageModule {
};
SuccessregPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_successreg_page__WEBPACK_IMPORTED_MODULE_6__["SuccessregPage"]]
    })
], SuccessregPageModule);



/***/ }),

/***/ "./src/app/successreg/successreg.page.scss":
/*!*************************************************!*\
  !*** ./src/app/successreg/successreg.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('enfagrow_background.png') no-repeat fixed center; }\n\n.scroll-content {\n  overflow-y: hidden; }\n\n.buttonposition {\n  position: fixed;\n  left: 20px;\n  bottom: 30px;\n  right: 20px; }\n\nion-button {\n  color: #2d355e;\n  border: solid 2px;\n  border-radius: 20px !important; }\n\n.myfirsttext {\n  color: #2d355e;\n  font-weight: bold;\n  font-size: 25px; }\n\n.displayed {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n  height: 70%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJnYTAyL0RvY3VtZW50cy9pb25pY1Byb2ovX2VuZmEvc3JjL2FwcC9zdWNjZXNzcmVnL3N1Y2Nlc3NyZWcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsbUVBQWEsRUFBQTs7QUFJZDtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3NyZWcvc3VjY2Vzc3JlZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xuXHQtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2VuZmFncm93X2JhY2tncm91bmQucG5nKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xufVxuXG5cbi5zY3JvbGwtY29udGVudCB7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uYnV0dG9ucG9zaXRpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICByaWdodDogMjBweDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgICBjb2xvcjogIzJkMzU1ZTtcbiAgICBib3JkZXI6IHNvbGlkIDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5teWZpcnN0dGV4dHtcbiAgICBjb2xvcjogIzJkMzU1ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5kaXNwbGF5ZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNzAlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/successreg/successreg.page.ts":
/*!***********************************************!*\
  !*** ./src/app/successreg/successreg.page.ts ***!
  \***********************************************/
/*! exports provided: SuccessregPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessregPage", function() { return SuccessregPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SuccessregPage = class SuccessregPage {
    constructor() { }
    ngOnInit() {
    }
};
SuccessregPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-successreg',
        template: __webpack_require__(/*! raw-loader!./successreg.page.html */ "./node_modules/raw-loader/index.js!./src/app/successreg/successreg.page.html"),
        styles: [__webpack_require__(/*! ./successreg.page.scss */ "./src/app/successreg/successreg.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SuccessregPage);



/***/ })

}]);
//# sourceMappingURL=successreg-successreg-module-es2015.js.map