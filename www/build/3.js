webpackJsonp([3],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisarKmPageModule", function() { return RevisarKmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__revisar_km__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RevisarKmPageModule = /** @class */ (function () {
    function RevisarKmPageModule() {
    }
    RevisarKmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__revisar_km__["a" /* RevisarKmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__revisar_km__["a" /* RevisarKmPage */]),
            ],
        })
    ], RevisarKmPageModule);
    return RevisarKmPageModule;
}());

//# sourceMappingURL=revisar-km.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevisarKmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servico_veiculos_servico_veiculos__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(88);
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
 * Generated class for the RevisarKmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RevisarKmPage = /** @class */ (function () {
    function RevisarKmPage(navCtrl, navParams, veiculoListService, auth, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.veiculoListService = veiculoListService;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.backgrounds = [
            'assets/img/background/background-1.jpg',
            'assets/img/background/background-2.jpg',
            'assets/img/background/background-3.jpg',
            'assets/img/background/background-4.jpg'
        ];
        var revisao = "Revisao1", peca = "Troca de óleo";
        var listaPecasRevisaoRegular = veiculoListService.getAllPecas();
        /*
        function verificarEstadoVeiculo(km: number) {
  
          if(km >=  1000 && km < 3000) {
            console.log("Quilometragem informada " + km);
            console.log("É necessário passar pela primeira revisão regular!");
            // console.log(JSON.stringify(lis));
            
            listaPecasRevisaoRegular.forEach(function(element){
              element.forEach(item => {
                console.log("Essas Peças pode está avarriada!" + item['Item']);
              })
            })
            
  
          } else if(km >= 3000 && km < 6000) {
            console.log("Quilometragem informado " + km);
            console.log("É necessário passar pela segunda revisão regular!");
            /*
            listaPecasRevisao2000km.forEach(function(element){
              console.log("Essas Peças podem está avarrriado!" + element);
            })
          } else if(km >= 6000) {
            console.log("Quilometragem informado " + km);
            console.log("É necessário passar pela terceira revisão regular!");
            
            listaPecasRevisaoRegular.forEach(function(element){
              console.log("Essas Peças podem está avarrriado!" + element);
            })
            
          }
          
        }
  
        verificarEstadoVeiculo(2000);
        */
    }
    RevisarKmPage.prototype.getPaginaRevisao = function (km) {
        console.log(" Pag-km " + km);
        this.navCtrl.push('RevisoesPage', { km: km });
    };
    RevisarKmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RevisarKmPage');
    };
    RevisarKmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-revisar-km',template:/*ion-inline-start:"E:\CheckMotors-App\src\pages\revisar-km\revisar-km.html"*/'<!--\n\n  Generated template for the RevisarKmPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n\n    <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n<ion-header >\n\n\n\n  <ion-navbar transparent color="primary">\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="home-container">\n\n    <div class="card">\n\n      <div class="box">\n\n          <ion-item class="ion-button"  no-lines>\n\n              <ion-input type="number" [(ngModel)]="km" placeholder="Informe km atual do veiculo">\n\n              </ion-input>\n\n          </ion-item>\n\n            \n\n          <button class="ion-button" ion-button block type="submit" (click)="getPaginaRevisao(km)">\n\n            Verificar\n\n          </button>\n\n      </div>\n\n      \n\n    </div>  \n\n          \n\n  </div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"E:\CheckMotors-App\src\pages\revisar-km\revisar-km.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servico_veiculos_servico_veiculos__["a" /* VeiculoListService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], RevisarKmPage);
    return RevisarKmPage;
}());

//# sourceMappingURL=revisar-km.js.map

/***/ })

});
//# sourceMappingURL=3.js.map