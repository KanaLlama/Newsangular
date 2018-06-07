import { Component, OnInit } from '@angular/core';
import { StockageService } from '../stockage.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles: any;
  constructor(private stockageService: StockageService) {
    this.articles = this.stockageService.getNews();
  }

  ngOnInit() {
  }

}
