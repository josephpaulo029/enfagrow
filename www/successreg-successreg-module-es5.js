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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _successreg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./successreg.page */ "./src/app/successreg/successreg.page.ts");







var routes = [
    {
        path: '',
        component: _successreg_page__WEBPACK_IMPORTED_MODULE_6__["SuccessregPage"]
    }
];
var SuccessregPageModule = /** @class */ (function () {
    function SuccessregPageModule() {
    }
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
    return SuccessregPageModule;
}());



/***/ }),

/***/ "./src/app/successreg/successreg.page.scss":
/*!*************************************************!*\
  !*** ./src/app/successreg/successreg.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('enfagrow_background.png') no-repeat fixed center; }\n\n.scroll-content {\n  overflow-y: hidden; }\n\n.buttonposition {\n  position: fixed;\n  left: 20px;\n  bottom: 30px;\n  right: 20px; }\n\nion-button {\n  color: #2d355e;\n  border: solid 2px;\n  border-radius: 20px !important; }\n\n.myfirsttext {\n  color: #2d355e;\n  font-weight: bold;\n  font-size: 25px; }\n\n.displayed {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n  height: 70%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXljZWVmZXJuYW5kZXovRG9jdW1lbnRzL2lvbmljZm9sZGVyL2VuZmFncm93QXBwL3NyYy9hcHAvc3VjY2Vzc3JlZy9zdWNjZXNzcmVnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLG1FQUFhLEVBQUE7O0FBSWQ7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdWNjZXNzcmVnL3N1Y2Nlc3NyZWcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcblx0LS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9lbmZhZ3Jvd19iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbn1cblxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmJ1dHRvbnBvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMjBweDtcbiAgICBib3R0b206IDMwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1idXR0b257XG4gICAgY29sb3I6ICMyZDM1NWU7XG4gICAgYm9yZGVyOiBzb2xpZCAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubXlmaXJzdHRleHR7XG4gICAgY29sb3I6ICMyZDM1NWU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZGlzcGxheWVkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgfSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessregPage = /** @class */ (function () {
    function SuccessregPage() {
    }
    SuccessregPage.prototype.ngOnInit = function () {
    };
    SuccessregPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successreg',
            template: __webpack_require__(/*! raw-loader!./successreg.page.html */ "./node_modules/raw-loader/index.js!./src/app/successreg/successreg.page.html"),
            styles: [__webpack_require__(/*! ./successreg.page.scss */ "./src/app/successreg/successreg.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessregPage);
    return SuccessregPage;
}());



/***/ })

}]);
//# sourceMappingURL=successreg-successreg-module-es5.js.map