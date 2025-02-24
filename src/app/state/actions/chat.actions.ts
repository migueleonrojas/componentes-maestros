import { Message } from "@core/models/message.interface";
import { createAction, props } from "@ngrx/store"; 


export const addMessage = createAction(
   '[Chat] Add New Message',
   props<{message: Message}>()
);

export const answerMessage = createAction(
   '[Chat] Answer With A Message From Support',
   props<{message: Message}>()
);

export const editMessage = createAction(
   '[Chat] Edit Message',
   props<{id:string, newMessage: string}>()
);

export const removeMessage = createAction(
   '[Chat] Remove Message',
   props<{id: string}>()
);

export const getAllMessages = createAction(
   '[Chat] Get All Message',
   props<{messages: ReadonlyArray<Message>}>()
);

export const setScrollHeight = createAction(
   '[Chat] Set Scroll Height',
   props<{height: number}>()
);