import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'spacecraft-list-entry',
  templateUrl: './spacecraft-list-entry.component.html',
  styleUrls: ['./spacecraft-list-entry.component.scss'],
})
export class SpacecraftListEntryComponent implements OnInit {
  @Input('spacecraft') spacecraft;
  title: string;
  subtitle: string;
  constructor() { }

  ngOnInit() {
    this.title = this.spacecraft.name;
    this.subtitle = this.spacecraft.agency.abbrev;
  }

}