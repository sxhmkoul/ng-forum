import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { FeedWrapperComponent } from './components/feed-wrapper/feed-wrapper.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { MyQuestionsComponent } from './components/my-questions/my-questions.component';
import { LikedFeedComponent } from './components/liked-feed/liked-feed.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BodyWrapperComponent } from './components/body-wrapper/body-wrapper.component';
import { TagsComponent } from './components/tags/tags.component';
import { LoginSignupWrapperComponent } from './components/login-signup-wrapper/login-signup-wrapper.component';
import { MyFeedComponent } from './components/my-feed/my-feed.component';
import { FeedDetailComponent } from './components/feed-detail/feed-detail.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/feed', pathMatch: 'full'},
  {path: 'feed', component: BodyWrapperComponent, canActivate: [AuthGuard], children: [
    {path: '', component: MyFeedComponent},
    {path: 'all', component: MyFeedComponent},
    {path: 'blogs', component: BlogsComponent},
    {path: 'detail/:id', component: FeedDetailComponent},
    {path: 'tags', component: TagsComponent},
    {path: '**',  redirectTo: '/feed', pathMatch: 'full'},
  ]},
  {path: 'my-posts', component: BodyWrapperComponent, pathMatch: 'full', canActivate: [AuthGuard], children: [
    {path: '', component: MyQuestionsComponent},
    {path: 'blogs', component: BlogsComponent},
    {path: '**',  redirectTo: '/my-posts', pathMatch: 'full'},
  ]},
  {path: 'liked', component: BodyWrapperComponent, children: [
    {path: '', component: LikedFeedComponent},
    {path: 'blogs', component: BlogsComponent},
    {path: '**',  redirectTo: '/liked', pathMatch: 'full'},
  ]},
  {path: 'login', component: LoginSignupWrapperComponent},
  {path: 'signup', component: LoginSignupWrapperComponent, children: [
    // {path: ':section', component: LoginSignupWrapperComponent}
  ]},
  {path: '**', component: FourOhFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
