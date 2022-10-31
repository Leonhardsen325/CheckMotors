import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, List, AlertController} from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { Observable } from 'rxjs';
import { Veiculo } from '../../models/veiculo.model';
import { VeiculoListService } from '../../providers/servico-veiculos/servico-veiculos';
import { Peca } from '../../models/peca.model';
import { HistoricorevisoesPage } from '../historicorevisoes/historicorevisoes';


/**
 * Generated class for the RevisoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revisoes',
  templateUrl: 'revisoes.html',
})
export class RevisoesPage {

  peca: Peca = {
    item: '',
    operacao: '',
    trocar: true
  }

  items:string[];

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];

  ref: Observable<any>;
  id: string;
  veiculo: Veiculo;

  km:number;

  listaPecasRevisaoRegular: any;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              public veiculoListService: VeiculoListService,
              public alertCtrl: AlertController

              ) {
              

              const checkboxModel: Array < { trocar: boolean, item: string } > = [
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

  verificarEstado(km: number) {
    km = this.km;
    console.log("Entrou na função " + km);
    if(km >=  1000 && km < 3000) {
      console.log("Quilometragem informada " + km);
      console.log("É necessário passar pela primeira revisão!");

      let listaPecasRevisaoRegular1000km = this.listaPecasRevisaoRegular
      // console.log(JSON.stringify(lis));
      return listaPecasRevisaoRegular1000km.forEach(function(element){
        element.forEach(item => {
          console.log("Essas Peças pode está avarriada!" + item['Item']);
        })
      })
    } else if(km >= 3000 && km < 6000) {
      console.log("Quilometragem informado " + km);
      console.log("É necessário passar pela segunda revisão!");
       let listaPecasRevisaoRegular = this.veiculoListService.getAllPecas();
      // console.log(JSON.stringify(lis));
      listaPecasRevisaoRegular.forEach(function(element){
        element.forEach(item => {
          console.log("Essas Peças pode está avarriada!" + item['Item']);
        })
      })

      
      
    } else if(km >= 6000  && km < 9000) {
      console.log("Quilometragem informado " + km);
      console.log("É necessário passar pela terceira revisão!");
      let listaPecasRevisaoRegular = this.veiculoListService.getAllPecas();
      // console.log(JSON.stringify(lis));
      listaPecasRevisaoRegular.forEach(function(element){
        element.forEach(item => {
          console.log("Essas Peças pode está avarriada!" + item['Item']);
        })
      })
    } else if(km >= 9000 && km < 12000){
      console.log("É necessário passar pela revisão regular!");
    } else if(km >= 12000 && km < 15000){
      console.log("É necessário passar pela revisão regular!");
    }else if(km >= 15000 && km <= 18000){
      console.log("É necessário passar pela revisão regular!");
    } else {
      console.log("No momento o checkmotors está em desenvolvimento e só trabalha com motocicletas que rodaram até 18000km ")
    }
  }


  ionViewDidLoad() {
    const data = this.navParams.get('data');
    console.log(data)
  }

  getPageHistoricoRevisoes() {
    this.navCtrl.push('HistoricorevisoesPage');
  }


  confirmarOperacao() {
    const confirm = this.alertCtrl.create({
      title: 'Deseja confirmar revisão nas peças que foram selecionadas ? <br>',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.getPageHistoricoRevisoes();
          }
        }
      ]
    });
    confirm.present();
  }

}
