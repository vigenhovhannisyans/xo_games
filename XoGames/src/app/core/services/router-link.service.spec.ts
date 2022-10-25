import { TestBed } from '@angular/core/testing';

import { RouterLinkService } from './router-link.service';
import {RouterI} from "../models/router-i";

describe('RouterLinkService', () => {
  let service: RouterLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllRoutes should return array of routes', () => {
    const exceptedResult = service.routes;
    const result = service.getAllRoutes();
    expect(result).toEqual(exceptedResult);
  })
});
