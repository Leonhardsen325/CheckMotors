webpackJsonp([5],{

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servico_veiculos_servico_veiculos__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, veiculoListService, auth, alertCtrl, db, actionSheetCtrl, app) {
        this.navCtrl = navCtrl;
        this.veiculoListService = veiculoListService;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.actionSheetCtrl = actionSheetCtrl;
        this.app = app;
        this.backgrounds = [
            'assets/img/background/background-1.jpg',
            'assets/img/background/background-2.jpg',
            'assets/img/background/background-3.jpg',
            'assets/img/background/background-4.jpg'
        ];
        this.lista = [
            {
                usuario: {
                    key: '',
                    email: '',
                    veiculo: [
                        {
                            key: '',
                            marca: '',
                            modelo: '',
                            kmAtual: 0
                        }
                    ]
                }
            }
        ];
        console.log(auth.authenticated);
        this.modelosList = this.veiculoListService.getListModelos();
        this.veiculosList = this.veiculoListService.getAll();
    }
    HomePage.prototype.presentActionSheet = function (veiculo) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Verificar por Quilometragem',
                    role: 'Revisar por km',
                    handler: function () {
                        _this.navCtrl.push('RevisarKmPage');
                    }
                }, {
                    text: 'Revisões',
                    handler: function () {
                        _this.navCtrl.push('RevisoesPage');
                    }
                },
                {
                    text: 'Excluir',
                    role: 'destructive',
                    handler: function () {
                        _this.veiculoListService.removerVeiculo(veiculo);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.pageVeiculo = function () {
        this.navCtrl.push('VeiculosPage');
    };
    HomePage.prototype.logout = function () {
        this.auth.signOut();
        this.app.getRootNav().setRoot('LoginPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\CheckMotors-App\src\pages\home\home.html"*/'<ion-header>\n\n\n\n    <ion-navbar transparent>\n\n      <ion-buttons>\n\n        <button ion-button (click)="logout()" *ngIf="auth.authenticated" class="button-color">Sair</button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  \n\n</ion-header>\n\n  \n\n<ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n\n  <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n\n  </ion-slide>\n\n</ion-slides>\n\n\n\n<ion-content>\n\n    \n\n    <div class="home-container">\n\n\n\n        \n\n        <ion-grid >\n\n                <ion-row justify-content-center><h3>Painel de gerenciamento</h3></ion-row>\n\n\n\n                <ion-row >\n\n                  <ion-col>\n\n                        <button no-lines class="card" ion-item *ngFor="let veiculo of veiculosList|async" (click)="presentActionSheet(veiculo)">\n\n                                {{ veiculo.marca }} - {{ veiculo.modelo }}\n\n                        </button>\n\n                        <ion-item-options side="left">\n\n                            <button ion-button (click)="favorite(item)">Favorite</button>\n\n                            <button ion-button color="danger" (click)="share(item)">Share</button>\n\n                          </ion-item-options>\n\n                        \n\n\n\n                        \n\n                  </ion-col>\n\n                </ion-row>\n\n        </ion-grid>\n\n    </div>\n\n    \n\n    <ion-fab right bottom >\n\n        <button ion-fab color="primary" class="button-add" navPush="VeiculosPage"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\CheckMotors-App\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servico_veiculos_servico_veiculos__["a" /* VeiculoListService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=5.js.map