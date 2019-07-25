import { Moment } from 'moment';

export interface IClient {
  id?: number;
  company?: string;
  created?: Moment;
  lastModified?: Moment;
}

export class Client implements IClient {
  constructor(public id?: number, public company?: string, public created?: Moment, public lastModified?: Moment) {}
}
