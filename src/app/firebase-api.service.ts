import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAPIService {

  URL: any;
  isLoggedIn = false;
  errorMessage = '';
  constructor(private firebaseAuth : AngularFireAuth) { }

  async sigin(email:string,password:string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user))
    }).catch(error => {this.errorMessage = error.message})
  }

  async sigup(email:string,password:string)
  {
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user))
    }).catch(error => {this.errorMessage = error.message})
  }

  logout()
  {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
