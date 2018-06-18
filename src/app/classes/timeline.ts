import { Era, IEra } from './era';

export interface ITimeline {
  id?: string;
  title?: string;
  introduction?: string;
  eras?: IEra[];
}

export class Timeline implements ITimeline {
  id: string;
  title: string;
  introduction: string;
  eras: Era[];

  constructor(timeline: ITimeline) {
    this.title = timeline.title;
    this.id = timeline.id || this.title.replace(/\W/, '-');
    this.introduction = timeline.introduction;
    this.eras = timeline.eras.map(era => new Era(era));
  }
}
