import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FeedWrapperComponent } from './components/feed-wrapper/feed-wrapper.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';
import { LikedFeedComponent } from './components/liked-feed/liked-feed.component';

const routes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'my-posts', component: MyQuestionsComponent},
  {path: 'liked', component: LikedFeedComponent},
  {path: '**', component: FourOhFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
