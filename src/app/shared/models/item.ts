import { FeedType } from './feedType';

export interface Item {
  id: number;
  deleted?: boolean;
  type?: FeedType;
  by?: string;
  time?: number;
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: number[];
  descendants?: number;
  comments?: Item[];
}
