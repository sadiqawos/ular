import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
  backgroundImageUrl = '/assets/team-hero.jpg';
  body: string = 'We have built a young, ambitious that brings a fresh set of eyes to todayʼs business problems. What we lack in experience, we make up for in ambitious visions that are downright cocky.';
  selectedMemberIndex = 0;
  selectedStatIndex = 0;
  members = [
    {
      avatarUrl: '/assets/team_martin.png',
      imageUrl: '/assets/team_martin.png',
      name: 'Martin Grzywa',
      role: 'Founder',
      stats: [
        {
          name: 'Industry',
          items: [
            {
              key: 'Season In Industry',
              value: 3,
            },
            {
              key: 'Creativity',
              value: 50,
            },
            {
              key: 'Branding',
              value: 90,
            },
            {
              key: 'NeuroMarketing',
              value: 99,
            },
            {
              key: 'Design Savviness',
              value: 40,
            },
            {
              key: 'Programming Savviness',
              value: 20,
            },
            {
              key: 'Typewriting Efficiency',
              value: 38,
            },
            {
              key: 'Project Management',
              value: 80,
            }
          ]
        },
        {
          name: 'Personal',
          items: [
            {
              type: 'text',
              key: 'Sport',
              value: 'Futbol',
            },
            {
              type: 'text',
              key: 'Cheat Meal',
              value: 'Chocolate',
            },
            {
              type: 'text',
              key: 'Biggest Fear',
              value: 'Roller Coasters',
            },
            {
              type: 'text',
              key: 'Nickname',
              value: 'Marty',
            },
            {
              type: 'text',
              key: 'Karaoke Song',
              value: 'Cheerleader -OMI',
            },
            {
              type: 'text',
              key: 'Specialty Subject',
              value: 'Self-Development'
            },
            {
              type: 'text',
              key: 'Dream travel Destination',
              value: 'Bali'
            }
          ]
        },
        {
          name: 'Cartoon',
          type: 'Phineas',
          items: [
            {
              key: 'Intelligence',
              value: 60,
            },
            {
              key: 'Humour',
              value: 80,
            },
            {
              key: 'Bravery',
              value: 90,
            },
            {
              key: 'Drive',
              value: 95,
            },
            {
              type: 'text',
              key: 'Speciality',
              value: 'Generating Ideas',
            },
            {
              type: 'text',
              key: 'Weakness',
              value: 'Naivety',
            },
            {
              type: 'text',
              key: 'Underrated Skill',
              value: 'Optimism',
            },
            {
              type: 'text',
              key: 'Equipment',
              value: 'None',
            }
          ]
        }
      ]
    },
    {
      avatarUrl: '/assets/team_stela.png',
      imageUrl: '/assets/team_stela.png',
      name: 'Stela Koti',
      role: 'Graphic Designer',
      stats: [
        {
          name: 'Industry',
          items: [
            {
              key: 'Season In Industry',
              value: 4,
            },
            {
              key: 'Creativity',
              value: 100,
            },
            {
              key: 'Branding',
              value: 90,

            },
            {
              key: 'NeuroMarketing',
              value: 70,

            },
            {
              key: 'Design Savviness',
              value: 100,

            },
            {
              key: 'Programming Savviness',
              value: 50,

            },
            {
              key: 'Typewriting Efficiency',
              value: 80,

            },
            {
              key: 'Project Management',
              value: 50,

            }
          ]
        },
        {
          name: 'Personal',
          items: [
            {
              type: 'text',
              key: 'Sport',
              value: 'Volley Ball',
            },
            {
              type: 'text',
              key: 'Dream Job',
              value: 'Pianist',

            },
            {
              type: 'text',
              key: 'Cheat Meal',
              value: 'Stir Fry',

            },
            {
              type: 'text',
              key: 'Biggest Fear',
              value: 'Heights',

            },
            {
              type: 'text',
              key: 'Nickname',
              value: 'Stels',

            },
            {
              type: 'text',
              key: 'Karaoke Song',
              value: 'Stumblin’ In - Suzi Quatro & Chris Norman',

            },
            {
              type: 'text',
              key: 'Specialist Subject',
              value: 'Law',

            },
            {
              type: 'text',
              key: 'Dream Travel Destination',
              value: 'Thailand',

            }
          ]
        },
        {
          name: 'Cartoon',
          type: 'Tom & Jerry',
          items: [
            {
              key: 'Intelligence',
              value: 95,
            },
            {
              key: 'Humour',
              value: 80,
            },
            {
              key: 'Bravery',
              value: 100,
            },
            {
              type: 'text',
              key: 'Speciality',
              value: 'Creating',
            },
            {
              type: 'text',
              key: 'Weakness',
              value: 'Too Critical',
            },
            {
              type: 'text',
              key: 'Underrated Skill',
              value: 'Debating',
            },
            {
              type: 'text',
              key: 'Equipment',
              value: 'Sweatpants',
            }
          ]
        }
      ]
    },
    {
      avatarUrl: '/assets/mug2.jpeg',
      imageUrl: '/assets/mug1.jpeg',
      name: 'Giuliano Frano',
      role: 'Founder',
      stats: [
        {
          name: 'Industry',
          items: [
            {
              key: 'Season In Industry',
              value: 10,
            },
            {
              key: 'Originality',
              value: 100
            },
            {
              key: 'Branding',
              value: 92,
            },
            {
              key: 'NeuroMarketing',
              value: 90,
            },
            {
              key: 'Design Savviness',
              value: 70,
            },
            {
              key: 'Programming Savviness',
              value: 30,
            },
            {
              key: 'Typewriting Efficiency',
              value: 20,
            },
            {
              key: 'Project Management',
              value: 100,
            }
          ]
        },
        {
          name: 'Personal',
          items: [
            {
              type: 'text',
              key: 'Sport',
              value: 'Futbol',
            },
            {
              type: 'text',
              key: 'Dream Job',
              value: 'Professional Futbol Player',
            },
            {
              type: 'text',
              key: 'Cheat Mea',
              value: 'Brownies',
            },
            {
              type: 'text',
              key: 'Biggest Fear',
              value: 'Spiders',
            },
            {
              type: 'text',
              key: 'Nickname',
              value: 'Gulez',
            },
            {
              type: 'text',
              key: 'Karaoke Song',
              value: "I'm yours - Jason Derulo",
            },
            {
              type: 'text',
              key: 'Specialist Subject',
              value: 'Chess',
            },
            {
              type: 'text',
              key: 'Dream Travel Destination',
              value: 'Amalfi Coast',
            },
          ]
        },
        {
          name: 'Cartoon',
          type: 'Sheriff Woody',
          items: [
            {
              key: 'Intelligence',
              value: 95,
            },
            {
              key: 'Humour',
              value: 40,
            },
            {
              key: 'Bravery',
              value: 90,
            },
            {
              key: 'Drive',
              value: 100,
            },
            {
              type: 'text',
              key: 'Speciality',
              value: 'Leadership',
            },
            {
              type: 'text',
              key: 'Weakness',
              value: 'Pull String',
            },
            {
              type: 'text',
              key: 'Underrated Skill',
              value: 'Dancing',
            },
            {
              type: 'text',
              key: 'Equipment',
              value: 'Cowboy Hat',
            }
          ]
        }
      ]
    },
    {
      avatarUrl: '/assets/team_alan.png',
      imageUrl: '/assets/team_alan.png',
      name: 'Alan Contreras',
      role: 'Videographer',
      stats: [
        {
          name: 'Industry',
          items: [
            {
              key: 'Season In Industry',
              value: 4,
            },
            {
              key: 'Creativity',
              value: 85,
            },
            {
              key: 'Branding',
              value: 85,
            },
            {
              key: 'NeuroMarketing',
              value: 40,
            },
            {
              key: 'Design Savviness',
              value: 60,
            },
            {
              key: 'Programming Savviness',
              value: 10,
            },
            {
              key: 'Typewriting Efficiency',
              value: 70,
            },
            {
              key: 'Project Management',
              value: 75,
            }
          ]
        },
        {
          name: 'Personal',
          items: [
            {
              type: 'text',
              key: 'Sport',
              value: 'Futbol',
            },
            {
              type: 'text',
              key: 'Dream Job',
              value: 'CEO of Creative Marketing Company',

            },
            {
              type: 'text',
              key: 'Cheat Meal',
              value: 'Eggs Benny',

            },
            {
              type: 'text',
              key: 'Biggest Fear',
              value: 'Failure',

            },
            {
              type: 'text',
              key: 'Nickname',
              value: 'Al',

            },
            {
              type: 'text',
              key: 'Karaoke Song',
              value: 'Bohemian Rhapsody - Queen',

            }
          ]
        },
        {
          name: 'Cartoon',
          type: 'Sheriff Woody',
          items: [
            {
              key: 'Intelligence',
              value: 95,
            },
            {
              key: 'Humour',
              value: 40,
            },
            {
              key: 'Bravery',
              value: 90,
            },
            {
              key: 'Drive',
              value: 100,
            },
            {
              type: 'text',
              key: 'Speciality',
              value: 'Leadership',
            },
            {
              type: 'text',
              key: 'Weakness',
              value: 'Pull String',
            },
            {
              type: 'text',
              key: 'Underrated Skill',
              value: 'Dancing',
            },
            {
              type: 'text',
              key: 'Equipment',
              value: 'Cowboy Hat',
            }
          ]
        }
      ]
    },
    {
      avatarUrl: '/assets/team_juan.png',
      imageUrl: '/assets/team_juan.png',
      name: 'Juan Ortiz',
      role: 'Creative Consultant',
      stats: [
        {
          name: 'Industry',
          items: [
            {
              key: 'Season In Industry',
              value: 8,
            },
            {
              key: 'Creativity',
              value: 100,
            },
            {
              key: 'Branding',
              value: 90,
            },
            {
              key: 'NeuroMarketing',
              value: 90,
            },
            {
              key: 'Design Savviness',
              value: 100,
            },
            {
              key: 'Programming Savviness',
              value: 60,
            },
            {
              key: 'Typewriting Efficiency',
              value: 80,
            },
            {
              key: 'Project Management',
              value: 70,
            }
          ]
        },
        {
          name: 'Personal',
          items: [
            {
              type: 'text',
              key: 'Sport',
              value: 'Basketball',
            },
            {
              type: 'text',
              key: 'Dream Job',
              value: 'Creative Consultant',

            },
            {
              type: 'text',
              key: 'Cheat Meal',
              value: 'Cheesecake',

            },
            {
              type: 'text',
              key: 'Biggest Fear',
              value: 'Spiders',

            },
            {
              type: 'text',
              key: 'Nickname',
              value: 'Juancho',

            },
            {
              type: 'text',
              key: 'Karaoke Song',
              value: 'Billie Jean - Michael Jackson',
            },
            {
              type: 'text',
              key: 'Specialty Subject',
              value: 'Music'
            },
            {
              type: 'text',
              key: 'Dream travel Destination',
              value: 'Columbia'
            }
          ]
        },
        {
          name: 'Cartoon',
          type: 'Bugs Bunny',
          items: [
            {
              key: 'Intelligence',
              value: 95,
            },
            {
              key: 'Humour',
              value: 100,
            },
            {
              key: 'Bravery',
              value: 90,
            },
            {
              key: 'Drive',
              value: 80,
            },
            {
              type: 'text',
              key: 'Speciality',
              value: 'Resourcefulness',
            },
            {
              type: 'text',
              key: 'Weakness',
              value: 'VVS Carrots',
            },
            {
              type: 'text',
              key: 'Underrated Skill',
              value: 'Basketball',
            },
            {
              type: 'text',
              key: 'Equipment',
              value: 'Michael’s Secret Stuff',
            }
          ]
        }
      ]
    },
  ];
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
