import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, ActionSheetController, App } from 'ionic-angular';
import { VeiculoListService } from '../../providers/servico-veiculos/servico-veiculos';
import { Observable } from 'rxjs';
import { Modelo } from '../../models/modelo.model';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Veiculo } from '../../models/veiculo.model';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',



})
export class HomePage {

  backgrounds = [
    'assets/img/background/background-1.jpg',
    'assets/img/background/background-2.jpg',
    'assets/img/background/background-3.jpg',
    'assets/img/background/background-4.jpg'
  ];

  ref: Observable<any>;
  id: string;
  veiculo: Veiculo;

  veiculosList: Observable<any[]>;

  lista = [
    {
      usuario : {  
        key: '',
        email: '',
        veiculo:[
          { 
            key: '',
            marca: '',
            modelo: '',
            kmAtual: 0
          }
        ]
      }
    }
  ]

  modelosList: Observable<Modelo[]>;

  
  constructor(public navCtrl: NavController,
              public veiculoListService: VeiculoListService,
              private auth: AuthProvider,
              public alertCtrl: AlertController,
              public db: AngularFireDatabase,
              public actionSheetCtrl: ActionSheetController,
              public app: App)
  {

    console.log(auth.authenticated);
    this.modelosList = this.veiculoListService.getListModelos();
    this.veiculosList = this.veiculoListService.getAll();
  }

  presentActionSheet(veiculo: Veiculo) {
    const actionSheet = this.actionSheetCtrl.create({

      buttons: [
        {
          text: 'Verificar por Quilometragem',
          role: 'Revisar por km',
          handler: () => {
            this.navCtrl.push('RevisarKmPage');
          }
        },{
          text: 'Revisões',
          handler: () => {
            this.navCtrl.push('RevisoesPage');
          }
        },
        {
          text: 'Excluir',
          role: 'destructive',
          handler: () => {
            this.veiculoListService.removerVeiculo(veiculo);
          }
        },
        {
          text: 'Cancelar',
          role: 'Cancelar',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }

  pageVeiculo() {
    this.navCtrl.push('VeiculosPage');
  }

  logout() {
    this.auth.signOut();
    this.app.getRootNav().setRoot('LoginPage');
  }
}
