import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Timeline } from '../classes/timeline';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: HttpClient) { }

  getTimeline(): Observable<Timeline> {
    return this.http.get<Timeline>(environment.timelineURL).pipe(
      map(response => new Timeline(response))
    );
  }
}
