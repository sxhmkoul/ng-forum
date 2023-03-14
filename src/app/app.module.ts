import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

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
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
