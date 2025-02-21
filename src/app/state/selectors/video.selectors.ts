import { VideoMedia } from "@core/models/video.interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectVideo = createFeatureSelector<VideoMedia>('videoMediaState');

export const selectQualityVideo = createSelector(
   selectVideo,
   (state: VideoMedia) => state.src
);

export const selectProgressVideo = createSelector(
   selectVideo,
   (state: VideoMedia) => state.progress
);



export const selectSubtitleSelected = createSelector(
   selectVideo,
   (state: VideoMedia) => state.subtitlesSelected
);
