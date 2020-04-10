import { Injectable } from '@angular/core';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root',
})
export class FakeNewsBaseService {
  constructor() {}

  randomText =
    'This is a randomly generator text used for these news articles.' +
    'This is a randomly generator text used for these news articles.' +
    'This is a randomly generator text used for these news articles.' +
    'This is a randomly generator text used for these news articles.' +
    'This is a randomly generator text used for these news articles.' +
    'This is a randomly generator text used for these news articles.' +
    'This is a randomly generator text used for these news articles.' +
    'This is a randomly generator text used for these news articles.' +
    'This is a randomly generator text used for these news articles.' +
    'This is a randomly generator text used for these news articles.';

  private news: News[] = [
    new News(
      'Customize your profile!',
      this.randomText,
      'https://lh3.googleusercontent.com/VM2qIagO8IfqYqCCqUIpuSU1Tb2W2XO6DjbdqvoYheXAopoV0t2dbDQHtUYTvkfnMbU-I7Nsc_d3JSzbJLEB9miRkiX74jGp'
    ),
    new News(
      'Browse our amazing game library!',
      this.randomText,
      'https://images.tech.co/wp-content/uploads/2019/12/19112253/future-gaming-708x400.jpg'
    ),
    new News(
      'Brand new site is up and running!',
      this.randomText,
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    ),
  ];

  getNews() {
    return this.news;
  }

  getArticleByTitle(name: string) {
    const newName = name.replace('%20', ' ');
    for (const article of this.news) {
      if (article.title === newName) {
        return article;
      }
    }

    return null;
  }
}
