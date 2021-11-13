import { v4 as uuidv4 } from 'uuid';

export class Resource {
  readonly id: string;

  constructor(
    readonly title: string,
    readonly description: string,
    readonly link: string,
  ) {
    this.id = uuidv4(); 
  }
}
