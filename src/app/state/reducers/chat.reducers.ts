import { Message } from "@core/models/message.interface";
import { createReducer, on } from "@ngrx/store";
import { addMessage, answerMessage, editMessage, getAllMessages, removeMessage, setScrollHeight } from "../actions/chat.actions";
import { Transmitter } from "@core/models/transmitter.enum";
import { Chat } from "@core/models/chat.interface";
import { state } from "@angular/animations";

export const initialState: Chat = {
   scrollHeight: 0,
   listMessages: [
      {
         id: new Date().getTime().toString(),
         date: new Date(),
         message: 'Por este chat podrá solicitar información que requiera.',
         transmitter: Transmitter.Support
      }
   ]
};



export const chatReducer = createReducer(
   initialState,
   on(addMessage, (state, {message}) => {
      return {
         ...state,
         listMessages: [...state.listMessages, message]
      }
   }),
   on(answerMessage, (state, {message}) => {
      return {
         ...state,
         listMessages: [...state.listMessages, message]
      }
   }),
   on(editMessage, (state, { id, newMessage }) => {

      return {
         ...state,
         listMessages: [...state.listMessages.map((message: Message) => {
            if(message.id === id) message.message = newMessage;
            return message
         })]
      }
   }),
   on(removeMessage, (state, { id }) => {
      return {
         ...state,
         listMessages: [...state.listMessages.filter((message: Message) => message.id !== id)]
      }
   }),
   on(getAllMessages, (state, { messages }) => {
      return {
         ...state, 
         listMessages: [...state.listMessages, ...messages]
      }
   }),
   on(setScrollHeight, (state, { height }) => {
      return {
         ...state,
         scrollHeight: height
      }
   })
);