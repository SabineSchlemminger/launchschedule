import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RocketListEntryComponent } from "./rocket-list-entry.component";
import { RocketRoutingModule } from "../rocket-routing.module";
import { AnimationModule } from "src/app/animation/animation.module";
import { IonicModule } from "@ionic/angular";
import { NotificationModule } from "src/app/notification/notification.module";

@NgModule({
  declarations: [RocketListEntryComponent],
  imports: [
    RocketRoutingModule,
    AnimationModule,
    CommonModule,
    IonicModule,
    NotificationModule,
  ],
  exports: [RocketListEntryComponent],
})
export class RocketListEntryModule {}
