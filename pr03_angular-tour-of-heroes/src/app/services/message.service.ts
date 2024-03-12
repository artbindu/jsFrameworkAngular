import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageList: string[];
  constructor() {
    this.messageList = [];
  }

  add(tagList: string[], msg: string): void {
    tagList = tagList.filter(el => el);
    const tags = (tagList && tagList.length) ? `[${tagList.join('][')}]`:'';
    
    console.log(tags + ' ' + msg);
    this.messageList.push(tags + ' ' + msg);
  }
  clear(): void {
    this.messageList = [];
  }
}
