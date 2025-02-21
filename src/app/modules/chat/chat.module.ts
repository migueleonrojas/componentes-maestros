import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { WindowChatComponent } from './components/window-chat/window-chat.component';
import { ChatPageComponent } from './page/chat-page/chat-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    WindowChatComponent,
    ChatPageComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ChatModule { }