import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  usuarios: object;

  constructor(private dataService: DatabaseService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.usuarios = params.id)
  }

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      data => this.usuarios = data.valueOf['results']
    )
  }

}
