import { Component, OnInit } from '@angular/core';
import { StockageService } from '../stockage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: any;

  constructor(private stockageService: StockageService) {
    this.articles = this.stockageService.getNews();
  }

  ngOnInit() {
  }

}
