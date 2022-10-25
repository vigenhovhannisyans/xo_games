import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let route: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('#canActivate should return true', () => {
    const result = guard.canActivate(route,state)
    expect(result).toBeTruthy()
  })

});
