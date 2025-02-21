import { Message } from "@core/models/message.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectMessages = createFeatureSelector<ReadonlyArray<Message>>('chatState');
