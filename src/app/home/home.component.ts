import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios = [
    {name: 'josé', email: 'jose.com', telefone: '8822'},
    {name: 'josé', email: 'jose.com', telefone: '8822'},
    {name: 'josé', email: 'jose.com', telefone: '8822'},
    {name: 'josé', email: 'jose.com', telefone: '8822'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
