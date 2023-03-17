import { Component, Input, OnInit } from '@angular/core';
import { feedModal } from './feed.modal';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  @Input('filter') filter !: string;
  filteredData : feedModal[] = [];
dummyData : feedModal[] = [
  {
    dpUrl: 'https://media.licdn.com/dms/image/D4D03AQHS1iJLfWeKfg/profile-displayphoto-shrink_100_100/0/1675029485280?e=1684368000&v=beta&t=7-4SqAN-N_i12zPdEOza7NiAc-rUZhsjdfaIOA9S4vs',
    name: 'Saksham Koul',
    work: 'Frontend Developer',
    timeStamp: '3 h',
    question: `Can we use @HostListener in components or are they exclusively for the directives only?`,
    desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using /'Content here, content here/', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  },
  {
    dpUrl: 'https://media.licdn.com/dms/image/C5103AQHcmnpwX37ppg/profile-displayphoto-shrink_100_100/0/1535628659967?e=1684368000&v=beta&t=AvruOj5DcCoAApC-N_H5KmrDrTY-XsgBUoHW5EDjmxo',
    name: 'Aman Gupta',
    work: 'Entrapreuner',
    timeStamp: '1 d',
    question: `How to center a div? What are some simple methods?`,
    desc: `IIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  },
  {
    dpUrl: 'https://media.licdn.com/dms/image/D4D03AQHS1iJLfWeKfg/profile-displayphoto-shrink_100_100/0/1675029485280?e=1684368000&v=beta&t=7-4SqAN-N_i12zPdEOza7NiAc-rUZhsjdfaIOA9S4vs',
    name: 'Saksham Koul',
    work: 'Frontend Developer',
    timeStamp: '3 h',
    question: `Can we use @HostListener in components or are they exclusively for the directives only?`,
    desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using /'Content here, content here/', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  },
  {
    dpUrl: 'https://media.licdn.com/dms/image/C5103AQHcmnpwX37ppg/profile-displayphoto-shrink_100_100/0/1535628659967?e=1684368000&v=beta&t=AvruOj5DcCoAApC-N_H5KmrDrTY-XsgBUoHW5EDjmxo',
    name: 'Aman Gupta',
    work: 'Entrapreuner',
    timeStamp: '1 d',
    question: `How to center a div? What are some simple methods?`,
    desc: `IIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  }
]

ngOnInit(): void {
    if(this.filter === 'self'){
      this.dummyData.filter((val)=>{
        if(val.name === 'Saksham Koul'){
          this.filteredData.push(val);
        }
      })
    }
}
}
