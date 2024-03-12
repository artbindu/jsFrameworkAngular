import { Component, inject } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  title: string;
  public msgService: MessageService = inject(MessageService);
  constructor() {
    this.title = "MessageComponent";
  }

  clearUIMsg(): void {
    this.msgService.clear();
  }

}
