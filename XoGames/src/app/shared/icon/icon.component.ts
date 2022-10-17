import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() imageName!: string;
  @Input() width!: number;
  @Input() height!: number;
  @Input() isIcon!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
