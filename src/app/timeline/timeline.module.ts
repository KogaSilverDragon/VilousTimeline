import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { EraComponent } from '../era/era.component';
import { EventComponent } from '../event/event.component';

@NgModule({
  declarations: [
    TimelineComponent,
    EraComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    TimelineRoutingModule
  ]
})
export class TimelineModule { }
