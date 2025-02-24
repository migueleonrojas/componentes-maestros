import { AsyncPipe, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '@core/models/message.interface';
import { Transmitter } from '@core/models/transmitter.enum';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addMessage, setScrollHeight } from 'src/app/state/actions/chat.actions';
import { startSetMediaMatcher } from 'src/app/state/actions/media-matcher.actions';
import { selectAllMessages, selectMessages, selectScrollHeight } from 'src/app/state/selectors/chat.selectors';

@Component({
  selector: 'app-window-chat',
  templateUrl: './window-chat.component.html',
  styleUrls: ['./window-chat.component.scss']
})
export class WindowChatComponent implements OnInit, AfterViewInit {

   @ViewChild('messagesContainer') messagesContainer: ElementRef<HTMLElement> = {} as ElementRef<HTMLElement>;

   messages$: Observable<ReadonlyArray<Message>> = new Observable();
   message: string = "";
   scrollHeight: Observable<number> =  new Observable();

   constructor(
      private store:Store, 
      private asynPipe: AsyncPipe, 
      private scroller: ViewportScroller,
      private router: Router

   ) {

      this.store.dispatch(startSetMediaMatcher({breakpoint: '(min-width: 30rem)'}))
      this.messages$ = this.store.select(selectAllMessages);
      this.scrollHeight = this.store.select(selectScrollHeight);
      


   }
   
   ngOnInit(): void {

      
     
   }

   ngAfterViewInit(): void {

      this.messagesContainer.nativeElement.scrollTop = this.asynPipe.transform(this.scrollHeight)!;

      this.messages$.subscribe(() => {
         setTimeout(
            () => {
               this.messagesContainer.nativeElement.scroll({
                  behavior: 'smooth',
                  top: this.messagesContainer.nativeElement.scrollHeight
               });
               this.store.dispatch(setScrollHeight({
                  height: this.messagesContainer.nativeElement.scrollHeight
               }));
            }, 
            0
         );
      });
   }

   sendMessage(event: KeyboardEvent) {

      if(event.key !== 'Enter') return;

      event.preventDefault();

      this.addNewMessage((event.target as HTMLTextAreaElement).value);
        
   }

   async addNewMessage(newMessage: string) {

      const messageFromTextArea = newMessage.trim().split('\n').join(' ').toLowerCase();
      
      if(messageFromTextArea === "") return;

      this.store.dispatch(addMessage({message:{
         date: new Date(),
         id: new Date().getTime().toString(),
         message: messageFromTextArea,
         transmitter: Transmitter.User
      }}));

      this.message = '';
         
      
   }


}
