import { Component, OnInit } from '@angular/core';
import { DataService, HomeContent } from 'src/app/services/data.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  phraseIndex: number = 0;
  content: HomeContent = HomeContent.default();
  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  timeout = null;

  constructor(private dataService: DataService, private titleService: Title) {
    this.titleService.setTitle('Ular - Home');
  }

  ngOnInit(): void {
    if (window.screen.width <= 425) {
      this.isMobile = true;
    }
    this.beginTimeout();
    this.dataService.fetchHomePageContent().then((content: HomeContent) => {
      this.content = content;
    });
  }
  
  beginTimeout(): void {    
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(()=> {
      this.changeIndex();
      this.beginTimeout();
    }, this.content.delay * 1000);
  }

  changeIndex(index = undefined): void {
    if (!isNaN(index)) {
      this.phraseIndex = index;
      this.beginTimeout(); // resets the timer
      return;
    }
    if (this.phraseIndex + 1 > this.content.phrases.length - 1) {
      this.phraseIndex = 0;
      return;
    }
    this.phraseIndex += 1;
  }
}
