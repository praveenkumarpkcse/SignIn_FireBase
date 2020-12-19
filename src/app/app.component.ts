import { Component ,OnInit } from '@angular/core';
import { FirebaseAPIService } from './firebase-api.service';
import { FormGroup , FormControl ,FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'AngularFireBase';
  inputFormData : FormGroup;
  submitted  = false;
  isSignedIn = false;
  constructor( private fb:FormBuilder , private fireBaseAPI : FirebaseAPIService , private router:Router){}
  
  ngOnInit()
  {
    this.inputFormData = this.fb.group({
      username :['',[Validators.required]],
      password :['',[Validators.required]]
    });

    if(localStorage.getItem('user')!==null)
      this.isSignedIn = true;
    else
      this.isSignedIn =false;
  }

  async SignInData()
  {
    this.submitted = true;
    if(this.inputFormData.invalid){ return false; }
    await this.fireBaseAPI.sigin(this.inputFormData.value['username'],this.inputFormData.value['password'])
    if(this.fireBaseAPI.isLoggedIn)
      this.isSignedIn = true;
    if(this.fireBaseAPI.errorMessage)
    {
      swal("Oops...!",this.fireBaseAPI.errorMessage,"error");
      this.fireBaseAPI.errorMessage = '';
    }
  }

  async SignUpData()
  {
    this.submitted = true;
    if(this.inputFormData.invalid){ return false; }

    await this.fireBaseAPI.sigup(this.inputFormData.value['username'],this.inputFormData.value['password'])
    if(this.fireBaseAPI.isLoggedIn)
      this.isSignedIn = true;
      if(this.fireBaseAPI.errorMessage)
      {
        swal("Oops...!",this.fireBaseAPI.errorMessage,"error");
        this.fireBaseAPI.errorMessage = '';
      }
  }

  handleLogOut()
  {
    this.isSignedIn = false;
  }


  get f(){ return this.inputFormData.controls; }
}
