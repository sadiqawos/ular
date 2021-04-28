import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Title} from '@angular/platform-browser';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: [
    './case-studies.component.less'
  ]
})
export class CaseStudiesComponent implements OnInit {
  backgroundImageUrl = '/assets/case-study-hero.jpg';

  body: string = `When we started the agency, we realized that we make money only when our clients make money. In order to make a name for ourselves, we made sure we were good at what we do - bring results to our clients. Now that we work with 6 and 7 figure businesses, that same fire has stayed with us through all the projects we’ve worked on. 
  Here are some businesses we have the pleasure to work with. Click on any logo to see what the challenges were, solutions they implemented and the results the business saw.`;

  selectedIndex = 0;
  selectedObject: string  = 'challenges';

  caseStudies = [
    {
      logoUrl: '/assets/k9-logo-big.png',
      title: 'K9 Central',
      date: '2019',
      scope: 'Launch New Service',
      challenges: [
        'Take an in-person training business model online',
        'Create a great User Experience (UX)'
      ],
      results: [
        'Over 700 Users',
        '23,500 views across videos',
        '116 hours of monthly user interaction'
      ],
      solutions: [
        'Gamified training by tracking key training stats, creating a leaderboard and interactive player avatar to increase player usage',
        'Uploaded 200+ training videos and grouped them into categories. Created a drop & drag feature so coach and player can easily create their own sessions giving birth to the subscription-based online business model',
        'Optimized pricing page layout strategy and copy to generate sales'
      ]
    },
    {
      logoUrl: '/assets/black-oxygen.png',
      title: 'Black Oxygen Organics',
      date: '2019',
      scope: 'Launch New Service',
      challenges: [
        'People didn’t know why Agim’s supplement product was a game-changer',
        'Increase Leads',
        'Increase Personal Brand'
      ],
      results: [
        'Show Educational Component',
        'Show Video'
      ],
      solutions: [
        'Create engaging content',
        'Create educational posts about product'
      ]
    },
    {
      logoUrl: '/assets/code-financials.png',
      title: 'Code Financial',
      date: '2020',
      scope: 'Launch New Service',
      challenges: [
        'Maintain a strong relationship with current clients'
      ],
      results: [
        'Informed and happy clients',
        'Increased trust between client and financial advisor'
      ],
      solutions: [
        'Create posts that keep clients informed',
        'Create posts that give value to clients',
        'Market updates'
      ]
    },
    {
      logoUrl: '/assets/complete90logo-alt.png',
      title: 'The Complete 90',
      date: '2019',
      scope: 'Launch New Service',
      challenges: [
        'Take an in-person training business model online',
        'Create a great User Experience (UX)'
      ],
      results: [
        'Over 700 Users',
        '23,500 views across videos',
        '116 hours of monthly user interaction'
      ],
      solutions: [
        'Gamified training by tracking key training stats, creating a leaderboard and interactive player avatar to increase player usage',
        'Uploaded 200+ training videos and grouped them into categories. Created a drop & drag feature so coach and player can easily create their own sessions giving birth to the subscription-based online business model',
        'Optimized pricing page layout strategy and copy to generate sales'
      ],
      slideShow: [
        {
          path: '/assets/cp90-slide-1.png',
          type: 'image',
          description: 'This is the awesome stuff we created'
        },
        {
          path: '/assets/cp90-slide-2.png',
          type: 'image',
          description: 'This is the awesome stuff we created'
        },
        {
          path: 'https://complete09.s3.us-east-2.amazonaws.com/ular+mgmt/videos/The+Complete+90/Control+Sox+Touch.mp4',
          type: 'video',
          description: 'video of something'
        },
        {
          path: 'https://complete09.s3.us-east-2.amazonaws.com/ular+mgmt/videos/The+Complete+90/Copy+of+Holofrano+V1.mp4',
          type: 'video',
          description: 'video of something'
        }
      ]
    },
    {
      logoUrl: '/assets/de-cursive-white.png',
      title: 'Die Enormous',
      date: '2019',
      scope: 'Launch New Service',
      challenges: [
        'Presenting the die enormous experience across multiple fields in one seamless online experience',
        'Establish an e commerce presence without diluting the brand'
      ],
      results: [
        'Sold out the first t-shirt launch',
        'Created a radio station that local artists want to be a part of'
      ],
      solutions: [
        'Designed apparel with the people and influences that will Live Forever in mind, while always pulling from our roots during childhood to the present day',
        'Allowed for the different fields to inspire design, sounds, production from one another.'
      ]
    },
    {
      logoUrl: '/assets/primo-logo-white.png',
      title: 'Primo',
      date: '2019',
      scope: 'Launch New Service',
      challenges: [
        'Increase Streams on Music Platforms ie. Spotify, Youtube, Apple Music',
        'Sell Merchandise'
      ],
      results: [
      ],
      solutions: [
        'Personal Brand',
        'Personalized logo that embodies the artistic quality and personality of Primo',
        'Specialized Promotional Content'
      ]
    }
  ]

  constructor(public dialog: MatDialog, private titleService:Title, config: NgbCarouselConfig) {
    this.titleService.setTitle('Ular - Case Studies');
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
  }

  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  ngOnInit(): void {
    if (window.screen.width <= 425) {
      this.isMobile = true;
    }
  }

  openLightBox(slideShow, currentIndex) {
    this.dialog.open(LightBoxModalComponent, {
      data: {slideShow, currentIndex},
      panelClass: 'carousel-light-box-modal',
    });
  }
}

@Component({
  selector: 'light-box-modal',
  templateUrl: 'lightbox.component.html'
})
export class LightBoxModalComponent {
  slideShow = [];

  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.slideShow = data.slideShow;
  }
}
