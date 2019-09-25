(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["secondregister-secondregister-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/secondregister/secondregister.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secondregister/secondregister.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"background ion-padding\">\n\n\t<ion-grid >\n\t\t\t<ion-row>\n\t\t\t   <ion-col >\n\t\t\t   </ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col >\t  \n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col >\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col >\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col >\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t\t<ion-col >\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\t  \t  \n\t\t\t<ion-row class=\"containertext\">\n\t\t\t\t<ion-col  >\n\t\t\t\t   <ion-input [(ngModel)]=\"product.names\"></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t </ion-row>\n\t\t\t <ion-row>\n\t\t\t\t\t<ion-col  class=\"ion-text-center\">\n\t\t\t\t\t\t<ion-label class=\"myfirsttext\">NAME</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t </ion-row>\n\t\t\t <ion-row>\n\t\t\t\t\t<ion-col  class=\"mysecondtext ion-text-center\">\n\t\t\t\t\t\t<ion-label >(LAST NAME, FIRST NAME, MIDDLE NAME)</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col >\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\t  \n\t\t\t <ion-row class=\"containertext\">\n\t\t\t\t<ion-col >\n\t\t\t\t\t<ion-input ></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t </ion-row>\n\t\t\t <ion-row>\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t<ion-label class=\"myfirsttext\">PRC ID</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t </ion-row>\n\t\t\t <ion-row>\n\t\t\t\t\t<ion-col >\n\t\t\t\t\t</ion-col>\n\t\t\t</ion-row>\t \n\t\t\t <ion-row >\n\t\t\t\t\t<ion-col >\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col class=\"containeremailphone ion-float-left\">\n\t\t\t\t\t\t<ion-input ></ion-input>\n\t\t\t\t\t</ion-col>\n\t\t\t\t   <ion-col class=\"containeremailphone ion-float-right\">\n\t\t\t\t\t\t<ion-input ></ion-input>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col >\n\t\t\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col >\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"myfirsttext ion-text-center ion-float-left\">\n\t\t\t\t\t\t\t<ion-label>EMAIL ADDRESS</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"myfirsttext ion-text-center ion-float-right\" >\n\t\t\t\t\t<ion-label >MOBILE NUMBER</ion-label>\n\t\t\t   </ion-col>\n\t\t\t   <ion-col >\n\t\t\t\t</ion-col>\n\t\t   </ion-row>\n\t\n\t\t\t<ion-row>\n\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t\t<ion-label class=\"myline\">________________________________________</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t\t<ion-label class=\"myfirsttext\">WAIVER RELEASE AND LIABILITY</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row class=\"containertextarea ion-align-items-center\">\n\t\t\t\t\t<ion-col >\n\t\t\t\t\t\t\t<ion-textarea disabled=\"true\"><br/>*WAIVER CONTENT*</ion-textarea >\n\t\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"containagree\">\n\t\t\t\t\t\t\t<ion-checkbox color=\"tertiary\" checked slot=\"start\"></ion-checkbox>\n\t\t\t\t\t\t\t<ion-label>I Agree</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row [ngClass]=\"{'drawing-active': isDrawing}\" class=\"containerforpad \">\n\t\t\t\t<ion-col >\n\t\t\t\t\t<signature-pad [options]=\"signaturePadOptions\" (onBeginEvent)=\"drawStart()\" (onEndEvent)=\"drawComplete()\"></signature-pad>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t\t\t<ion-label >Signature</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t</ion-row>  \n\t\t\t<!-- <ion-row>\n\t\t\t\t<ion-col></ion-col>\n\t\t\t\t<ion-col class=\"ion-text-center\" width-80>\n\t\t\t\t  <img [src]=\"signature\"/>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col></ion-col>\n\t\t\t</ion-row> -->\n\t\t\t<ion-row>\n\t\t\t\t\t<ion-col class=\"ion-text-center \">\n\t\t\t\t\t\t\t<ion-button color=\"Tertiary\" (click)=\"clearPad()\">Clear</ion-button>\n\t\t\t\t\t\t\t<ion-button color=\"Tertiary\" (click)=\"clearPad()\">Save</ion-button>\n\t\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-button  shape=\"round\"  fill=\"outline\" color=\"Tertiary\" class=\"ion-float-left\" position=\"bottom\" href=\"home\" >BACK</ion-button>\n\t\t\t\t\t\t<ion-button  (click)=\"addProduct()\" shape=\"round\"  fill=\"outline\" color=\"Tertiary\" class=\"ion-float-right\" position=\"bottom\" >SUBMIT</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t </ion-row>\n\t</ion-grid>\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/secondregister/secondregister.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/secondregister/secondregister.module.ts ***!
  \*********************************************************/
/*! exports provided: SecondregisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondregisterPageModule", function() { return SecondregisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _secondregister_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secondregister.page */ "./src/app/secondregister/secondregister.page.ts");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-signaturepad */ "./node_modules/angular2-signaturepad/index.js");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__);








var routes = [
    {
        path: '',
        component: _secondregister_page__WEBPACK_IMPORTED_MODULE_6__["SecondregisterPage"]
    }
];
var SecondregisterPageModule = /** @class */ (function () {
    function SecondregisterPageModule() {
    }
    SecondregisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"]
            ],
            declarations: [_secondregister_page__WEBPACK_IMPORTED_MODULE_6__["SecondregisterPage"]]
        })
    ], SecondregisterPageModule);
    return SecondregisterPageModule;
}());



/***/ }),

/***/ "./src/app/secondregister/secondregister.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/secondregister/secondregister.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('reg_background.png') no-repeat fixed center;\n  background-size: contain; }\n\n.scroll-content {\n  overflow-y: hidden; }\n\npage-home .drawing-active {\n  background: #d6fffc; }\n\npage-home .title {\n  text-align: center;\n  font-weight: bold;\n  padding: 10px; }\n\nion-button {\n  color: #2d355e;\n  border: solid 2px;\n  border-radius: 20px !important; }\n\ncanvas {\n  display: block;\n  border: 3px solid #2d355e;\n  border-radius: 20px !important;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  background-color: transparent; }\n\n.color-block {\n  height: 40px; }\n\n.containerforpad {\n  width: 450px !important;\n  margin-left: auto;\n  margin-right: auto;\n  border: 3px solid #2d355e;\n  border-radius: 20px !important;\n  text-align: center;\n  background-color: transparent; }\n\nion-button {\n  color: #2d355e; }\n\n.button-bottom {\n  width: 50%; }\n\n.buttonposition {\n  position: fixed;\n  left: 20px;\n  bottom: 30px;\n  right: 20px; }\n\n.nameofreg {\n  position: fixed;\n  left: 50px;\n  bottom: 60px;\n  right: 50px; }\n\n.rounded {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  margin-bottom: 10px; }\n\n.container {\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: rgba(0, 0, 0, 0); }\n\n.containermobemail {\n  border: solid 3px #2d355e;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.containagree {\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.containertext {\n  width: 350px;\n  height: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 3px #2d355e;\n  border-radius: 20px !important;\n  text-align: center;\n  background-color: transparent; }\n\n.containeremailphone {\n  width: 250px;\n  height: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 3px #2d355e;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.containertextarea {\n  width: 450px !important;\n  height: 160px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 3px #2d355e;\n  border-radius: 20px !important;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.masters {\n  background-color: rgba(0, 0, 0, 0); }\n\n.myfirsttext {\n  color: #2d355e;\n  font-weight: bold;\n  font-size: 15px; }\n\n.myline {\n  color: #2d355e;\n  font-weight: bold;\n  font-size: 30px; }\n\n.mysecondtext {\n  color: #2d355e;\n  font-weight: bold;\n  font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXljZWVmZXJuYW5kZXovRG9jdW1lbnRzL2lvbmljZm9sZGVyL2VuZmFncm93QXBwL3NyYy9hcHAvc2Vjb25kcmVnaXN0ZXIvc2Vjb25kcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsOERBQWE7RUFDWix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFFVSxtQkFBbUIsRUFBQTs7QUFGN0I7RUFLVSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTs7QUFJdEI7RUFDTyxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDhCQUE4QixFQUFBOztBQUl0QztFQUNRLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw2QkFBNkIsRUFBQTs7QUFFckM7RUFDUSxZQUFZLEVBQUE7O0FBR3BCO0VBQ1EsdUJBQXVCO0VBQ3ZCLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUs5QixrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7O0FBR3JDO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNBLFVBQVUsRUFBQTs7QUFHVjtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNRLFdBQVc7RUFDWCxhQUFhO0VBR2IsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUkzQjtFQUNRLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtDQUFnQyxFQUFBOztBQUd4QztFQUNRLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQTs7QUFHckM7RUFDUSxZQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQTs7QUFLckM7RUFDUSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUtwQyxrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ1EsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDcEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFFbkIsa0JBQWtCO0VBQ2xCLDZCQUE2QixFQUFBOztBQWtCL0I7RUFDUSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUNwQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QixFQUFBOztBQUcvQjtFQUNLLGtDQUFnQyxFQUFBOztBQUVyQztFQUNRLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUV2QjtFQUNRLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUV2QjtFQUNRLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2Vjb25kcmVnaXN0ZXIvc2Vjb25kcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcblx0LS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9yZWdfYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLnNjcm9sbC1jb250ZW50IHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbnBhZ2UtaG9tZSB7XG4gICAgICAgIC5kcmF3aW5nLWFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Q2ZmZmYztcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gfVxuXG4gaW9uLWJ1dHRvbntcbiAgICAgICAgY29sb3I6ICMyZDM1NWU7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gfVxuICAgIFxuXG5jYW52YXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzJkMzU1ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmNvbG9yLWJsb2NrIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uY29udGFpbmVyZm9ycGFkIHtcbiAgICAgICAgd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMmQzNTVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgICBjb2xvcjogIzJkMzU1ZTtcbn1cblxuLmJ1dHRvbi1ib3R0b217XG53aWR0aDogNTAlO1xufVxuXG4uYnV0dG9ucG9zaXRpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICByaWdodDogMjBweDtcbn1cblxuLm5hbWVvZnJlZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDUwcHg7XG4gICAgYm90dG9tOiA2MHB4O1xuICAgIHJpZ2h0OiA1MHB4O1xufVxuXG4ucm91bmRlZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgIFxuICAgICAgICBcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA2MDBweDsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgwLDAsMCwwKTtcbn1cblxuLmNvbnRhaW5lcm1vYmVtYWlsIHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzJkMzU1ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jb250YWluYWdyZWUge1xuICAgICAgICB3aWR0aDogMTUwcHg7IFxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cblxuXG4uY29udGFpbmVydGV4dCB7XG4gICAgICAgIHdpZHRoOiAzNTBweDsgXG4gICAgICAgIGhlaWdodDogNDBweDsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjMmQzNTVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG5cdFx0Ly8gcGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdC8vIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0Ly8gcGFkZGluZy1ib3R0b206IDVweDtcblx0XHQvLyBwYWRkaW5nLXRvcDogNXB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNvbnRhaW5lcmVtYWlscGhvbmUge1xuICAgICAgICB3aWR0aDogMjUwcHg7IFxuICAgICAgICBoZWlnaHQ6IDQwcHg7IFxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzJkMzU1ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuXHRcdHBhZGRpbmctbGVmdDogMTBweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XG5cdFx0Ly8gcGFkZGluZy10b3A6IDVweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cblxuLy8gLmNvbnRhaW5lcnRleHQge1xuLy8gICAgICAgICB3aWR0aDogMTAwcHg7IFxuLy8gICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbi8vICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzg1NTI5NDtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuLy8gXHRcdHBhZGRpbmctbGVmdDogMTBweDtcbi8vIFx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuLy8gXHRcdHBhZGRpbmctYm90dG9tOiA1cHg7XG4vLyBcdFx0cGFkZGluZy10b3A6IDVweDtcbi8vIFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyBcdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyB9XG5cbi5jb250YWluZXJ0ZXh0YXJlYSB7XG4gICAgICAgIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDE2MHB4OyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4ICMyZDM1NWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcblx0XHRwYWRkaW5nLWxlZnQ6IDVweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDVweDtcblx0XHRwYWRkaW5nLXRvcDogNXB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1hc3RlcnN7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsMCwwLDApO1xufVxuLm15Zmlyc3R0ZXh0e1xuICAgICAgICBjb2xvcjogIzJkMzU1ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5teWxpbmV7XG4gICAgICAgIGNvbG9yOiAjMmQzNTVlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xufVxuLm15c2Vjb25kdGV4dHtcbiAgICAgICAgY29sb3I6ICMyZDM1NWU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/secondregister/secondregister.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/secondregister/secondregister.page.ts ***!
  \*******************************************************/
/*! exports provided: SecondregisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondregisterPage", function() { return SecondregisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-signaturepad/signature-pad */ "./node_modules/angular2-signaturepad/signature-pad.js");
/* harmony import */ var angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/database.service */ "./src/app/services/database.service.ts");





var SecondregisterPage = /** @class */ (function () {
    function SecondregisterPage(storage, db) {
        this.storage = storage;
        this.db = db;
        // developer = {};
        this.product = {};
        this.selectedView = 'devs';
        this.signature = '';
        this.isDrawing = false;
        this.signaturePadOptions = {
            'minWidth': 2,
            'canvasWidth': 400,
            'canvasHeight': 200,
            'backgroundColor': '#f6fbff',
            'penColor': '#666a73'
        };
    }
    SecondregisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.db.getDatabaseState().subscribe(function (rdy) {
            if (rdy) {
                // this.db.getDevs().subscribe(devs => {
                //   this.developers = devs;
                // })
                _this.products = _this.db.getProducts();
            }
        });
    };
    // addDeveloper() {
    //   let skills = this.developer['skills'].split(',');
    //   skills = skills.map(skill => skill.trim());
    //   this.db.addDeveloper(this.developer['name'])
    //   .then(_ => {
    //     this.developer = {};
    //   });
    // }
    SecondregisterPage.prototype.addProduct = function () {
        var _this = this;
        this.db.addProduct(this.product['names'])
            .then(function (_) {
            _this.product = {};
        });
    };
    SecondregisterPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.signaturePad.clear();
        this.storage.get('savedSignature').then(function (data) {
            _this.signature = data;
        });
    };
    SecondregisterPage.prototype.drawComplete = function () {
        this.isDrawing = false;
    };
    SecondregisterPage.prototype.drawStart = function () {
        this.isDrawing = true;
    };
    SecondregisterPage.prototype.savePad = function () {
        this.signature = this.signaturePad.toDataURL();
        this.storage.set('savedSignature', this.signature);
        //this.signaturePad.clear();
        // let toast = this.toastCtrl.create({
        //   message: 'New Signature saved.',
        //   duration: 3000
        // });
        // toast.present();
    };
    SecondregisterPage.prototype.clearPad = function () {
        this.signaturePad.clear();
    };
    SecondregisterPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"])
    ], SecondregisterPage.prototype, "signaturePad", void 0);
    SecondregisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-secondregister',
            template: __webpack_require__(/*! raw-loader!./secondregister.page.html */ "./node_modules/raw-loader/index.js!./src/app/secondregister/secondregister.page.html"),
            styles: [__webpack_require__(/*! ./secondregister.page.scss */ "./src/app/secondregister/secondregister.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
    ], SecondregisterPage);
    return SecondregisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=secondregister-secondregister-module-es5.js.map