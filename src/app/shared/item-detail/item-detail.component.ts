import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailComponent implements OnInit {

  @Input() itemDetails: Item;
  
  constructor() { }

  ngOnInit(): void {
  }


}
