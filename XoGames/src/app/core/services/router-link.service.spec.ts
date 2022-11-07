import { TestBed } from '@angular/core/testing';

import { RouterLinkService } from './router-link.service';
import {RouterI} from "../models/router-i";

describe('RouterLinkService', () => {
  let service: RouterLinkService;
  let fakeRoutes: RouterI[] =[
    {
      title: 'Main',
      route: '/main/home',
      hasLive: false,
    },
    {
      title: 'Sports',
      route: '/main/sports',
      hasLive: false,
    },
    {
      title: 'In-play',
      route: '/main/in-play',
      hasLive: true,
    },
    {
      title: 'Casino',
      route: '/main/casino',
      hasLive: false,
    },
    {
      title: 'Games',
      route: '/main/games',
      hasLive: false,
    },
    {
      title: 'News',
      route: '/main/news',
      hasLive: false,
    },
    {
      title: 'Action',
      route: '/main/action',
      hasLive: false,
    },
    {
      title: 'Services',
      route: '/main/services',
      hasLive: false,
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAllRoutes should return array of routes', () => {
    service.getAllRoutes();
    expect(service.routes).toEqual(fakeRoutes);
  })
});
