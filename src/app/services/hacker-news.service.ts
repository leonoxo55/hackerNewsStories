import { Injectable } from '@angular/core';
import { Item } from '../shared/models/item';
import { Observable, from } from 'rxjs';
import { mergeMap , map } from 'rxjs/Operators';
import { HttpClient } from '@angular/common/http';

export const API = 'https://hacker-news.firebaseio.com/v0';

@Injectable()
export class HackerNewsService {
  constructor(private http: HttpClient) {}
  storiesId: number[] = [];
  storie: Item;

  getItem(id: number): Promise<Item>{
    return this.http.get<Item>(`${API}/item/${id}.json?`).toPromise();
  }

  getItemsList(ids: number[]): any {
     return from(ids).pipe(
      mergeMap (id => <Observable<Item>> this.http.get(`${API}/item/${id}.json?`))
    );
  }

  getStories(): Promise<number[]> {
    return this.http.get<number[]>(`${API}/beststories.json?`).toPromise();
  }
}
