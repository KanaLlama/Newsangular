import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockageService } from '../stockage.service';

@Component({
  selector: 'app-one-new',
  templateUrl: './one-new.component.html',
  styleUrls: ['./one-new.component.scss']
})
export class OneNewComponent implements OnInit {
  newId: string;
  article: any;

  constructor(private route: ActivatedRoute, private stockageService: StockageService) {
    this.newId = this.route.snapshot.params['id'];
    this.article = this.stockageService.getNewsbyid(this.newId);

  }

  ngOnInit() {

  }

}
