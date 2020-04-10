import { Component, OnInit } from '@angular/core';
import { FakeNewsBaseService } from 'src/app/shared/services/fake-news-base.service';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/shared/models/news.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  constructor(private db: FakeNewsBaseService, private route: ActivatedRoute) {}

  selectedArticle: News = null;

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.selectedArticle = this.db.getArticleByTitle(
        this.route.snapshot.params.title
      );
    });
  }
}
