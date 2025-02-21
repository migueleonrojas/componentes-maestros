import { Message } from "@core/models/message.interface";
import { createReducer, on } from "@ngrx/store";
import { addMessage, answerMessage, editMessage, getAllMessages, removeMessage } from "../actions/chat.actions";
import { Transmitter } from "@core/models/transmitter.enum";

export const initialState: ReadonlyArray<Message> = [
   {
      id: new Date().getTime().toString(),
      date: new Date(),
      message: 'Por este chat podrá solicitar información que requiera.',
      transmitter: Transmitter.Support
   }

];

export const chatReducer = createReducer(
   initialState,
   on(addMessage, (state, {message}) => {
      return [...state, message]
   }),
   on(answerMessage, (state, {message}) => {
      return [...state, message]
   }),
   on(editMessage, (state, { id, newMessage }) => {

      return [...state.map((message: Message) => {

         if(message.id === id) message.message = newMessage;

         return message
      })];
   }),
   on(removeMessage, (state, { id }) => {
      return [...state.filter((message:Message) => message.id !== id)]
   }),
   on(getAllMessages, (state, { messages }) => {
      return [...state, ...messages];
   })
);