import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ÍNICIO
// Imports que deverão ser adicionados
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../../models/user';
import { AngularFireDatabase } from 'angularfire2/database';

// FIM


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  //Atributo usuário que será usado para cadastro e autenticação.
  private user: firebase.User;

  

  constructor(public firebaseAuth: AngularFireAuth,
              ) {
      firebaseAuth.authState.subscribe(user => {
        this.user= user;
      });
  }

  

  //Login Google
  
signInWithGoogle() {
    this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).
    then( res=> {
      console.log('From --Google--');
      console.log(res);
    })
}




  //Método de cadastro
  register(user: User): Promise<any>  {
    return this.firebaseAuth.auth.
            createUserWithEmailAndPassword(user.email, user.password).then( newUser => {
              firebase
              .database()
              .ref('/userProfile')
              .child(newUser.user.uid)
              .set(user.email);
            });
  }


  //Método de login
  login(user: User) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  /*Método de logout
  logout() {
    return this.firebaseAuth.auth.signOut();
  }
  */

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  getEmail() {
    return this.user && this.user.email;
  }

  getUid() {
    return this.user.uid;
  }

  signOut(): Promise<void> {
    return this.firebaseAuth.auth.signOut();
  }


}
