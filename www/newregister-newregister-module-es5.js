(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newregister-newregister-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/newregister/newregister.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newregister/newregister.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"background ion-padding\">\n\n<ion-card-header>\n\n </ion-card-header>\n\n<!-- <ion-item>\n  <ion-textarea placeholder=\"Enter more information here...\"></ion-textarea>\n</ion-item>\n -->\n\n<div class=\"nameofreg\">\n    <ion-list class=\"container\">\n\t\t<ion-item  align-items-center class=\"containertext align-items-center \">\n  \t\t\t <ion-input class=\"container\"></ion-input>\n\t\t</ion-item>  \n\t\t<div class=\"ion-text-center\" >\n\t\t\t<div class=\"myfirsttext\">\n\t\t\t\t<ion-label >NAME</ion-label>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<ion-label color=\"primary\">(LAST NAME, FIRST NAME, MIDDLE NAME)</ion-label>\n\t\t\t</div>\n\t\t</div>\n\t\t<ion-item class=\"containertext align-items-center\">\n  \t\t\t <ion-input ></ion-input>\n\t\t</ion-item>  \n\n\t\t<div class=\"ion-text-center\" >\n\t\t\t<div class=\"myfirsttext\">\n\t\t\t\t<ion-label >PRC ID</ion-label>\n\t\t\t</div>\n\t\t\t<div class=\"myfirsttext\">\n\t\t\t\t<ion-label >__________________________________________________</ion-label>\n\t\t\t</div>\n\t\t\t<div class=\"myfirsttext\">\n\t\t\t\t<ion-label ><br/></ion-label>\n\t\t\t</div>\n\t\t\t<div class=\"myfirsttext\">\n\t\t\t\t<ion-label >WAIVER RELEASE AND LIABILITY</ion-label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div  class=\"containertextarea align-items-center\">\n  \t\t\t <ion-textarea disabled=\"true\"><br/>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to </ion-textarea >\n\t\t</div>\n\t\t<div class=\"ion-text-center\">\n  \t\t\t <ion-button  shape=\"round\"  fill=\"outline\" size=\"small\" color=\"Tertiary\" float-center >I Agree</ion-button>\n\n\t\t</div>\n\t\t<div class=\"ion-text-center ion-padding\">\n  \t\t\t <canvas #signatureCanvas (touchstart)=\"startDrawing($event)\" (touchmove)=\"moved($event)\"></canvas>\n  \t\t\t <ion-label color=\"primary\" shape=\"round\">Signature</ion-label>\n\t\t</div>\n\t\t<div class=\"ion-text-center\">\n\t\t\t<ion-button color=\"Tertiary\" (click)=\"clearPad()\">Clear</ion-button>\n\t\t</div>\n    </ion-list>\n\n\n</div>\n\n\n  <div  class=\"buttonposition ion-text-center\">\n\t\t<ion-button shape=\"round\"  fill=\"outline\" color=\"Tertiary\"   href=\"successreg\" >SUBMIT</ion-button>\n  </div>\n\n</ion-content>\n\n\n"

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

module.exports = "ion-content.background {\n  --background: url('reg_background.png') no-repeat fixed center;\n  background-size: contain; }\n\n.scroll-content {\n  overflow-y: hidden; }\n\ncanvas {\n  display: block;\n  border: 3px solid #2d355e;\n  border-radius: 20px !important;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  background-color: transparent; }\n\n.color-block {\n  height: 40px; }\n\n.containerforpad {\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\nion-button {\n  color: #2d355e; }\n\n.button-bottom {\n  width: 50%; }\n\n.buttonposition {\n  position: fixed;\n  left: 140px;\n  bottom: 10px;\n  right: 100px; }\n\n.nameofreg {\n  position: fixed;\n  left: 100px;\n  bottom: 100px;\n  right: 100px; }\n\n.rounded {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  margin-bottom: 10px; }\n\n.container {\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: rgba(0, 0, 0, 0); }\n\n.containertext {\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 1px #855294;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.containertextarea {\n  width: 400px;\n  height: 130px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 1px #855294;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.masters {\n  background-color: rgba(0, 0, 0, 0); }\n\n.myfirsttext {\n  color: #855294;\n  font-weight: bold;\n  font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJnYTAyL0RvY3VtZW50cy9pb25pY1Byb2ovX2VuZmEvc3JjL2FwcC9uZXdyZWdpc3Rlci9uZXdyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw4REFBYTtFQUNaLHdCQUF3QixFQUFBOztBQUcxQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNRLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw2QkFBNkIsRUFBQTs7QUFFckM7RUFDUSxZQUFZLEVBQUE7O0FBR3BCO0VBQ1EsaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQTs7QUFHckM7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0EsVUFBVSxFQUFBOztBQUdWO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHaEI7RUFDUSxXQUFXO0VBQ1gsYUFBYTtFQUdiLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFJM0I7RUFDUSxZQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQ0FBZ0MsRUFBQTs7QUFFeEM7RUFDUSxZQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsOEJBQThCO0VBQ3BDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ1EsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDcEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQTs7QUFLL0I7RUFDSyxrQ0FBZ0MsRUFBQTs7QUFFckM7RUFDUSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25ld3JlZ2lzdGVyL25ld3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XG5cdC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVnX2JhY2tncm91bmQucG5nKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG5jYW52YXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzJkMzU1ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmNvbG9yLWJsb2NrIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uY29udGFpbmVyZm9ycGFkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tYnV0dG9ue1xuICAgIGNvbG9yOiAjMmQzNTVlO1xufVxuXG4uYnV0dG9uLWJvdHRvbXtcbndpZHRoOiA1MCU7XG59XG5cbi5idXR0b25wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDE0MHB4O1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogMTAwcHg7XG59XG5cbi5uYW1lb2ZyZWcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICBib3R0b206IDEwMHB4O1xuICAgIHJpZ2h0OiAxMDBweDtcbn1cblxuLnJvdW5kZWQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7ICBcbiAgICAgICAgXG59XG5cbi5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNjAwcHg7IFxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwwLDAsMCk7XG59XG4uY29udGFpbmVydGV4dCB7XG4gICAgICAgIHdpZHRoOiA0MDBweDsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjODU1Mjk0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDVweDtcblx0XHRwYWRkaW5nLXRvcDogNXB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5jb250YWluZXJ0ZXh0YXJlYSB7XG4gICAgICAgIHdpZHRoOiA0MDBweDsgXG4gICAgICAgIGhlaWdodDogMTMwcHg7IFxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzg1NTI5NDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuXHRcdHBhZGRpbmctbGVmdDogMTBweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XG5cdFx0cGFkZGluZy10b3A6IDVweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cblxuXG4ubWFzdGVyc3tcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwwLDAsMCk7XG59XG4ubXlmaXJzdHRleHR7XG4gICAgICAgIGNvbG9yOiAjODU1Mjk0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */"

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
    NewregisterPage.prototype.startDrawing = function () {
    };
    NewregisterPage.prototype.moved = function () {
    };
    NewregisterPage.prototype.clearPad = function () {
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