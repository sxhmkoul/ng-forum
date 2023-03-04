import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class OpenAIService {
  constructor(private http: HttpClient) { }
  
  getAnswer = (query: string) => {
    return this.http.post('https://api.openai.com/v1/completions',
    {
      "model": "text-davinci-003", 
      "prompt": query, 
      "temperature": 0, 
      "max_tokens": 4085
    },
      {
        headers: new HttpHeaders({'Content-Type':'application/json', 'Authorization' : 'Bearer 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'}),
      }
    
    )
  }
}