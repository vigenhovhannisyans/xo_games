import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../../shared/shared.module";
import { SportTypeE } from 'src/app/core/enums/sport-type.enum';
import { MatchTypeE } from 'src/app/core/enums/match-type.enum';
import { BetTypeE } from 'src/app/core/enums/bet-type.enum';
import {MatchI} from 'src/app/core/models/match-i'
import { of } from 'rxjs';
import { TicketDialogComponent } from '../dialogs/ticket-dialog/ticket-dialog.component';
import { MatchService } from "../../../core/services/match.service";

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let addMatchesIntoArraySpy: any;
  let matchServiceMock = jasmine.createSpyObj(['getSoccer']);
  const fakeData=[{
    id: 1,
    firstTeam: {
      id: 1,
      name: 'barcelona',
      imageURL:'barcelona',
      score: 1
    },
    secondTeam: {
      id: 1,
      name: 'barcelona',
      imageURL:'barcelona',
      score: 1
    },
    day: new Date(),
    hour: new Date(),
    sportType: SportTypeE.BOXING,
    matchType: MatchTypeE.PREMATCH,
    ratioOne: 1,
    ratioTwo: 1,
    ratioX: 1,
    ratioBet: 1,
  }, {
      id: 2,
      firstTeam: {
        id: 1,
        name: 'barcelona',
        imageURL:'barcelona',
        score: 1
      },
      secondTeam: {
        id: 1,
        name: 'barcelona',
        imageURL:'barcelona',
        score: 1
      },
      day: new Date(),
      hour: new Date(),
      sportType: SportTypeE.BOXING,
      matchType: MatchTypeE.IN_PLAY,
      ratioOne: 1,
      ratioTwo: 1,
      ratioX: 1,
      ratioBet: 1,
    }] as MatchI[];

  beforeEach(async () => {
    matchServiceMock.getSoccer.and.returnValue(of(fakeData));
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatIconModule,
        SharedModule,
      ],
      providers:[{provide: MatchService, useValue: matchServiceMock}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    addMatchesIntoArraySpy = spyOn<any>(component,'_addMatchesIntoArray');
    component.matches = []
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should call #getMatches function', () => {
    const getMatchesSpy = spyOn<any>(component,'_getMatches');
    component.ngOnInit();
    expect(getMatchesSpy).toHaveBeenCalled();
  });

  it('#getSportTypeE should return SportTypeEnum', () => {
    const result = component.getSportTypeE;
    expect(result).toEqual(SportTypeE);
  });

  it('#getMatchTypeE should return MatchTypeE', () => {
    const result = component.getMatchTypeE;
    expect(result).toEqual(MatchTypeE);
  });

  it('#getBetTypeE should return BetTypeE', () => {
    const result = component.getBetTypeE;
    expect(result).toEqual(BetTypeE);
  });

  it('#fetchMatches should assign an empty array to #inPlayMatches if sport type is undefined', () => {
    const matchType = {} as MatchTypeE;
    const sportType = SportTypeE.CRICKET;
    component.fetchMatches(matchType,sportType);
    expect(component.inPlayMatches).toEqual([]);
  });

  it('#fetchMatches should call #addMatchesIntoArray if sport type is SOCCER', () => {
    const matchType = {} as MatchTypeE;
    const sportType = SportTypeE.SOCCER;
    component.fetchMatches(matchType,sportType);
    expect(addMatchesIntoArraySpy).toHaveBeenCalled()
  });

  it('#fetchMatches should call #addMatchesIntoArray if sport type is TENNIS', () => {
    const matchType = {} as MatchTypeE;
    const sportType = SportTypeE.TENNIS;
    component.fetchMatches(matchType,sportType);
    expect(addMatchesIntoArraySpy).toHaveBeenCalled()
  });

  it('#fetchMatches should call #addMatchesIntoArray if sport type is BOXING', () => {
    const matchType = {} as MatchTypeE;
    const sportType = SportTypeE.BOXING;
    component.fetchMatches(matchType,sportType);
    expect(addMatchesIntoArraySpy).toHaveBeenCalled()
  });

  it('#fetchMatches should call #addMatchesIntoArray if sport type is BASKETBALL', () => {
    const matchType = {} as MatchTypeE;
    const sportType = SportTypeE.BASKETBALL;
    component.fetchMatches(matchType,sportType);
    expect(addMatchesIntoArraySpy).toHaveBeenCalled()
  });

  it('#fetchMatches should call #addMatchesIntoArray if sport type is ALL', () => {
    const matchType = {} as MatchTypeE;
    const sportType = SportTypeE.ALL;
    component.fetchMatches(matchType,sportType);
    expect(addMatchesIntoArraySpy).toHaveBeenCalled()
  });

  it('#openTicketDialog should open #TicketDialogComponent', () => {
    const match = {} as MatchI;
    const betType = {} as BetTypeE;
    const fakeParams = {
      width: '350px',
      height: '510px',
      panelClass: 'ticket-dialog',
      data: {
        match: match,
        betType: betType
      }
    };
    const dialogSpy = spyOn(component['_ticketDialog'],'open').and.returnValue(
      {afterClosed: () => of(true)} as MatDialogRef <typeof component>);
      component.openTicketDialog(match,betType);
      fixture.detectChanges();
      expect(dialogSpy).toHaveBeenCalledWith(TicketDialogComponent,fakeParams);
    });

    it('#getMatches should call getSoccer and assign response to #matches', () => {
      component['_getMatches']();
      expect(component.matches).toEqual(fakeData);
    });

    it('#getMatchByTypeAndSportType should filter matches by sport and match types', () => {
      component.matches = [{
        id: 1,
        firstTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        secondTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        day: new Date(),
        hour: new Date(),
        sportType: SportTypeE.BOXING,
        matchType: MatchTypeE.PREMATCH,
        ratioOne: 1,
        ratioTwo: 1,
        ratioX: 1,
        ratioBet: 1,
      }, {
        id: 2,
        firstTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        secondTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        day: new Date(),
        hour: new Date(),
        sportType: SportTypeE.BOXING,
        matchType: MatchTypeE.IN_PLAY,
        ratioOne: 1,
        ratioTwo: 1,
        ratioX: 1,
        ratioBet: 1,
      }];
      const expectedResult = [{
        id: 2,
        firstTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        secondTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        day: new Date(),
        hour: new Date(),
        sportType: SportTypeE.BOXING,
        matchType: MatchTypeE.IN_PLAY,
        ratioOne: 1,
        ratioTwo: 1,
        ratioX: 1,
        ratioBet: 1,
      }];
      const result = component['_getMatchByTypeAndSportType'](MatchTypeE.IN_PLAY, SportTypeE.BOXING);
      expect(result).toEqual(expectedResult)
    });

    it('#getMatchByTypeAndSportType should filter matches by sport and match types but match type is undefined', () => {
      component.matches = [{
        id: 1,
        firstTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        secondTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        day: new Date(),
        hour: new Date(),
        sportType: SportTypeE.BOXING,
        matchType: MatchTypeE.PREMATCH,
        ratioOne: 1,
        ratioTwo: 1,
        ratioX: 1,
        ratioBet: 1,
      }, {
        id: 2,
        firstTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        secondTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        day: new Date(),
        hour: new Date(),
        sportType: SportTypeE.BOXING,
        matchType: MatchTypeE.IN_PLAY,
        ratioOne: 1,
        ratioTwo: 1,
        ratioX: 1,
        ratioBet: 1,
      }];
      const expectedResult = [{
        id: 2,
        firstTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        secondTeam: {
          id: 1,
          name: 'barcelona',
          imageURL:'barcelona',
          score: 1
        },
        day: new Date(),
        hour: new Date(),
        sportType: SportTypeE.BOXING,
        matchType: MatchTypeE.IN_PLAY,
        ratioOne: 1,
        ratioTwo: 1,
        ratioX: 1,
        ratioBet: 1,
      }];
      const result = component['_getMatchByTypeAndSportType'](MatchTypeE.IN_PLAY);
      expect(result).toEqual(expectedResult)
    });

});
