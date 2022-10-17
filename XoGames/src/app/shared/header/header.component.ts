import {Component, OnInit} from '@angular/core';
import {LanguageI} from "../../core/models/language-i";
import {MobileService} from "../../core/services/mobile.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile$: Observable<boolean> = this.isMobileService.isMobile$;
  languages: LanguageI[] = [
    {
      id: 1,
      icon: 'uk-flag',
      title: 'EN',
      selected: true,
      fullTitle: 'English'
    },
    {
      id: 2,
      icon: 'spain-flag',
      title: 'ES',
      selected: false,
      fullTitle: 'Spanish'
    },
    {
      id: 3,
      icon: 'german-flag',
      title: 'DE',
      selected: false,
      fullTitle: 'German'
    },
    {
      id: 4,
      icon: 'italy-flag',
      title: 'IT',
      selected: false,
      fullTitle: 'Italy'
    },
  ];

  constructor(
    private isMobileService: MobileService,
  ) {
  }

  ngOnInit(): void {}

  setSelectedLanguage(selected: LanguageI): void {
    this.languages.forEach(language => {
      language.selected = selected === language;
    })
  }

}
