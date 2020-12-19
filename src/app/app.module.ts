import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseAPIService } from './firebase-api.service';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB8aW8xd8tJZXsWzPsoCTkvuY2W94NSy0Y",
      authDomain: "logindemo-d3cbe.firebaseapp.com",
      databaseURL: "https://logindemo-d3cbe.firebaseio.com",
      projectId: "logindemo-d3cbe",
      storageBucket: "logindemo-d3cbe.appspot.com",
      messagingSenderId: "658339947391",
      appId: "1:658339947391:web:1066615118dfd69063b04a",
      measurementId: "G-EMT3D7B78P"
    })
  ],
  providers: [FirebaseAPIService ,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
