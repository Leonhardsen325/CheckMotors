import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Veiculo } from '../../models/Veiculo.model';
import { VeiculoListService } from '../../providers/servico-veiculos/servico-veiculos';


import { Marca } from '../../models/marca.model';
import { Observable } from 'rxjs';
import { Modelo } from '../../models/modelo.model';


/**
 * Generated class for the VeiculosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-veiculos',
  templateUrl: 'veiculos.html',
})
export class VeiculosPage {

  

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];



  veiculo: Veiculo = {  
    marca: '',
    modelo: '',
    kmAtual: null
  }

  marcaList: Observable<Marca[]>;
  modeloList: Observable<Modelo[]>;
  

  marca : Observable<Marca>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private veiculoListService: VeiculoListService,
              public alertCtrl: AlertController) {

              this.marcaList = this.veiculoListService.getListMarcas();
              this.modeloList = this.veiculoListService.getListModelos();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Deseja cadastrar este veiculo? <br>' +
    
        this.veiculo.marca + ' ' +
        this.veiculo.modelo,

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
            this.addVeiculo(this.veiculo);
          }
        }
      ]
    });
    confirm.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VeiculosPage');
  }

  addVeiculo(veiculo: Veiculo) {
      this.veiculoListService.addVeiculo(veiculo).then(ref => {
      this.navCtrl.setRoot('HomePage');
      
    })
  }


  backHomePage() {
    this.navCtrl.setRoot('HomePage');
  }
}
