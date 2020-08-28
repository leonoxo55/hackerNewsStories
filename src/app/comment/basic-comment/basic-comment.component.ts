import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/shared/models/item';

@Component({
  selector: 'app-basic-comment',
  templateUrl: './basic-comment.component.html',
  styleUrls: ['./basic-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicCommentComponent implements OnInit {

  constructor() { }

  @Input() comment: Item;
  @Output() getSubcomments: EventEmitter<Item> = new EventEmitter<Item>();
  ngOnInit(): void {
  }

  toHTML(input){
    //Function to parse text with html code 
    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
  }

  searchSubComment(){
    this.getSubcomments.next(this.comment);
  }

}
