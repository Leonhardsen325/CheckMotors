import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Importação do nosso serviço de autenticação
import { AuthProvider } from '../providers/auth/auth';

// Importação da página de login


import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';



//rootPage:any = LoginPage;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any;

  constructor(platform: Platform, 
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private auth: AuthProvider,
              public app: App,
              public menuCtrl: MenuController
              ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });

    this.auth.firebaseAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = 'HomePage';
          } else {
            this.rootPage = 'LoginPage';
          }
        },
        () => {
          this.rootPage = 'LoginPage';
        }
      );
  }
}
