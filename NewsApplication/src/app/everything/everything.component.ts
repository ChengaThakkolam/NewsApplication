import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.css']
})
export class EverythingComponent implements OnInit {

  constructor(private newsService:NewsApiService) { }

  EverythingNews:any=[];
  ngOnInit(): void {

    this.getEverythingNews();
  }

  getEverythingNews(){
    this.newsService.getEverything().subscribe(
      (data)=>{
        console.log(data);
        this.EverythingNews= data.articles;
      }
    )
  }
}
