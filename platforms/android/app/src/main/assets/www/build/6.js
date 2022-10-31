webpackJsonp([6],{

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricorevisoesPageModule", function() { return HistoricorevisoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historicorevisoes__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoricorevisoesPageModule = /** @class */ (function () {
    function HistoricorevisoesPageModule() {
    }
    HistoricorevisoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historicorevisoes__["a" /* HistoricorevisoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historicorevisoes__["a" /* HistoricorevisoesPage */]),
            ],
        })
    ], HistoricorevisoesPageModule);
    return HistoricorevisoesPageModule;
}());

//# sourceMappingURL=historicorevisoes.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricorevisoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistoricorevisoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoricorevisoesPage = /** @class */ (function () {
    function HistoricorevisoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backgrounds = [
            'assets/img/background/background-1.jpg',
            'assets/img/background/background-2.jpg',
            'assets/img/background/background-3.jpg',
            'assets/img/background/background-4.jpg'
        ];
    }
    HistoricorevisoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoricorevisoesPage');
    };
    HistoricorevisoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historicorevisoes',template:/*ion-inline-start:"E:\CheckMotors-App\src\pages\historicorevisoes\historicorevisoes.html"*/'<!--\n\n  Generated template for the HistoricorevisoesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar transparent color="primary">\n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n\n  <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n\n  </ion-slide>\n\n</ion-slides>\n\n\n\n<ion-content padding >\n\n  <div class="home-container">\n\n\n\n    <ion-grid >\n\n      <ion-row >\n\n        <ion-col>\n\n\n\n              <ion-list>\n\n              \n\n                <ion-item class="card">\n\n                  <ion-label>\n\n                    <button ion-button icon-left block outline  color="light" class="ion-button" (click)="login(user)" *ngIf="">Revisar agora</button>\n\n                  </ion-label>\n\n                  \n\n                </ion-item>\n\n                \n\n                \n\n\n\n                \n\n                  <!--<button ion-button icon-left block outline round  color="light" class="ion-button" (click)="login(user)" *ngIf="peca.item == true">Revisar agora</button>\n\n-->\n\n                \n\n              </ion-list>\n\n              \n\n        </ion-col>\n\n        \n\n      </ion-row>\n\n      \n\n  </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\CheckMotors-App\src\pages\historicorevisoes\historicorevisoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], HistoricorevisoesPage);
    return HistoricorevisoesPage;
}());

//# sourceMappingURL=historicorevisoes.js.map

/***/ })

});
//# sourceMappingURL=6.js.map