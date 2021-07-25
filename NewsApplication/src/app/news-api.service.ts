import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { }

  private baseUrl="http://localhost:9090/news/";
  private topHeading="topheadings";

  private everything="everything"
  private business="business";
  private science="science";
  private sports="sports";


  getTopHeading():Observable<any>{

    return this.http.get(this.baseUrl+this.topHeading);
  }

  getEverything():Observable<any>{
    return this.http.get(this.baseUrl+this.everything);
  }

  getBusiness():Observable<any>{
    return this.http.get(this.baseUrl+this.business);
  }

  getScience():Observable<any>{
    return this.http.get(this.baseUrl+this.science);
  }

  getSports():Observable<any>{
    return this.http.get(this.baseUrl+this.sports);
  }

}
