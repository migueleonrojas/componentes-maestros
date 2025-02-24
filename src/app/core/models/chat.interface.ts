import { Message } from "./message.interface";

export interface Chat {
   listMessages: ReadonlyArray<Message>,
   scrollHeight: number
   
}