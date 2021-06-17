import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { TeamContent } from 'src/app/services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
  content: TeamContent = new TeamContent();
  constructor(private titleService: Title) {
    this.titleService.setTitle('Ular - Team');
  }
  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  ngOnInit(): void {
    if (window.screen.width <= 425) {
      this.isMobile = true;
    }
  }

}
