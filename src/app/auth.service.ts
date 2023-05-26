import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url: string = 'http://localhost:8081/api/cricket/user';
  // url1 : string = 'http://localhost:8080/api/kabaddi';
  // url2 : string = 'http://localhost:8082/api/cricket'; 
  url: string = 'https://localhost:7105/api/Crickets';
  url1 : string = 'https://localhost:7105/api/Kabaddis';
  url2 : string = 'https://localhost:7105/api/Leagues';  
  // https://localhost:7105/api/Leagues
  // https://localhost:7105/api/Kabaddis


  constructor(private httpclient: HttpClient) {}

  getScoreDetails() {
    return this.httpclient.get(this.url);
  }

  getScoreDetails2() {
    return this.httpclient.get(this.url1);
  }
  getScoreDetails3() {
    return this.httpclient.get(this.url2);
  }
}
