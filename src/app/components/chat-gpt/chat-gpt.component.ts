import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { OpenAIService } from 'src/app/services/open-ai.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.scss']
})
export class ChatGptComponent implements OnInit{
  // @Input('queryInput') queryInput !: ElementRef;

  constructor(private openAIService: OpenAIService){}

  ngOnInit(): void {
    
  }

  sendQuery = (element: string) => {
    this.openAIService.getAnswer(element).subscribe((res) => {
      console.log(res);
    })
  }

}
