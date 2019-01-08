import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  userUrl = 'https://randomuser.me/api/?results=25,format=json';
  constructor(private http: HttpClient) { }

  getUsers(): Promise<any[]> {
    return this.http.get<any[]>(`${this.userUrl}`)
    .toPromise()
    .then((resposta: any) =>{
      console.log("teste" + resposta)
      return resposta.json()
    })
  }
}
