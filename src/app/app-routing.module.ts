import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { StoriesComponent } from './stories/stories.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  //Main page
  { path: 'top', component: StoriesComponent },
  { path: '', redirectTo: 'top', pathMatch: 'full' },

  //Detail page
  { path: 'item/:id', component: CommentComponent },

  // Not found
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
