import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { MatDialogModule } from '@angular/material/dialog'; // material

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatGptComponent } from './components/chat-gpt/chat-gpt.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedWrapperComponent } from './components/feed-wrapper/feed-wrapper.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoWrapperComponent } from './components/todo-wrapper/todo-wrapper.component';
import { MenuWrapperComponent } from './components/menu-wrapper/menu-wrapper.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { BodyWrapperComponent } from './components/body-wrapper/body-wrapper.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { MyQuestionsComponent } from './components/my-questions/my-questions.component';
import { ButtonComponent } from './components/button/button.component';
import { LikedFeedComponent } from './components/liked-feed/liked-feed.component';
// import { LogSignWrapperComponent } from './components/log-sign-wrapper/log-sign-wrapper.component';
import { LoginSignupWrapperComponent } from './components/login-signup-wrapper/login-signup-wrapper.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TagsComponent } from './components/tags/tags.component';
import { AnimatedBackgroundWrapperComponent } from './components/animated-background-wrapper/animated-background-wrapper.component';
import { InputComponent } from './components/input/input.component';
import { MyFeedComponent } from './components/my-feed/my-feed.component';
import { ChildModalComponent } from './components/modals/child-modal/child-modal.component';
import { FeedDetailComponent } from './components/feed-detail/feed-detail.component';
import { SearchPostComponent } from './components/search-post/search-post.component';
import { SearchPostDirective } from './directives/search-post.directive';
import { NavSwitchComponent } from './components/nav-switch/nav-switch.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CommentWrapperComponent } from './components/comment-wrapper/comment-wrapper.component';
import { AnswerWrapperComponent } from './components/answer-wrapper/answer-wrapper.component';
import { HrSubtitleComponent } from './components/hr-subtitle/hr-subtitle.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentComponent } from './components/comment/comment.component';
import { AnimatorComponent } from './components/animator/animator.component';
import { PostdateformatterPipe } from './pipes/postdateformatter.pipe';
import { HamburgerComponent } from './components/shared-components/hamburger/hamburger.component';
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';
import { StatsComponent } from './components/stats/stats.component';
import { CardComponent } from './components/card/card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { InsightsComponent } from './components/insights/insights.component';
import { AboutComponent } from './components/about/about.component';
import { PiechartComponent } from './piechart/piechart.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { HistographComponent } from './histograph/histograph.component';
import { BargraphComponent } from './components/bargraph/bargraph.component';
import { BargraphHorComponent } from './components/bargraph-hor/bargraph-hor.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StagingComponent } from './components/staging/staging.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { SocialComponent } from './components/social/social.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    ChatGptComponent,
    NewPostComponent,
    NavbarComponent,
    FeedComponent,
    FeedWrapperComponent,
    TodoListComponent,
    TodoWrapperComponent,
    MenuWrapperComponent,
    MenuVerticalComponent,
    BodyWrapperComponent,
    FeedCardComponent,
    FourOhFourComponent,
    MyQuestionsComponent,
    ButtonComponent,
    LikedFeedComponent,
    // LogSignWrapperComponent,
    LoginSignupWrapperComponent,
    LoginComponent,
    SignupComponent,
    TagsComponent,
    AnimatedBackgroundWrapperComponent,
    InputComponent,
    MyFeedComponent,
    ChildModalComponent,
    FeedDetailComponent,
    SearchPostComponent,
    SearchPostDirective,
    NavSwitchComponent,
    BlogsComponent,
    CommentWrapperComponent,
    AnswerWrapperComponent,
    HrSubtitleComponent,
    LoaderComponent,
    LoginSignupComponent,
    CommentComponent,
    AnimatorComponent,
    PostdateformatterPipe,
    HamburgerComponent,
    MobileFooterComponent,
    StatsComponent,
    CardComponent,
    ProfileComponent,
    TabsComponent,
    InsightsComponent,
    AboutComponent,
    PiechartComponent,
    BarGraphComponent,
    HistographComponent,
    BargraphComponent,
    BargraphHorComponent,
    CarouselComponent,
    StagingComponent,
    ForbiddenComponent,
    SocialComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
