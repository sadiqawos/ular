import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  host: string = 'http://localhost:1337';
  home: HomeContent;
  lookInside: boolean = false;

  constructor(router: Router) {
    // this.fetchHomePageContent()
    //   .then((content: HomeContent) => this.home = content)
    //   .catch(() => {this.home = HomeContent.default()});
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.lookInside = false;
      }
    });
  }

  fetchHomePageContent(): Promise<HomeContent> {
    return new Promise(async (resolve, reject) => {
      if (this.home) {
        return resolve(this.home);
      }
      const response = await axios.get(`${this.host}/home`);
      if (!response) {
        return reject();
      }

      let phrases = [response.data.Phrase1, response.data.Phrase2, response.data.Phrase3];
      let imageUrl = `${this.host}${response.data.BackgroundImage.url}`;
      let delay = response.data.DelayBetweenPhrases;
      return resolve(new HomeContent(imageUrl, phrases, delay));
    });
  }
}

export class HomeContent {
  backgroundUrl: string;
  phrases: Array<string>;
  delay: number = 10;

  constructor(backgroundUrl: string, phrases: Array<string>, delay: number = 10) {
    this.backgroundUrl = backgroundUrl;
    this.phrases = phrases;
    this.delay = delay;
  }

  static default(): HomeContent {
    let phrases = [
      'Weʼve helped businesses go from begging for clients to rejecting them because theyʼre over-booked.',
      'We help businesses go from begging for clients to having the luxury of rejecting clients. Let’s find out what we can do for you.',
      'We help you become a big fish in a small pond. Let’s work together on establishing you as the go-to in your niche.'
    ];
    let imageUrl = '/assets/home-hero.jpg';
    return new HomeContent(imageUrl, phrases);
  }
}
