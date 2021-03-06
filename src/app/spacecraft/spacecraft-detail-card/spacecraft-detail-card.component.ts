import { Component, OnInit, Input } from "@angular/core";
import { LaunchLibraryService } from "src/app/launch-library.service";

@Component({
  selector: "app-spacecraft-detail-card",
  templateUrl: "./spacecraft-detail-card.component.html",
  styleUrls: ["./spacecraft-detail-card.component.scss"],
})
export class SpacecraftDetailCardComponent implements OnInit {
  @Input() spacecraft?;
  @Input() id?;

  constructor(private service: LaunchLibraryService) {}

  async ngOnInit() {
    if (this.spacecraft === undefined) {
      this.spacecraft = await this.service.getSpacecraftById(this.id);
    }
  }
}
