import { TestBed } from '@angular/core/testing';

import { SportService } from './sport.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SportService', () => {
  let service: SportService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(SportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
