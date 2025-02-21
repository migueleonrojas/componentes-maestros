import { Transmitter } from "./transmitter.enum";

export interface Message {
   id: string, 
   date:Date, 
   message: string, 
   transmitter: Transmitter
}