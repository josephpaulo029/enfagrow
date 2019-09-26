(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background ion-padding\" >\n<ion-grid >\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-img class=\"displayed\" src=\"../assets/images/enfagrow_logo.png\"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"containertext ion-align-items-center\">\n            <ion-col  >\n\t\t\t\t<ion-input name=\"names\" placeholder=\"Name\" [(ngModel)]=\"initName\"></ion-input>\n            </ion-col>\n         </ion-row>\n         <ion-row>\n            <ion-col  class=\"ion-text-center\">\n\t\t\t    <ion-button shape=\"round\" expand=\"default\" fill=\"outline\" color=\"#2d355e\" (click)=\"onNext()\">Register</ion-button>\n            </ion-col>\n\t\t </ion-row>\n\t\t <ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t\n\t\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\n\t\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t\n\t\t\t\t</ion-col>\n\t    </ion-row>\n         <ion-row>\n            <ion-col>\n\t\t\t\t\t<ion-button  shape=\"round\"  fill=\"outline\" color=\"Tertiary\" class=\"ion-float-left\" position=\"bottom\" href=\"reglist\" >ADMIN</ion-button>\n\t\t\t\t\t<ion-button [disabled]=\"initName == ''\"  shape=\"round\"  fill=\"outline\" color=\"Tertiary\" class=\"ion-float-right\" position=\"bottom\" (click)=\"onNext()\">NEXT</ion-button>\n            </ion-col>\n         </ion-row>\n</ion-grid>\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            ],
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('enfagrow_background.png') no-repeat fixed center;\n  background-size: contain; }\n\n.scroll-content {\n  overflow-y: hidden; }\n\n.formshadow {\n  box-shadow: none !important; }\n\n.displayed {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n  height: 70%; }\n\nion-button {\n  color: #2d355e;\n  border: solid 2px;\n  border-radius: 20px !important; }\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 400px;\n  height: 400px; }\n\n.buttonposition {\n  position: fixed;\n  left: 50px;\n  bottom: 50px;\n  right: 50px; }\n\n.container {\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: transparent;\n  text-align: center; }\n\n.containertext {\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 2px #2d355e;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJnYTAyL0RvY3VtZW50cy9pb25pY1Byb2ovX2VuZmEvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsbUVBQWE7RUFDWix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDRSwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ1EsWUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQixFQUFBOztBQUd6QjtFQUNRLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDbEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50LmJhY2tncm91bmR7XG5cdC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvZW5mYWdyb3dfYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5mb3Jtc2hhZG93e1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNwbGF5ZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbmlvbi1idXR0b257XG4gIGNvbG9yOiAjMmQzNTVlO1xuICBib3JkZXI6IHNvbGlkIDJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmJ1dHRvbnBvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogNTBweDtcbiAgICBib3R0b206IDUwcHg7XG4gICAgcmlnaHQ6IDUwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNjAwcHg7IFxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXJ0ZXh0IHtcbiAgICAgICAgd2lkdGg6IDQwMHB4OyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4ICMyZDM1NWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
        this.initName = "";
    }
    HomePage.prototype.ngOnInit = function () {
        this.initName = "";
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.initName = "";
    };
    HomePage.prototype.onNext = function () {
        this.router.navigate(['/secondregister', { names: this.initName }]);
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map