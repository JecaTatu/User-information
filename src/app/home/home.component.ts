import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios=[];

  constructor(private dataService: DatabaseService) { }

  ngOnInit() {
   this.list();
  }

  list(){
    this.dataService.getUsers().then((usuarios: any[]) => {
      this.usuarios = usuarios
    
    })
  }
}
