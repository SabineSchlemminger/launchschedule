import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";

@Component({
  selector: "app-astronaut-list-entry",
  templateUrl: "./astronaut-list-entry.component.html",
  styleUrls: ["./astronaut-list-entry.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AstronautListEntryComponent implements OnInit {
  @Input() astronaut?;
  @Input() id?;
  title: string;
  subtitle: string;
  constructor(
    private service: LaunchLibraryService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    if (this.astronaut === undefined) {
      this.astronaut = await this.service.getAstronautById(this.id);
      this.cdr.markForCheck();
    }
    this.title = this.astronaut.name;
    this.subtitle = this.astronaut.nationality;
  }
}
