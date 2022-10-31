import { Component } from '@angular/core';
// Nesse import adicionamos o AlertController que será usado para apresentar a mensagem do nosso aplicativo
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// Importação do nosso modelo de usuário
import { User } from '../../models/user';

// Importação do nosso serviço de autenticação
import { AuthProvider } from '../../providers/auth/auth';

// Importação da página que o usuário será redirecionado após o login

import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];

  public user = {} as User;

  signupForm : FormGroup;

  constructor(
              //Responsável por criar o formulário
              public formBuilder: FormBuilder,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public auth: AuthProvider,
              public alertCtrl: AlertController,
              ) {

              let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
 

              //Atribuindo o form group para o signup form
              this.signupForm = this.formBuilder.group({
                email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
                password: ['', [Validators.required, Validators.minLength(6)]],
                passwordTwo: ['', [Validators.required, Validators.minLength(6)]]
              });

  }

  

  onSubmit() : void {
    console.log(this.signupForm.value);
  }

  alert(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Fechar']
    });
    al.present();
  }

  async register(user: User) {
    if (user.password != user.passwordTwo) {
    this.alert("Erro ao cadastrar", "É necessário informar a mesma senha");
    } else {
      try {
        const result = await this.auth.register(user);
        this.navCtrl.setRoot('HomePage');
      
      } catch (error) {
        this.alert("Erro ao cadastrar", error.message);
      }
    
    }

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
