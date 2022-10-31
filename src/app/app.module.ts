import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ALTERAÇÃO 01 PASSO 6°
// Importações para funcionamento do Firebase e da Autenticação
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM DA ALTERAÇÃO 01

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { VeiculoListService } from '../providers/servico-veiculos/servico-veiculos';

// Importação da página de login


// Configurações do FIREBASE
import { config } from '../config';

import { GooglePlus } from '@ionic-native/google-plus';


import { VeiculosPageModule } from '../pages/veiculos/veiculos.module';
import { Toast } from '@ionic-native/toast';




@NgModule({
  declarations: [
    MyApp,
    
   
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ALTERAÇÃO 03 PASSO 6°
    // Configurações do Firebase
    AngularFireModule.initializeApp(config),
    // Configuração do serviço de autenticação do firebase
    AngularFireAuthModule,
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FIM DA ALTERAÇÃO 03
    AngularFireDatabaseModule,
    VeiculosPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,   
   
    
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    VeiculoListService,
    GooglePlus,
    Toast,
    
  ]
})
export class AppModule {}
