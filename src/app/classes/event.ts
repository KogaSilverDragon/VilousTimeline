export interface ITimelineEvent {
  id?: string;
  name?: string;
  description?: string;
}

export class TimelineEvent implements ITimelineEvent {
  id: string;
  name: string;
  description: string;

  constructor(event: ITimelineEvent) {
    this.name = event.name;
    this.id = event.id || this.name.replace(/\W/, '-');
    this.description = event.description;
  }
}
