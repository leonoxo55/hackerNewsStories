import {
  Component,
  OnInit,
} from '@angular/core';
import { HackerNewsService } from '../services/hacker-news.service';
import {Item} from '../shared/models/item';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  
  constructor(private newsService: HackerNewsService) {}

  pagedStoriesIds = [];
  currentPage = 1;
  maxPages: number;
  storiesDetails: Item[];

  async ngOnInit() {

    await this.newsService.getStories().then(data => this.newsService.storiesId = data);
    const storiesForPage = 50;
    for (var i = 0;i < this.newsService.storiesId.length;i += storiesForPage) {
      this.pagedStoriesIds.push(this.newsService.storiesId.slice(i,i+storiesForPage));
    }
    this.maxPages = this.pagedStoriesIds.length;
    this.getStoriescontent();
  }

  getStoriescontent(){
    this.storiesDetails = [];
    this.newsService.getItemsList(this.pagedStoriesIds[this.currentPage -1]).subscribe(response => {
      this.storiesDetails.push(response);
    },error => {
      console.error(error);
    })
  }

  goToPage(page: number){
    this.currentPage = page;  
    this.getStoriescontent();
  }
}
