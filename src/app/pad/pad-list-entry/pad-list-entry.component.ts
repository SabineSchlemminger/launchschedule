import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";

@Component({
  selector: "app-pad-list-entry",
  templateUrl: "./pad-list-entry.component.html",
  styleUrls: ["./pad-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PadListEntryComponent implements OnInit {
  @Input() pad?;
  @Input() id?;
  @Input() locationName?;
  title: string;
  subtitle: string;
  constructor(private service: LaunchLibraryService) {}

  async ngOnInit() {
    if (!this.pad) {
      this.pad = await this.service.getPadById(this.id);
    }
    if (!this.locationName) {
      this.locationName = this.pad.location.name;
    }
    this.title = this.pad.name;
    this.subtitle = this.locationName;
  }
}
