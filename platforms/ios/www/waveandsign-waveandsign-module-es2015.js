(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["waveandsign-waveandsign-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/waveandsign/waveandsign.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/waveandsign/waveandsign.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>waveandsign</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"background ion-padding\">\n\n\n\n<div class=\"buttonposition ion-text-center\">\n <ion-button shape=\"round\"  fill=\"outline\" color=\"Tertiary\" href=\"home\" >BACK</ion-button>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/waveandsign/waveandsign.module.ts":
/*!***************************************************!*\
  !*** ./src/app/waveandsign/waveandsign.module.ts ***!
  \***************************************************/
/*! exports provided: WaveandsignPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaveandsignPageModule", function() { return WaveandsignPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _waveandsign_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./waveandsign.page */ "./src/app/waveandsign/waveandsign.page.ts");







const routes = [
    {
        path: '',
        component: _waveandsign_page__WEBPACK_IMPORTED_MODULE_6__["WaveandsignPage"]
    }
];
let WaveandsignPageModule = class WaveandsignPageModule {
};
WaveandsignPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_waveandsign_page__WEBPACK_IMPORTED_MODULE_6__["WaveandsignPage"]]
    })
], WaveandsignPageModule);



/***/ }),

/***/ "./src/app/waveandsign/waveandsign.page.scss":
/*!***************************************************!*\
  !*** ./src/app/waveandsign/waveandsign.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('reg_background.png') no-repeat fixed center;\n  background-size: contain; }\n\n.scroll-content {\n  overflow-y: hidden; }\n\n.buttonposition {\n  position: fixed;\n  left: 20px;\n  bottom: 30px;\n  right: 20px; }\n\nion-button {\n  color: #2d355e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXljZWVmZXJuYW5kZXovRG9jdW1lbnRzL2lvbmljZm9sZGVyL2VuZmFncm93QXBwL3NyYy9hcHAvd2F2ZWFuZHNpZ24vd2F2ZWFuZHNpZ24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsOERBQWE7RUFDWix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93YXZlYW5kc2lnbi93YXZlYW5kc2lnbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xuXHQtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3JlZ19iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmJ1dHRvbnBvc2l0aW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMjBweDtcbiAgICBib3R0b206IDMwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1idXR0b257XG4gICAgY29sb3I6ICMyZDM1NWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/waveandsign/waveandsign.page.ts":
/*!*************************************************!*\
  !*** ./src/app/waveandsign/waveandsign.page.ts ***!
  \*************************************************/
/*! exports provided: WaveandsignPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaveandsignPage", function() { return WaveandsignPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WaveandsignPage = class WaveandsignPage {
    constructor() { }
    ngOnInit() {
    }
};
WaveandsignPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-waveandsign',
        template: __webpack_require__(/*! raw-loader!./waveandsign.page.html */ "./node_modules/raw-loader/index.js!./src/app/waveandsign/waveandsign.page.html"),
        styles: [__webpack_require__(/*! ./waveandsign.page.scss */ "./src/app/waveandsign/waveandsign.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WaveandsignPage);



/***/ })

}]);
//# sourceMappingURL=waveandsign-waveandsign-module-es2015.js.map