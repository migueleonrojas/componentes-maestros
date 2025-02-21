import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Message } from '@core/models/message.interface';
import { Transmitter } from '@core/models/transmitter.enum';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addMessage } from 'src/app/state/actions/chat.actions';
import { selectMessages } from 'src/app/state/selectors/chat.selectors';

@Component({
  selector: 'app-window-chat',
  templateUrl: './window-chat.component.html',
  styleUrls: ['./window-chat.component.scss']
})
export class WindowChatComponent implements OnInit {

   @ViewChild('messagesContainer') messagesContainer: ElementRef<HTMLElement> = {} as ElementRef<HTMLElement>;

   messages$: Observable<ReadonlyArray<Message>> = new Observable();

   constructor(private store:Store) {

      this.messages$ = this.store.select(selectMessages);

   }

   ngOnInit(): void {
   }


   sendMessage(event: KeyboardEvent) {

      if(event.key !== 'Enter') return;

      const messageFromTextArea = (event.target as HTMLTextAreaElement).value.trim().split('\n')
                                    .join(' ').toLowerCase();

      if(messageFromTextArea === "") return;

      this.store.dispatch(addMessage({message:{
         date: new Date(),
         id: new Date().getTime().toString(),
         message: messageFromTextArea,
         transmitter: Transmitter.User
      }}));

      (event.target as HTMLTextAreaElement).value = '';
      /* (event.target as HTMLTextAreaElement).value.replace(/(\r\n|\n|\r)/gm, ""); */
      
   }

}
