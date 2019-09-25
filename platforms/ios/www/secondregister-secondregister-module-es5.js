(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["secondregister-secondregister-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/secondregister/secondregister.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/secondregister/secondregister.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background ion-padding\">\n\n\t<ion-grid>\n\t\t<form #info=\"ngForm\">\n\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row class=\"containertext\">\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-input name=\"names\" ngModel required></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t<ion-label class=\"myfirsttext\">NAME</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"mysecondtext ion-text-center\">\n\t\t\t\t\t<ion-label>(LAST NAME, FIRST NAME, MIDDLE NAME)</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row class=\"containertext\">\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-input name=\"prcid\" ngModel required></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t<ion-label class=\"myfirsttext\">PRC ID</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"containeremailphone ion-float-left\">\n\t\t\t\t\t<ion-input name=\"emailadd\" ngModel required></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"containeremailphone ion-float-right\">\n\t\t\t\t\t<ion-input name=\"mobilenumber\" ngModel required></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"myfirsttext ion-text-center ion-float-left\">\n\t\t\t\t\t<ion-label>EMAIL ADDRESS</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col class=\"myfirsttext ion-text-center ion-float-right\">\n\t\t\t\t\t<ion-label>MOBILE NUMBER</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\n\t\t\t<ion-row>\n\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t<ion-label class=\"myline\">________________________________________</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t<ion-label class=\"myfirsttext\">WAIVER RELEASE AND LIABILITY</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row class=\"containertextarea ion-align-items-center\">\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-textarea disabled=\"true\"><br />*WAIVER CONTENT*</ion-textarea>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row class=\"containagree\">\n\t\t\t\t<ion-col size=\"1.5\">\n\t\t\t\t\t<ion-checkbox name=\"useragree\" class=\"checkbox-terms\" [(ngModel)]=\"checked\"></ion-checkbox>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<ion-label class=\"terms-conditions\">I agree</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row [ngClass]=\"{'drawing-active': isDrawing}\" class=\"containerforpad \">\n\t\t\t\t<ion-col>\n\t\t\t\t\t<signature-pad [options]=\"signaturePadOptions\" (onBeginEvent)=\"drawStart()\"\n\t\t\t\t\t\t(onEndEvent)=\"drawComplete()\"></signature-pad>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t\t<ion-label>Signature</ion-label>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<!-- <ion-row>\n\t\t\t\t<ion-col></ion-col>\n\t\t\t\t<ion-col class=\"ion-text-center\" width-80>\n\t\t\t\t  <img [src]=\"signature\"/>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col></ion-col>\n\t\t\t</ion-row> -->\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"ion-text-center \">\n\t\t\t\t\t<ion-button color=\"Tertiary\" (click)=\"clearPad()\">Clear</ion-button>\n\t\t\t\t\t<ion-button color=\"Tertiary\" (click)=\"savePad()\">Save</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\n\t\t</form>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button shape=\"round\" fill=\"outline\" color=\"Tertiary\" class=\"ion-float-left\" position=\"bottom\"\n\t\t\t\t\thref=\"home\">BACK</ion-button>\n\t\t\t\t<ion-button [disabled]=\"!info.form.valid || !checked\" (click)=\"addProduct(info)\" shape=\"round\" fill=\"outline\" color=\"Tertiary\"\n\t\t\t\t\tclass=\"ion-float-right\" position=\"bottom\">SUBMIT</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\n</ion-content>"

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
            declarations: [
                _secondregister_page__WEBPACK_IMPORTED_MODULE_6__["SecondregisterPage"]
            ]
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

module.exports = "ion-content.background {\n  --background: url('reg_background.png') no-repeat fixed center;\n  background-size: contain; }\n\n.scroll-content {\n  overflow-y: hidden; }\n\npage-home .drawing-active {\n  background: #d6fffc; }\n\npage-home .title {\n  text-align: center;\n  font-weight: bold;\n  padding: 10px; }\n\nion-button {\n  color: #2d355e;\n  border: solid 2px;\n  border-radius: 20px !important; }\n\ncanvas {\n  display: block;\n  border: 3px solid #2d355e;\n  border-radius: 20px !important;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  background-color: transparent; }\n\n.color-block {\n  height: 40px; }\n\n.containerforpad {\n  width: 450px !important;\n  margin-left: auto;\n  margin-right: auto;\n  border: 3px solid #2d355e;\n  border-radius: 20px !important;\n  text-align: center;\n  background-color: transparent; }\n\nion-button {\n  color: #2d355e; }\n\n.button-bottom {\n  width: 50%; }\n\n.buttonposition {\n  position: fixed;\n  left: 20px;\n  bottom: 30px;\n  right: 20px; }\n\n.nameofreg {\n  position: fixed;\n  left: 50px;\n  bottom: 60px;\n  right: 50px; }\n\n.rounded {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  margin-bottom: 10px; }\n\n.container {\n  width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: rgba(0, 0, 0, 0); }\n\n.containermobemail {\n  border: solid 3px #2d355e;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.containagree {\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.containertext {\n  width: 350px;\n  height: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 3px #2d355e;\n  border-radius: 20px !important;\n  text-align: center;\n  background-color: transparent; }\n\n.containeremailphone {\n  width: 250px;\n  height: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 3px #2d355e;\n  border-radius: 20px !important;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.containertextarea {\n  width: 450px !important;\n  height: 160px;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 3px #2d355e;\n  border-radius: 20px !important;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  text-align: center;\n  background-color: transparent; }\n\n.masters {\n  background-color: rgba(0, 0, 0, 0); }\n\n.myfirsttext {\n  color: #2d355e;\n  font-weight: bold;\n  font-size: 15px; }\n\n.myline {\n  color: #2d355e;\n  font-weight: bold;\n  font-size: 30px; }\n\n.mysecondtext {\n  color: #2d355e;\n  font-weight: bold;\n  font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJnYTAyL0RvY3VtZW50cy9pb25pY1Byb2ovX2VuZmEvc3JjL2FwcC9zZWNvbmRyZWdpc3Rlci9zZWNvbmRyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyw4REFBYTtFQUNaLHdCQUF3QixFQUFBOztBQUcxQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUVVLG1CQUFtQixFQUFBOztBQUY3QjtFQUtVLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUl0QjtFQUNPLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsOEJBQThCLEVBQUE7O0FBSXRDO0VBQ1EsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDZCQUE2QixFQUFBOztBQUVyQztFQUNRLFlBQVksRUFBQTs7QUFHcEI7RUFDUSx1QkFBdUI7RUFDdkIsaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsOEJBQThCO0VBSzlCLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQTs7QUFHckM7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0EsVUFBVSxFQUFBOztBQUdWO0VBQ0ksZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ1EsV0FBVztFQUNYLGFBQWE7RUFHYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ1EsWUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0NBQWdDLEVBQUE7O0FBR3hDO0VBQ1EseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QixFQUFBOztBQUdyQztFQUNRLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QixFQUFBOztBQUtyQztFQUNRLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsOEJBQThCO0VBS3BDLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDUSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUNwQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUVuQixrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7O0FBa0IvQjtFQUNRLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsOEJBQThCO0VBQ3BDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0ssa0NBQWdDLEVBQUE7O0FBRXJDO0VBQ1EsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRXZCO0VBQ1EsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRXZCO0VBQ1EsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWNvbmRyZWdpc3Rlci9zZWNvbmRyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xuXHQtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3JlZ19iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxucGFnZS1ob21lIHtcbiAgICAgICAgLmRyYXdpbmctYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDZmZmZjO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiB9XG5cbiBpb24tYnV0dG9ue1xuICAgICAgICBjb2xvcjogIzJkMzU1ZTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiB9XG4gICAgXG5cbmNhbnZhcyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMmQzNTVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY29sb3ItYmxvY2sge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5jb250YWluZXJmb3JwYWQge1xuICAgICAgICB3aWR0aDogNDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZDM1NWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAvLyBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tYnV0dG9ue1xuICAgIGNvbG9yOiAjMmQzNTVlO1xufVxuXG4uYnV0dG9uLWJvdHRvbXtcbndpZHRoOiA1MCU7XG59XG5cbi5idXR0b25wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xufVxuXG4ubmFtZW9mcmVnIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogNTBweDtcbiAgICBib3R0b206IDYwcHg7XG4gICAgcmlnaHQ6IDUwcHg7XG59XG5cbi5yb3VuZGVkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgXG4gICAgICAgIFxufVxuXG4uY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDYwMHB4OyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKDAsMCwwLDApO1xufVxuXG4uY29udGFpbmVybW9iZW1haWwge1xuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjMmQzNTVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNvbnRhaW5hZ3JlZSB7XG4gICAgICAgIHdpZHRoOiAxNTBweDsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG5cbi5jb250YWluZXJ0ZXh0IHtcbiAgICAgICAgd2lkdGg6IDM1MHB4OyBcbiAgICAgICAgaGVpZ2h0OiA0MHB4OyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG4gICAgICAgIGJvcmRlcjogc29saWQgM3B4ICMyZDM1NWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcblx0XHQvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0Ly8gcGFkZGluZy1yaWdodDogMTBweDtcblx0XHQvLyBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRcdC8vIHBhZGRpbmctdG9wOiA1cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGFpbmVyZW1haWxwaG9uZSB7XG4gICAgICAgIHdpZHRoOiAyNTBweDsgXG4gICAgICAgIGhlaWdodDogNDBweDsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjMmQzNTVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDVweDtcblx0XHQvLyBwYWRkaW5nLXRvcDogNXB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG4vLyAuY29udGFpbmVydGV4dCB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDBweDsgXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjODU1Mjk0O1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4vLyBcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuLy8gXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4vLyBcdFx0cGFkZGluZy1ib3R0b206IDVweDtcbi8vIFx0XHRwYWRkaW5nLXRvcDogNXB4O1xuLy8gXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vIH1cblxuLmNvbnRhaW5lcnRleHRhcmVhIHtcbiAgICAgICAgd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTYwcHg7IFxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggIzJkMzU1ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuXHRcdHBhZGRpbmctbGVmdDogNXB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDVweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRcdHBhZGRpbmctdG9wOiA1cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWFzdGVyc3tcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMCwwLDAsMCk7XG59XG4ubXlmaXJzdHRleHR7XG4gICAgICAgIGNvbG9yOiAjMmQzNTVlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xufVxuLm15bGluZXtcbiAgICAgICAgY29sb3I6ICMyZDM1NWU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG59XG4ubXlzZWNvbmR0ZXh0e1xuICAgICAgICBjb2xvcjogIzJkMzU1ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */"

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
        this.product = {};
        this.selectedView = 'devs';
        this.signature = '';
        this.isDrawing = false;
        this.checked = false;
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
                _this.products = _this.db.getList();
            }
        });
        this.signature = "";
    };
    SecondregisterPage.prototype.ngAfterViewInit = function () {
        // this.signaturePad is now available
        // this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    };
    SecondregisterPage.prototype.addProduct = function (info) {
        var _this = this;
        console.log(info.value);
        var details;
        details = info.value;
        details.img = this.signature;
        details.wavelia = "";
        console.log(details);
        this.db.addVisitor(details)
            .then(function (_) {
            _this.signaturePad.clear();
            _this.infoFrm.reset();
        });
    };
    SecondregisterPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.signaturePad.clear();
        this.signature = "";
        this.storage.get('savedSignature').then(function (data) {
            _this.signature = data;
        });
        this.infoFrm.reset();
    };
    SecondregisterPage.prototype.drawComplete = function () {
        // will be notified of szimek/signature_pad's onEnd event
        this.isDrawing = false;
        this.signature = this.signaturePad.toDataURL();
        this.storage.set('savedSignature', this.signature);
        console.log(this.signaturePad.toDataURL());
    };
    SecondregisterPage.prototype.drawStart = function () {
        // will be notified of szimek/signature_pad's onBegin event
        this.isDrawing = true;
        console.log('begin drawing');
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('info', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SecondregisterPage.prototype, "infoFrm", void 0);
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