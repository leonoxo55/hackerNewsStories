import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HackerNewsService } from '../services/hacker-news.service';
import { Item } from '../shared/models/item';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  
})
export class CommentComponent implements OnInit {

  actualStorie: Item;
  comments: Item[];
  subcomments: Item[];

  constructor(private route: ActivatedRoute,
              private hackerNewService: HackerNewsService) { }

  async ngOnInit() {
    this.comments = [];
    const {id} = this.route.snapshot.params;
    await this.hackerNewService.getItem(id).then(data => this.actualStorie = data);
    
    this.hackerNewService.getItemsList(this.actualStorie.kids).subscribe(response => {
      this.comments.push(response);
    },error => {
      console.error(error);
    });
  }

  getsubComments(item: Item){
    this.subcomments = [];
    this.comments.find(c => c.id===item.id).comments = [];
    
    this.hackerNewService.getItemsList(item.kids).subscribe(response => {
      this.comments.find(c => c.id===item.id).comments.push(response);
    },error => {
      console.error(error);
    })
  }

}
