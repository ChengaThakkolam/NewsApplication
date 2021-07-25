import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private newsApi:NewsApiService) { }

  ScienceNews:any=[];
  ngOnInit(): void {

    this.newsApi.getScience().subscribe(
      (data)=>{
        console.log(data);
        this.ScienceNews= data.articles;
      }
    )
  }

}
