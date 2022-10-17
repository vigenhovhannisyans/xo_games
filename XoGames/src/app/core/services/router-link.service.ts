import {Injectable} from '@angular/core';
import {RouterI} from "../models/router-i";


@Injectable({
  providedIn: 'root'
})

export class RouterLinkService {

  routes: RouterI[] = [
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

  constructor() {
  }

  getAllRoutes(): RouterI[] {
    return this.routes;
  }
}
