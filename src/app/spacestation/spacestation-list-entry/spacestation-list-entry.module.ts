import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacestationListEntryComponent } from './spacestation-list-entry.component';
import { SpacestationRoutingModule } from '../spacestation-routing.module';
import { AnimationModule } from 'src/app/animation/animation.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations: [SpacestationListEntryComponent],
    imports: [
        SpacestationRoutingModule,
        AnimationModule,
        CommonModule,
        IonicModule
    ],
    exports: [SpacestationListEntryComponent],
})
export class SpacestationListEntryModule { }