import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-top-headings',
  templateUrl: './top-headings.component.html',
  styleUrls: ['./top-headings.component.css']
})
export class TopHeadingsComponent implements OnInit {

  constructor(private newsService:NewsApiService) { }

  TopHeading:any=[];

  ngOnInit(): void {
    this.topHeading();
  }

  topHeading(){
      this.newsService.getTopHeading().subscribe( 
        (data)=>{
          console.log(data);
        this.TopHeading=data.articles;
        }
        
      )
  }


}
