import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { WindowChatComponent } from './components/window-chat/window-chat.component';
import { ChatPageComponent } from './page/chat-page/chat-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
   providers: [
      AsyncPipe
   ],
   declarations: [
      WindowChatComponent,
      ChatPageComponent,
   ],
   imports: [
      CommonModule,
      ChatRoutingModule,
      MatButtonModule,
      MatIconModule,
      FormsModule
   ]
})
export class ChatModule { }