(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background ion-padding\" >\n<ion-grid >\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-img class=\"displayed\" src=\"../assets/images/enfagrow_logo.png\"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"containertext ion-align-items-center\">\n            <ion-col  >\n\t\t\t\t<ion-input placeholder=\"Name\" ></ion-input>\n            </ion-col>\n         </ion-row>\n         <ion-row>\n            <ion-col  class=\"ion-text-center\">\n\t\t\t    <ion-button shape=\"round\" expand=\"default\" fill=\"outline\" color=\"#2d355e\" href=\"secondregister\">Register</ion-button>\n            </ion-col>\n\t\t </ion-row>\n\t\t <ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t\n\t\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\n\t\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t\n\t\t\t\t</ion-col>\n\t    </ion-row>\n         <ion-row>\n            <ion-col>\n\t\t\t\t\t<ion-button  shape=\"round\"  fill=\"outline\" color=\"Tertiary\" class=\"ion-float-left\" position=\"bottom\" href=\"reglist\" >ADMIN</ion-button>\n\t\t\t\t\t<ion-button  shape=\"round\"  fill=\"outline\" color=\"Tertiary\" class=\"ion-float-right\" position=\"bottom\" href=\"secondregister\">NEXT</ion-button>\n            </ion-col>\n         </ion-row>\n</ion-grid>\n</ion-content>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('enfagrow_background.png') no-repeat fixed center;\n  background-size: contain; }\n\n.scroll-content {\n  overflow-y: hidden; }\n\n.formshadow {\n  box-shadow: none !important; }\n\n.displayed {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n  height: 70%; }\n\nion-button {\n  color: #2d355e;\n  border: solid 2px;\n  border-radius: 20px !important; }\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 400px;\n  height: 400px; }\n\n.buttonposition {\n  position: fixed;\n  left: 50px;\n  bottom: 50px;\n  right: 50px; }\n\n.container {\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: transparent;\n  text-align: center; }\n\n.containertext {\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 2px #2d355e;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXljZWVmZXJuYW5kZXovRG9jdW1lbnRzL2lvbmljZm9sZGVyL2VuZmFncm93QXBwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1FQUFhO0VBQ1osd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNRLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ25CLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTs7QUFHekI7RUFDUSxZQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsOEJBQThCO0VBQ2xDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xuXHQtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2VuZmFncm93X2JhY2tncm91bmQucG5nKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uZm9ybXNoYWRvd3tcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGlzcGxheWVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNzAlO1xufVxuXG5pb24tYnV0dG9ue1xuICBjb2xvcjogIzJkMzU1ZTtcbiAgYm9yZGVyOiBzb2xpZCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5idXR0b25wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDUwcHg7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIHJpZ2h0OiA1MHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDYwMHB4OyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVydGV4dCB7XG4gICAgICAgIHdpZHRoOiA0MDBweDsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjMmQzNTVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG5cblxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map