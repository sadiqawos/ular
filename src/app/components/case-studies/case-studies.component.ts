import { ElementRef, ViewChildren } from '@angular/core';
import { ViewChild } from '@angular/core';
import { QueryList } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Title} from '@angular/platform-browser';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CaseStudiesContent } from 'src/app/services/data.service';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: [
    './case-studies.component.less'
  ]
})
export class CaseStudiesComponent implements OnInit {
  @ViewChild('carousel') carousel: NgbCarousel;
  @ViewChildren('video')  video: QueryList<any>;
  content: CaseStudiesContent = new CaseStudiesContent();

  constructor(public dialog: MatDialog, private titleService:Title, config: NgbCarouselConfig) {
    this.titleService.setTitle('Ular - Case Studies');
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
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

  pauseVideo() {
    if (this.video.length > 0) {
      this.video.forEach(v => {
        v.nativeElement.pause();
      });
    }
  }

  prev() {
    this.carousel.prev();
    this.pauseVideo();
  }

  next() {
    this.carousel.next();
    this.pauseVideo();
  }

  onSlid(event) {
    this.pauseVideo();
  }
}

@Component({
  selector: 'light-box-modal',
  templateUrl: 'lightbox.component.html'
})
export class LightBoxModalComponent {
  slideShow = [];
  @ViewChild('carousel') carousel: NgbCarousel;
  @ViewChildren('video')  video: QueryList<any>;

  constructor(@Inject(MAT_DIALOG_DATA) data, config: NgbCarouselConfig) {
    this.slideShow = data.slideShow;
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  pauseVideo() {
    if (this.video.length > 0) {
      this.video.forEach(v => {
        v.nativeElement.pause();
      });
    }
  }

  prev() {
    this.carousel.prev();
    this.pauseVideo();
  }

  next() {
    this.carousel.next();
    this.pauseVideo();
  }

  onSlid(event) {
    this.pauseVideo();
  }
}
