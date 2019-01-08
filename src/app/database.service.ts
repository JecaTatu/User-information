import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  userUrl = 'https://randomuser.me/api/?results=25';
  constructor(private http: HttpClient) { }

  getUsers(){
    console.log(this.http.get(`${this.userUrl}`));
    return this.http.get(`${this.userUrl}`)
  }
}
