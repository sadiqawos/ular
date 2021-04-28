import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

  backgroundImageUrl = '/assets/SAN-FRAN-ALT.png';
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
  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  constructor(private titleService:Title) {
    this.titleService.setTitle('Ular - Services');
  }

  ngOnInit(): void {
    if (window.screen.width <= 425) {
      this.isMobile = true;
    }
  }
}
