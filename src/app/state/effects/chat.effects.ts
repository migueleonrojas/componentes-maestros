import { Injectable } from "@angular/core";
import { ChatService } from "@modules/chat/services/chat.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class ChatEffects {


   $chat = createEffect(() => this.actions$.pipe(
      ofType('[Chat] Add New Message'),
      mergeMap(
         (action:any) => this.chatService.generateAnswerSupport(action.message).pipe(
            map((messageFromSupport) => ({
               type: '[Chat] Answer With A Message From Support',
               message: messageFromSupport
            }))
         )
      )
   ))


   constructor(
      private actions$: Actions,
      private chatService:ChatService
   ){}
   
}