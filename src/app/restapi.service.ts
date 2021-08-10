import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {



  constructor( private http:HttpClient ) { }

  public login( username:string, password:string ){

    const headers = new HttpHeaders({Authorization: 'Basic '+ btoa( username +":"+ password )})
    return this.http.get("http://localhost:8080/", { headers, responseType: 'text' as 'json' });
  }

  public listAll( ){
    const username = 'admin';
    const password = '555666'

    const headers = new HttpHeaders({Authorization: 'Basic '+ btoa( username +":"+ password )})
    return this.http.get("http://localhost:8080/listAll", {headers, responseType: 'text' as 'json'});
  }


}
