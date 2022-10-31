import { Component } from '@angular/core';

// Nesse import adicionamos o AlertController que será usado para apresentar a mensagem do nosso aplicativo
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';

// Importação do nosso modelo de usuário
import { User } from '../../models/user';

// Importação do nosso serviço de autenticação
import { AuthProvider } from '../../providers/auth/auth';
import { convertUrlToSegments } from 'ionic-angular/umd/navigation/url-serializer';





@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];

  public user = {} as User;

  google  = {
    loggedin: false,
    name: '',
    profilePicture: '',
    email: ''
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthProvider,
              private alertCtrl: AlertController,
              public app: App) {

              console.log(auth.authenticated);
  }

  
      

  //Método para exibir as nossas mensagens de erro.
  alert(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Fechar']
    });
    al.present();
  }
  
  loginWithGoogle() {
    
  }

  // Método usado para login do usuário
  //Receber como parametro um tipo user e tentar fazer login.
  async login(user: User) {

    //Valida se foi informado email e password
    if (user.email == null || user.password == null) {
      this.alert('Erro', 'É necessário informar o email e senha');
    } else {
      try {
          
        //Chamar o método para fazer login
        const result = await this.auth.login(user);
        if (result) {
          //Se ocorrer tudo bem redirecionado para página Home
          this.app.getRootNav().setRoot('HomePage');
        }
      } catch (e) {
        this.alert('Erro ao logar', e.message);
      }
    }
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  recuperarSenha() {
    this.navCtrl.push('RecuperarSenhaPage');
  }

  

  ionViewDidLoad() {
    // Toda vez que um usuário acessar a página de login ele será deslogado
    //
  }

}
