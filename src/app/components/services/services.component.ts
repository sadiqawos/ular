import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { ServicesContent } from 'src/app/services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

  serviceContent: ServicesContent = new ServicesContent();
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
