import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private newsApi:NewsApiService) { }
SportsNews:any=[];
  ngOnInit(): void {

    this.newsApi.getScience().subscribe(
      (data)=>{
        console.log(data);
        this.SportsNews= data.articles;
      }
    )

  }

}
