import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List, ModalController, ViewController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { VeiculoListService } from '../../providers/servico-veiculos/servico-veiculos';
import { Peca } from '../../models/peca.model';
import { AuthProvider } from '../../providers/auth/auth';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Type } from '@angular/compiler/src/output/output_ast';
import { RevisoesPage } from '../revisoes/revisoes';





/**
 * Generated class for the RevisarKmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revisar-km',
  templateUrl: 'revisar-km.html',
})
export class RevisarKmPage {

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];



  



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public veiculoListService: VeiculoListService,
    public auth: AngularFireAuth,
    public modalCtrl: ModalController
    ) {
      var revisao = "Revisao1",
      peca = "Troca de óleo"

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

  
  
  getPaginaRevisao(km: number) {
    console.log(" Pag-km " + km);
    this.navCtrl.push('RevisoesPage', {km: km});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RevisarKmPage');
  }

}
