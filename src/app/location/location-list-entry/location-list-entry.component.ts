import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-location-list-entry",
  templateUrl: "./location-list-entry.component.html",
  styleUrls: ["./location-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListEntryComponent implements OnInit {
  @Input() location;
  title: string;
  subtitle: string;
  constructor() {}

  ngOnInit() {
    this.title = this.location.name;
    this.subtitle = this.location.country_code;
  }
}
