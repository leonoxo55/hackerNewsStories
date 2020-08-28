import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CommentComponent } from './comment/comment.component';
import { HackerNewsService } from './services/hacker-news.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './shared/header/header.component';
import { ItemDetailComponent } from './shared/item-detail/item-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BasicCommentComponent } from './comment/basic-comment/basic-comment.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    PaginationComponent,
    NotFoundComponent,
    CommentComponent,
    HeaderComponent,
    ItemDetailComponent,
    BasicCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [HackerNewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
