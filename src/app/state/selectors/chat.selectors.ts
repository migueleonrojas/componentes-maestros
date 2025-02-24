import { Chat } from "@core/models/chat.interface";
import { Message } from "@core/models/message.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectMessages = createFeatureSelector<Chat>('chatState');

export const selectAllMessages = createSelector(
   selectMessages,
   (state: Chat) => state.listMessages
);

export const selectScrollHeight = createSelector(
   selectMessages,
   (state: Chat) => state.scrollHeight
)
