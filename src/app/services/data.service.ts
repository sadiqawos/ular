import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import axios from 'axios';
import { servicesVersion } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  host: string = 'https://ularmgmt.ca/api/';
  home: HomeContent;
  lookInside: boolean = false;

  constructor(router: Router) {
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

export class ServicesContent {
  backgroundImageUrl = '/assets/services-hero.jpg';
  bodyText: string = `Let me guess, youʼve tried other agencies that play it safe or you are just tired of doing your social media
  yourself.<br/><br/>
  Either way, we come up with industry-breaking ideas and implement them while keeping in mind the
  brand.This positions your business as the go-to in your niche attracting new clientele and building a
  loyal clientele.<br/><br/>
  The thing is, is that most other agencies charge ludicrous amounts for bang-average work.You canʼt
  blame them as they are just looking to cover their overhead costs.<br/><br/>`;

  socialMediaServices: Array<object> = [
    {
      title: 'Graphic Design',
      phrases: [
        'Creatives',
        'IG Carousels',
        'Stories',
      ]
    },
    {
      title: 'Marketing Strategy',
      phrases: [
        'Strategic Campaigns',
        'Consumer Psychology',
      ]
    },
    {
      title: 'Video Production',
      phrases: [
        'Engaging Content Production',
        'Banger Promo Videos',
        'Professional Photos',
      ]
    },
    {
      title: 'Strategic Copywriting',
      phrases: [
        'Engaging Captions',
        'Product Descriptions that Convert',
        'Sales Letters that Convert',
      ]
    },
    {
      title: 'Branding',
      phrases: [
        'Personalized Logo Design',
        'Strong Brand Identity',
        'Ideal Client Attraction',
      ]
    },
    {
      title: 'Media Buying',
      phrases: [
        'Results-Driven Paid Ads Management ',
        'Performance Analysis',
      ]
    }
  ];

  websiteDesignServices: Array<object> = [
    {
      title: 'SEO',
      phrases: [
        'Google Ranking',
        'Drives Organic Traffic',
        'Keyword Analysis',

      ]
    },
    {
      title: 'CMS',
      phrases: [
        'Manage Digital Content',
        'Convenient Dashboard',
      ]
    },
    {
      title: 'E-Commerce Solutions',
      phrases: [
        'Sales Analytics',
        'Payment Processing',
        '3rd Party Integration',

      ]
    },
    {
      title: 'Design',
      phrases: [
        'Mobile Friendly',
        'Intuitive UX/UI',
        'Creative Direction',
      ]
    }
  ];

  selectedService = this.socialMediaServices;

  constructor() {
    this.fetchContent();
  }

  fetchContent(): Promise<any> {
    let host = 'https://ularmgmt.ca/api/';
    return new Promise(async (resolve, reject) => {
      const response = await axios.get(`${host}/service`);
      if (!response) {
        return reject();
      }

      this.bodyText = response.data.Body.replace(/\n/g, '<br>');
      this.backgroundImageUrl = `${host}${response.data.Background[0].url}`;

      try {
        let socialmedia = response.data.services
          .filter(s => s.Category === 'socialmedia')
          .map(s => {
            return {
              title: s.Name,
              phrases: s.Description.split('\n')
            }
          });
        if (socialmedia && socialmedia.length > 0) {
          this.socialMediaServices.length = 0;
          this.socialMediaServices.push(...socialmedia);
        }
      } catch (err) {
        console.error('Error while fetching social media services', err);
      }

      try {
        let websitedesign = response.data.services
          .filter(s => s.Category === 'websitedesign')
          .map(s => {
            return {
              title: s.Name,
              phrases: s.Description.split('\n')
            }
          });
        if (websitedesign && websitedesign.length > 0) {
          this.websiteDesignServices.length = 0;
          this.websiteDesignServices.push(...websitedesign);
        }
      } catch (err) {
        console.error('Error while fetching website design services', err);
      }
      return resolve({});
    });
  }
}

export class TeamContent {
  backgroundImageUrl = '';
  body: string = '';
  selectedMemberIndex = 2;
  selectedStatIndex = 0;
  members = [];

  constructor() {
    this.fetchContent();
  }

  mapTeamMember(t) {
    let stats = [];
    try {
      stats = t.map(i => {
        let value = i.Value;
        let ret = {
          key: i.Name,
          value: value 
        };
        if (isNaN(value)) ret['type'] = 'text';
        return ret;
      });
    } catch (err) {
      console.log(err);
    }
    return stats;
  }

  fetchContent(): Promise<any> {
    let host = 'https://ularmgmt.ca/api/';
    return new Promise(async (resolve, reject) => {
      const response = await axios.get(`${host}/team`);
      if (!response) {
        return reject();
      }

      this.body = response.data.description;
      this.backgroundImageUrl = `${host}${response.data.BackgroundImage.url}`;
      let members = response.data.TeamMembers.map(t => {
        let stats = [];

        let industryStatsItems = this.mapTeamMember(t.IndustryStats);
        let personalStatsItems = this.mapTeamMember(t.PersonalStats);
        let cartoonStatsItems = this.mapTeamMember(t.CartoonStats);
        
        stats.push({name: 'Industry', items: industryStatsItems});
        stats.push({name: 'Personal', items: personalStatsItems});
        stats.push({name: 'Cartoon', items: cartoonStatsItems, type: t.CartoonName});
        let industryImage = `${host}${t.IndustryImage.url}`;
        let personalImage = `${host}${t.PersonalImage.url}`;
        let cartoonImage = `${host}${t.CartoonImage.url}`;
        const images = [industryImage, personalImage, cartoonImage];
        return {
          avatarUrl: `${host}${t.AvatarUrl.url}`,
          imageUrl: `${host}${t.IndustryImage.url}`,
          images: images,
          name: t.Name,
          role: t.Role,
          stats: stats
        };
      });
      if (members) {
        this.members.length = 0;
        this.members.push(...members);
      }
      return resolve({});
    });
  }
}

export class CaseStudiesContent {
  body: string = '';
  backgroundImageUrl = '';

  selectedIndex = 0;
  selectedObject: string  = 'challenges';

  caseStudies = [];

  constructor() {
    this.fetchContent();
  }

  fetchContentSlides(id): Promise<any> {
    let host = 'https://ularmgmt.ca/api/';
    return new Promise(async (resolve, reject) => {
      const response = await axios.get(`${host}/case-studies/${id}`);
      if (!response) {
        return reject();
      }
      let slides = (response.data.SlideItems || []).map(s => {
        let ret =  {
          type: s.Type
        };
        if (s.Type === 'image') {
          ret['path'] = `${host}${s.Content[0].Image.url}`;
        } else {
          ret['path'] = s.Content[0].VideoLink;
        }
        return ret;
      });
      return resolve(slides);
    });
  }

  fetchContent(): Promise<any> {
    let host = 'https://ularmgmt.ca/api/';
    return new Promise(async (resolve, reject) => {
      const response = await axios.get(`${host}/case-studies`);
      if (!response) {
        return reject();
      }

      console.log(response.data)
      this.body = response.data.Body;
      this.backgroundImageUrl = `${host}${response.data.BackgroundImage.url}`;
      
      let caseStudies = [];
      
      for (let c of response.data.case_studies) {
        let slides = await this.fetchContentSlides(c.id);
        let f = {
          logoUrl: `${host}${c.Logo.url}`,
          altLogoUrl: `${host}${c.WhiteLogo.url}`,
          title: c.Title,
          date: c.Date,
          scope: c.Scope,
          challenges: c.Challenges.map(cc => cc.Description),
          results: c.Results.map(cc => cc.Description),
          solutions: c.Solutions.map(cc => cc.Description),
          slideShow: slides
        };
        caseStudies.push(f);
      }

      console.log(caseStudies)
      this.caseStudies.length = 0;
      this.caseStudies.push(...caseStudies);
      return resolve({});
    });
  }
}

export class ContactContent {
  backgroundImageUrl = '';
  body: string = '';

  constructor() {
    this.fetchContent();
  }

  fetchContent(): Promise<any> {
    let host = 'https://ularmgmt.ca/api/';
    return new Promise(async (resolve, reject) => {
      const response = await axios.get(`${host}/contact`);
      if (!response) {
        return reject();
      }

      this.body = response.data.Description.replace(/\n/g, '<br>');
      this.backgroundImageUrl = `${host}${response.data.BackgroundImage.url}`;

      return resolve({});
    });
  }
}
