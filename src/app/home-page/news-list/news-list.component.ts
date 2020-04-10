import { Component, OnInit } from '@angular/core';
import { FakeNewsBaseService } from 'src/app/shared/services/fake-news-base.service';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  news: News[] = [];

  constructor(private db: FakeNewsBaseService) {}

  ngOnInit(): void {
    this.news = this.db.getNews();
  }
}
