import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";

@Component({
  selector: "app-mission-list-entry",
  templateUrl: "./mission-list-entry.component.html",
  styleUrls: ["./mission-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MissionListEntryComponent implements OnInit {
  @Input() mission;

  constructor(private service: LaunchLibraryService) {}

  async ngOnInit() {}
}
