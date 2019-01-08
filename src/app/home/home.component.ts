import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: object;

  constructor(private dataService: DatabaseService) { }

    ngOnInit() {
      return this.dataService.getUsers().subscribe(
        data => {
          this.usuarios = data.valueOf()['results']
        }
          
      )
    }

  // list(){
  //   this.dataService.getUsers().then((usuarios: any[]) => {
  //     this.usuarios = usuarios
    
  //   })
  }

