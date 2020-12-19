import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseAPIService } from '../firebase-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() isLogOut = new EventEmitter<void>()

  constructor(private fireBaseAPI : FirebaseAPIService) { }
  logOut()
  {
    this.fireBaseAPI.logout();
    this.isLogOut.emit();
  }
  ngOnInit() {
  }

}
