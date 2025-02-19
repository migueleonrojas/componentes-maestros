
import { Subtitle } from "@core/models/subtitle.interface";
import { createAction, props } from "@ngrx/store"; 

export const setPreferencesToVideo = createAction(
   '[Video] Set all preferences of video',
   props<{progress: number, src: string}>()
);

export const saveProgressVideo = createAction(
   '[Video] Save Progress',
   props<{progress: number}>()
);

export const setQualityVideo = createAction(
   '[Video] Set quality video',
   props<{quality: string}>()
);

export const setSubtitle = createAction(
   '[Video] Set Subtitle',
   props<{subtitle: Subtitle}>()
)