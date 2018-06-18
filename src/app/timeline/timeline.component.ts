import { Component, OnInit, Input } from '@angular/core';
import { Timeline } from '../classes/timeline';
import { TimelineService } from '../services/timeline.service';

@Component({
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline: Timeline;
  constructor(private timelineService: TimelineService) { }

  async ngOnInit() {
    this.timeline = await this.timelineService.getTimeline().toPromise();
  }

}
