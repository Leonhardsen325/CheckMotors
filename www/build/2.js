webpackJsonp([2],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisoesPageModule", function() { return RevisoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__revisoes__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RevisoesPageModule = /** @class */ (function () {
    function RevisoesPageModule() {
    }
    RevisoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__revisoes__["a" /* RevisoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__revisoes__["a" /* RevisoesPage */]),
            ],
        })
    ], RevisoesPageModule);
    return RevisoesPageModule;
}());

//# sourceMappingURL=revisoes.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevisoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servico_veiculos_servico_veiculos__ = __webpack_require__(154);
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
 * Generated class for the RevisoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RevisoesPage = /** @class */ (function () {
    function RevisoesPage(navCtrl, navParams, veiculoListService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.veiculoListService = veiculoListService;
        this.alertCtrl = alertCtrl;
        this.peca = {
            item: '',
            operacao: '',
            trocar: true
        };
        this.backgrounds = [
            'assets/img/background/background-1.jpg',
            'assets/img/background/background-2.jpg',
            'assets/img/background/background-3.jpg',
            'assets/img/background/background-4.jpg'
        ];
        var checkboxModel = [
            { trocar: true, item: this.peca.item },
        ];
        /*
      if(this.peca.trocar == true) {
        this.peca.item
      }*/
        this.km = this.navParams.get('km');
        console.log("Pag-revisao " + this.km);
        this.listaPecasRevisaoRegular = veiculoListService.getAllPecas();
        this.verificarEstado(this.km);
        var item = this.peca.item;
        console.log(item);
    }
    /*
    checkboxChange() {
      let selOptions = [],
          checkboxes = this.listaPecasRevisaoRegular;
      for (let i = 0; i < checkboxes.length; ++i) {
          if (checkboxes[i].value) {
              selOptions.push(' ' + checkboxes[i].text);
          }
      }
      this.selOptions = selOptions;
    };
    */
    RevisoesPage.prototype.verificarEstado = function (km) {
        km = this.km;
        console.log("Entrou na função " + km);
        if (km >= 1000 && km < 3000) {
            console.log("Quilometragem informada " + km);
            console.log("É necessário passar pela primeira revisão!");
            var listaPecasRevisaoRegular1000km = this.listaPecasRevisaoRegular;
            // console.log(JSON.stringify(lis));
            return listaPecasRevisaoRegular1000km.forEach(function (element) {
                element.forEach(function (item) {
                    console.log("Essas Peças pode está avarriada!" + item['Item']);
                });
            });
        }
        else if (km >= 3000 && km < 6000) {
            console.log("Quilometragem informado " + km);
            console.log("É necessário passar pela segunda revisão!");
            var listaPecasRevisaoRegular = this.veiculoListService.getAllPecas();
            // console.log(JSON.stringify(lis));
            listaPecasRevisaoRegular.forEach(function (element) {
                element.forEach(function (item) {
                    console.log("Essas Peças pode está avarriada!" + item['Item']);
                });
            });
        }
        else if (km >= 6000 && km < 9000) {
            console.log("Quilometragem informado " + km);
            console.log("É necessário passar pela terceira revisão!");
            var listaPecasRevisaoRegular = this.veiculoListService.getAllPecas();
            // console.log(JSON.stringify(lis));
            listaPecasRevisaoRegular.forEach(function (element) {
                element.forEach(function (item) {
                    console.log("Essas Peças pode está avarriada!" + item['Item']);
                });
            });
        }
        else if (km >= 9000 && km < 12000) {
            console.log("É necessário passar pela revisão regular!");
        }
        else if (km >= 12000 && km < 15000) {
            console.log("É necessário passar pela revisão regular!");
        }
        else if (km >= 15000 && km <= 18000) {
            console.log("É necessário passar pela revisão regular!");
        }
        else {
            console.log("No momento o checkmotors está em desenvolvimento e só trabalha com motocicletas que rodaram até 18000km ");
        }
    };
    RevisoesPage.prototype.ionViewDidLoad = function () {
        var data = this.navParams.get('data');
        console.log(data);
    };
    RevisoesPage.prototype.getPageHistoricoRevisoes = function () {
        this.navCtrl.push('HistoricorevisoesPage');
    };
    RevisoesPage.prototype.confirmarOperacao = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Deseja confirmar revisão nas peças que foram selecionadas ? <br>',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.getPageHistoricoRevisoes();
                    }
                }
            ]
        });
        confirm.present();
    };
    RevisoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-revisoes',template:/*ion-inline-start:"E:\CheckMotors-App\src\pages\revisoes\revisoes.html"*/'<!--\n\n  Generated template for the RevisoesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar transparent color="primary">\n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n\n  <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n\n  </ion-slide>\n\n</ion-slides>\n\n\n\n<ion-content >\n\n  <div class="home-container">\n\n    <ion-row justify-content-center><h4>Peças Indicadas para revisão</h4></ion-row>\n\n    <ion-grid >\n\n      <ion-row >\n\n        <ion-col>\n\n\n\n              <ion-list *ngFor="let peca of listaPecasRevisaoRegular|async">\n\n              \n\n                <ion-item class="card">\n\n                  <ion-label [(ngModel)]="peca.item" >{{ peca.Item }}</ion-label>\n\n                  \n\n                  <ion-checkbox checked="false" [(ngModel)]="peca.trocar" (change)="checkboxChange()">{{ peca.Item }}</ion-checkbox>\n\n                  \n\n                </ion-item>\n\n                \n\n                \n\n\n\n                \n\n                  <!--<button ion-button icon-left block outline round  color="light" class="ion-button" (click)="login(user)" *ngIf="peca.item == true">Revisar agora</button>\n\n-->\n\n                \n\n              </ion-list>\n\n              \n\n        </ion-col>\n\n        \n\n      </ion-row>\n\n      \n\n</ion-grid>\n\n<button ion-button round color="light" class="ion-button" (click)="confirmarOperacao()">Revisar Agora</button>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\CheckMotors-App\src\pages\revisoes\revisoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servico_veiculos_servico_veiculos__["a" /* VeiculoListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RevisoesPage);
    return RevisoesPage;
}());

//# sourceMappingURL=revisoes.js.map

/***/ })

});
//# sourceMappingURL=2.js.map