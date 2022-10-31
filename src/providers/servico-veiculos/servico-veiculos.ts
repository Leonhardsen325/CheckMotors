
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Veiculo } from '../../models/veiculo.model';
import { Marca } from '../../models/marca.model';
import { Modelo } from '../../models/modelo.model';
import { map } from 'rxjs/operators';
import { AuthProvider } from '../auth/auth';
import { Peca } from '../../models/peca.model';


@Injectable()
export class VeiculoListService {

  
  
  private marcasListRef; 
  private modelosListRef;
  private pecasListRef;
  
  //Atributo usuário que será usado para cadastro e autenticação.
  private user: firebase.User;
  public userId: string;
  public veiculo: Veiculo

  private authenticated: boolean;
  
  constructor(public db: AngularFireDatabase,
              public authProvider: AuthProvider,
              private afAuth: AngularFireAuth) {
              
              this.afAuth.authState.subscribe(user => {
                if(user) this.userId = user.uid 
              });

    this.marcasListRef = this.db.list<Marca>('marcas');
    this.modelosListRef = this.db.list<Modelo>('modelos');
  
  }

  //w0ZAowpyf7amivpD1T52RhYqLp73
  //
  getAll() {

    
      return this.db.list('UserProfile/' + this.userId  + '/veiculos')
      .snapshotChanges()
      .pipe(
        map(changes => 
          changes.map(c => ({
            key: c.payload, ...c.payload.val()
          }))
        )
      );
    
    
  }

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

  getAllPecas() {

    return this.db.list<String>('modelos/cg125-2017/pecas/').valueChanges();
      
  }

  

  getVeiculosList() {
    return this.db.list<Veiculo>('veiculos').valueChanges();
    //return this.veiculosListRef.valueChanges();
  }

  getVeiculo(veiculo: Veiculo) {
    return this.db.object<Veiculo>('UserProfile/' + this.userId + '/veiculos/' + veiculo.key).valueChanges();
    //return this.veiculosListRef.valueChanges();
  }

  getListMarcas() {
    return this.db.list<Marca>('marcas').valueChanges();
  }

  getMarca() {
    return this.db.object('marcas').valueChanges();
  }



  getListModelos() {
    return this.db.list<Modelo>('modelos').valueChanges();
  }

  addVeiculo(veiculo: Veiculo) {  
    //return this.veiculosListRef.push(veiculo);
    return this.db.list('UserProfile/' + this.userId + '/veiculos').push(veiculo);
    
  }

  atualizarKmVeiculo(km: number) {  
    //return this.veiculosListRef.push(veiculo);
    return this.db.list('UserProfile/' + this.userId + '/veiculos/' + this.veiculo.key + this.veiculo.kmAtual).push(km);
    
  }

  /*
  updateVeiculo(veiculo: Veiculo) {
    return this.veiculosListRef.update(veiculo.key, veiculo);
  }
  */

  
  removerVeiculo(veiculo: Veiculo) {
    //return this.veiculosListRef.remove(veiculo.key);
    return this.db.list('/veiculos/').remove(veiculo.key);
  }
  
  
 

}
