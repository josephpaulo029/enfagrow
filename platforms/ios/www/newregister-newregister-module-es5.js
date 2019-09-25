(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newregister-newregister-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/newregister/newregister.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newregister/newregister.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"background ion-padding\">\n\n<ion-card-header>\n\n </ion-card-header>\n\n<!-- <ion-item>\n  <ion-textarea placeholder=\"Enter more information here...\"></ion-textarea>\n</ion-item>\n -->\n\n<div class=\"nameofreg\">\n    <ion-list class=\"container\">\n\t\t<ion-item  align-items-center class=\"containertext align-items-center \">\n  \t\t\t <ion-input class=\"container\"></ion-input>\n\t\t</ion-item>  \n\t\t<div class=\"ion-text-center\" >\n\t\t\t<div class=\"myfirsttext\">\n\t\t\t\t<ion-label >NAME</ion-label>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<ion-label color=\"primary\">(LAST NAME, FIRST NAME, MIDDLE NAME)</ion-label>\n\t\t\t</div>\n\t\t</div>\n\t\t<ion-item class=\"containertext align-items-center\">\n  \t\t\t <ion-input ></ion-input>\n\t\t</ion-item>  \n\n\t\t<div class=\"ion-text-center\" >\n\t\t\t<div class=\"myfirsttext\">\n\t\t\t\t<ion-label >PRC ID</ion-label>\n\t\t\t</div>\n\t\t\t<div class=\"myfirsttext\">\n\t\t\t\t<ion-label >__________________________________________________</ion-label>\n\t\t\t</div>\n\t\t\t<div class=\"myfirsttext\">\n\t\t\t\t<ion-label ><br/></ion-label>\n\t\t\t</div>\n\t\t\t<div class=\"myfirsttext\">\n\t\t\t\t<ion-label >WAIVER RELEASE AND LIABILITY</ion-label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div  class=\"containertextarea align-items-center\">\n  \t\t\t <ion-textarea disabled=\"true\"><br/>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to </ion-textarea >\n\t\t</div>\n\t\t<div class=\"ion-text-center\">\n  \t\t\t <ion-button  shape=\"round\"  fill=\"outline\" size=\"small\" color=\"Tertiary\" float-center >I Agree</ion-button>\n\n\t\t</div>\n\t\t<div class=\"ion-text-center ion-padding >\n  \t\t\t <canvas #signatureCanvas (touchstart)=\"startDrawing($event)\" (touchmove)=\"moved($event)\"></canvas>\n  \t\t\t <ion-label color=\"primary\" shape=\"round\">Signature</ion-label>\n\t\t</div>\n\t\t<div class=\"ion-text-center\">\n\t\t\t<ion-button color=\"Tertiary\" (click)=\"clearPad()\">Clear</ion-button>\n\t\t</div>\n    </ion-list>\n\n\n</div>\n\n\n  <div  class=\"buttonposition ion-text-center\">\n\t\t<ion-button shape=\"round\"  fill=\"outline\" color=\"Tertiary\"   href=\"successreg\" >SUBMIT</ion-button>\n  </div>\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/newregister/newregister.module.ts":
/*!***************************************************!*\
  !*** ./src/app/newregister/newregister.module.ts ***!
  \***************************************************/
/*! exports provided: NewregisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewregisterPageModule", function() { return NewregisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newregister_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newregister.page */ "./src/app/newregister/newregister.page.ts");







var routes = [
    {
        path: '',
        component: _newregister_page__WEBPACK_IMPORTED_MODULE_6__["NewregisterPage"]
    }
];
var NewregisterPageModule = /** @class */ (function () {
    function NewregisterPageModule() {
    }
    NewregisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_newregister_page__WEBPACK_IMPORTED_MODULE_6__["NewregisterPage"]]
        })
    ], NewregisterPageModule);
    return NewregisterPageModule;
}());



/***/ }),

/***/ "./src/app/newregister/newregister.page.scss":
/*!***************************************************!*\
  !*** ./src/app/newregister/newregister.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('reg_background.png') no-repeat fixed center;\n  background-size: contain; }\n\n.scroll-content {\n  overflow-y: hidden; }\n\ncanvas {\n  display: block;\n  border: 3px solid #2d355e;\n  border-radius: 20px !important;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  background-color: transparent; }\n\n.color-block {\n  height: 40px; }\n\n.containerforpad {\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\nion-button {\n  color: #2d355e; }\n\n.button-bottom {\n  width: 50%; }\n\n.buttonposition {\n  position: fixed;\n  left: 140px;\n  bottom: 10px;\n  right: 100px; }\n\n.nameofreg {\n  position: fixed;\n  left: 100px;\n  bottom: 100px;\n  right: 100px; }\n\n.rounded {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  margin-bottom: 10px; }\n\n.container {\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: rgba(0, 0, 0, 0); }\n\n.containertext {\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 1px #855294;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.containertextarea {\n  width: 400px;\n  height: 130px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 1px #855294;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.masters {\n  background-color: rgba(0, 0, 0, 0); }\n\n.myfirsttext {\n  color: #855294;\n  font-weight: bold;\n  font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXljZWVmZXJuYW5kZXovRG9jdW1lbnRzL2lvbmljZm9sZGVyL2VuZmFncm93QXBwL3NyYy9hcHAvbmV3cmVnaXN0ZXIvbmV3cmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsOERBQWE7RUFDWix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDUSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsNkJBQTZCLEVBQUE7O0FBRXJDO0VBQ1EsWUFBWSxFQUFBOztBQUdwQjtFQUNRLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7O0FBR3JDO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNBLFVBQVUsRUFBQTs7QUFHVjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2hCO0VBQ1EsV0FBVztFQUNYLGFBQWE7RUFHYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ1EsWUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0NBQWdDLEVBQUE7O0FBRXhDO0VBQ1EsWUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUNwQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QixFQUFBOztBQUUvQjtFQUNRLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsOEJBQThCO0VBQ3BDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7O0FBSy9CO0VBQ0ssa0NBQWdDLEVBQUE7O0FBRXJDO0VBQ1EsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uZXdyZWdpc3Rlci9uZXdyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xuXHQtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3JlZ19iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuY2FudmFzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZDM1NWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5jb2xvci1ibG9jayB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbn1cblxuLmNvbnRhaW5lcmZvcnBhZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgICBjb2xvcjogIzJkMzU1ZTtcbn1cblxuLmJ1dHRvbi1ib3R0b217XG53aWR0aDogNTAlO1xufVxuXG4uYnV0dG9ucG9zaXRpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAxNDBweDtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcmlnaHQ6IDEwMHB4O1xufVxuXG4ubmFtZW9mcmVnIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgYm90dG9tOiAxMDBweDtcbiAgICByaWdodDogMTAwcHg7XG59XG5cbi5yb3VuZGVkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgXG4gICAgICAgIFxufVxuXG4uY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDYwMHB4OyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsMCwwLDApO1xufVxuLmNvbnRhaW5lcnRleHQge1xuICAgICAgICB3aWR0aDogNDAwcHg7IFxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzg1NTI5NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuXHRcdHBhZGRpbmctbGVmdDogMTBweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XG5cdFx0cGFkZGluZy10b3A6IDVweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY29udGFpbmVydGV4dGFyZWEge1xuICAgICAgICB3aWR0aDogNDAwcHg7IFxuICAgICAgICBoZWlnaHQ6IDEzMHB4OyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICM4NTUyOTQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcblx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0cGFkZGluZy1yaWdodDogMTBweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRcdHBhZGRpbmctdG9wOiA1cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5cblxuLm1hc3RlcnN7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsMCwwLDApO1xufVxuLm15Zmlyc3R0ZXh0e1xuICAgICAgICBjb2xvcjogIzg1NTI5NDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/newregister/newregister.page.ts":
/*!*************************************************!*\
  !*** ./src/app/newregister/newregister.page.ts ***!
  \*************************************************/
/*! exports provided: NewregisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewregisterPage", function() { return NewregisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewregisterPage = /** @class */ (function () {
    function NewregisterPage() {
    }
    NewregisterPage.prototype.ngOnInit = function () {
    };
    NewregisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newregister',
            template: __webpack_require__(/*! raw-loader!./newregister.page.html */ "./node_modules/raw-loader/index.js!./src/app/newregister/newregister.page.html"),
            styles: [__webpack_require__(/*! ./newregister.page.scss */ "./src/app/newregister/newregister.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewregisterPage);
    return NewregisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=newregister-newregister-module-es5.js.map