webpackJsonp([8],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculoListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth__ = __webpack_require__(87);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VeiculoListService = /** @class */ (function () {
    function VeiculoListService(db, authProvider, afAuth) {
        var _this = this;
        this.db = db;
        this.authProvider = authProvider;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userId = user.uid;
        });
        this.marcasListRef = this.db.list('marcas');
        this.modelosListRef = this.db.list('modelos');
    }
    //w0ZAowpyf7amivpD1T52RhYqLp73
    //
    VeiculoListService.prototype.getAll = function () {
        return this.db.list('UserProfile/' + this.userId + '/veiculos')
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload }, c.payload.val())); });
        }));
    };
    /*
    getAllPecas() {
  
      return this.db.list('modelos/cg125-2017/pecas/')
        .snapshotChanges()
        .pipe(
          map(changes =>
            changes.map(c => ({
              key: c.payload, ...c.payload.val()
            }))
          )
    );
    */
    VeiculoListService.prototype.getAllPecas = function () {
        return this.db.list('modelos/cg125-2017/pecas/').valueChanges();
    };
    VeiculoListService.prototype.getVeiculosList = function () {
        return this.db.list('veiculos').valueChanges();
        //return this.veiculosListRef.valueChanges();
    };
    VeiculoListService.prototype.getVeiculo = function (veiculo) {
        return this.db.object('UserProfile/' + this.userId + '/veiculos/' + veiculo.key).valueChanges();
        //return this.veiculosListRef.valueChanges();
    };
    VeiculoListService.prototype.getListMarcas = function () {
        return this.db.list('marcas').valueChanges();
    };
    VeiculoListService.prototype.getMarca = function () {
        return this.db.object('marcas').valueChanges();
    };
    VeiculoListService.prototype.getListModelos = function () {
        return this.db.list('modelos').valueChanges();
    };
    VeiculoListService.prototype.addVeiculo = function (veiculo) {
        //return this.veiculosListRef.push(veiculo);
        return this.db.list('UserProfile/' + this.userId + '/veiculos').push(veiculo);
    };
    VeiculoListService.prototype.atualizarKmVeiculo = function (km) {
        //return this.veiculosListRef.push(veiculo);
        return this.db.list('UserProfile/' + this.userId + '/veiculos/' + this.veiculo.key + this.veiculo.kmAtual).push(km);
    };
    /*
    updateVeiculo(veiculo: Veiculo) {
      return this.veiculosListRef.update(veiculo.key, veiculo);
    }
    */
    VeiculoListService.prototype.removerVeiculo = function (veiculo) {
        //return this.veiculosListRef.remove(veiculo.key);
        return this.db.list('/veiculos/').remove(veiculo.key);
    };
    VeiculoListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], VeiculoListService);
    return VeiculoListService;
}());

//# sourceMappingURL=servico-veiculos.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-veiculo-item/add-veiculo-item.module": [
		496,
		7
	],
	"../pages/historicorevisoes/historicorevisoes.module": [
		497,
		6
	],
	"../pages/home/home.module": [
		498,
		5
	],
	"../pages/login/login.module": [
		499,
		4
	],
	"../pages/recuperar-senha/recuperar-senha.module": [
		500,
		0
	],
	"../pages/revisar-km/revisar-km.module": [
		501,
		3
	],
	"../pages/revisoes/revisoes.module": [
		502,
		2
	],
	"../pages/signup/signup.module": [
		503,
		1
	],
	"../pages/veiculos/veiculos.module": [
		246
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeiculosPageModule", function() { return VeiculosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__veiculos__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VeiculosPageModule = /** @class */ (function () {
    function VeiculosPageModule() {
    }
    VeiculosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__veiculos__["a" /* VeiculosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__veiculos__["a" /* VeiculosPage */]),
            ],
        })
    ], VeiculosPageModule);
    return VeiculosPageModule;
}());

//# sourceMappingURL=veiculos.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(421);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_servico_veiculos_servico_veiculos__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_veiculos_veiculos_module__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ALTERAÇÃO 01 PASSO 6°
// Importações para funcionamento do Firebase e da Autenticação



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM DA ALTERAÇÃO 01




// Importação da página de login
// Configurações do FIREBASE




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-veiculo-item/add-veiculo-item.module#AddVeiculoItemPageModule', name: 'AddVeiculoItemPage', segment: 'add-veiculo-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historicorevisoes/historicorevisoes.module#HistoricorevisoesPageModule', name: 'HistoricorevisoesPage', segment: 'historicorevisoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule', name: 'RecuperarSenhaPage', segment: 'recuperar-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/revisar-km/revisar-km.module#RevisarKmPageModule', name: 'RevisarKmPage', segment: 'revisar-km', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/revisoes/revisoes.module#RevisoesPageModule', name: 'RevisoesPage', segment: 'revisoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/veiculos/veiculos.module#VeiculosPageModule', name: 'VeiculosPage', segment: 'veiculos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ALTERAÇÃO 03 PASSO 6°
                // Configurações do Firebase
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* config */]),
                // Configuração do serviço de autenticação do firebase
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
                // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM DA ALTERAÇÃO 03
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13__pages_veiculos_veiculos_module__["VeiculosPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_servico_veiculos_servico_veiculos__["a" /* VeiculoListService */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__["a" /* Toast */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VeiculosPage; });
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
 * Generated class for the VeiculosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VeiculosPage = /** @class */ (function () {
    function VeiculosPage(navCtrl, navParams, veiculoListService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.veiculoListService = veiculoListService;
        this.alertCtrl = alertCtrl;
        this.backgrounds = [
            'assets/img/background/background-1.jpg',
            'assets/img/background/background-2.jpg',
            'assets/img/background/background-3.jpg',
            'assets/img/background/background-4.jpg'
        ];
        this.veiculo = {
            marca: '',
            modelo: '',
            kmAtual: null
        };
        this.marcaList = this.veiculoListService.getListMarcas();
        this.modeloList = this.veiculoListService.getListModelos();
    }
    VeiculosPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Deseja cadastrar este veiculo? <br>' +
                this.veiculo.marca + ' ' +
                this.veiculo.modelo,
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
                        _this.addVeiculo(_this.veiculo);
                    }
                }
            ]
        });
        confirm.present();
    };
    VeiculosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VeiculosPage');
    };
    VeiculosPage.prototype.addVeiculo = function (veiculo) {
        var _this = this;
        this.veiculoListService.addVeiculo(veiculo).then(function (ref) {
            _this.navCtrl.setRoot('HomePage');
        });
    };
    VeiculosPage.prototype.backHomePage = function () {
        this.navCtrl.setRoot('HomePage');
    };
    VeiculosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-veiculos',template:/*ion-inline-start:"E:\CheckMotors-App\src\pages\veiculos\veiculos.html"*/'\n\n  \n\n  <ion-slides pager="false" autoplay="2000" loop="true" speed="1500" effect="fade">\n\n      <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n\n      </ion-slide>\n\n  </ion-slides>\n\n  \n\n  <ion-content>\n\n\n\n    <div class="form-cadastro">\n\n\n\n      <ion-item class="ion-item">\n\n        <ion-label color="light">Marca</ion-label>\n\n        <ion-select [(ngModel)]="veiculo.marca" color="light">\n\n          <ion-option *ngFor="let marca of marcaList|async">{{ marca.nome }}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item class="ion-item" >\n\n        <ion-label color="light">Modelo</ion-label>\n\n        <ion-select [(ngModel)]="veiculo.modelo">\n\n            <ion-option *ngFor="let modelo of modeloList|async">{{modelo.nome}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n      <ion-item class="ion-item">\n\n          <ion-input  [(ngModel)]="veiculo.kmAtual" type="number" placeholder="Quilometragem atual"></ion-input>\n\n      </ion-item>\n\n     \n\n      <!--{{veiculo | json}}-->\n\n      \n\n      <button ion-button block outline color="light" class="ion-button" (click)="showConfirm()">Cadastrar</button>\n\n      \n\n      <button ion-button block outline color="light" class="ion-button" (click)="backHomePage()">Voltar</button>\n\n\n\n\n\n    </div>\n\n\n\n  </ion-content>'/*ion-inline-end:"E:\CheckMotors-App\src\pages\veiculos\veiculos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servico_veiculos_servico_veiculos__["a" /* VeiculoListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], VeiculosPage);
    return VeiculosPage;
}());

//# sourceMappingURL=veiculos.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Importação do nosso serviço de autenticação


//rootPage:any = LoginPage;
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth, app, menuCtrl) {
        var _this = this;
        this.auth = auth;
        this.app = app;
        this.menuCtrl = menuCtrl;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.auth.firebaseAuth.authState
            .subscribe(function (user) {
            if (user) {
                _this.rootPage = 'HomePage';
            }
            else {
                _this.rootPage = 'LoginPage';
            }
        }, function () {
            _this.rootPage = 'LoginPage';
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\CheckMotors-App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\CheckMotors-App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    apiKey: "AIzaSyBRSoRgUB1C7ZmRAPcviuxy8x85UG7_mVA",
    authDomain: "checkmotors-app.firebaseapp.com",
    databaseURL: "https://checkmotors-app.firebaseio.com",
    projectId: "checkmotors-app",
    storageBucket: "checkmotors-app.appspot.com",
    messagingSenderId: "38217763814"
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// FIM
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(firebaseAuth) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        firebaseAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    //Login Google
    AuthProvider.prototype.signInWithGoogle = function () {
        this.firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider()).
            then(function (res) {
            console.log('From --Google--');
            console.log(res);
        });
    };
    //Método de cadastro
    AuthProvider.prototype.register = function (user) {
        return this.firebaseAuth.auth.
            createUserWithEmailAndPassword(user.email, user.password).then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]()
                .ref('/userProfile')
                .child(newUser.user.uid)
                .set(user.email);
        });
    };
    //Método de login
    AuthProvider.prototype.login = function (user) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    /*Método de logout
    logout() {
      return this.firebaseAuth.auth.signOut();
    }
    */
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().sendPasswordResetEmail(email);
    };
    Object.defineProperty(AuthProvider.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthProvider.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthProvider.prototype.getUid = function () {
        return this.user.uid;
    };
    AuthProvider.prototype.signOut = function () {
        return this.firebaseAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[289]);
//# sourceMappingURL=main.js.map