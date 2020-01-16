import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  user:any;
  ngOnInit() {
    
  }

  CheckUser(){
    this.user = JSON.parse(sessionStorage.getItem("user"));
    return this.user.role=='ADMIN'
  }

}
