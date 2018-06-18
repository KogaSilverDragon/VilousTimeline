import { Component, OnInit } from '@angular/core';
import { Timeline } from './classes/timeline';
import { TimelineService } from './services/timeline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TimelineService]
})
export class AppComponent implements OnInit {
  constructor() {}

  async ngOnInit() {
    
  }
}
