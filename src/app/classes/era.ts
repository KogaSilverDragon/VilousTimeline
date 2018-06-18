import { TimelineEvent, ITimelineEvent } from './event';

export interface IEra {
  id?: string;
  name?: string;
  events?: ITimelineEvent[];
}

export class Era implements IEra {
  id: string;
  name: string;
  events: TimelineEvent[];

  constructor(era: IEra) {
    this.name = era.name;
    this.id = era.id || this.name.replace(/\W/, '-');
    this.events = era.events.map(event => new TimelineEvent(event));
  }
}
