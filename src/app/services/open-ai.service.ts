import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from './app-config.service';

@Injectable({providedIn: 'root'})
export class OpenAIService {
  constructor(private http: HttpClient, private AppConfig: AppConfigService) { }
  
  getAnswer = (query: string) => {
    return this.http.post('https://api.openai.com/v1/completions',
    {
      "model": "text-davinci-003", 
      "prompt": query, 
      "temperature": 0, 
      "max_tokens": 4085
    },
      {
        headers: new HttpHeaders({'Content-Type':'application/json', 'Authorization' : this.AppConfig.api_keys.open_ai}),
      }
    
    )
  }
}