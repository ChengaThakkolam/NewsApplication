import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private newsService:NewsApiService) { }

  BusinessNews:any=[];
  ngOnInit(): void {
    this.businessNews();
  }

  businessNews(){
    this.newsService.getBusiness().subscribe(
      (data)=>{
        console.log(data);
        this.BusinessNews=data.articles;
      }
    )
  }

}
