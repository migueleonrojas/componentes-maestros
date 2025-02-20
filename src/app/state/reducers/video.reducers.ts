import { VideoMedia } from "@core/models/video.interface";
import { createReducer, on } from "@ngrx/store";
import { setPreferencesToVideo, saveProgressVideo, setQualityVideo, setSubtitle } from "../actions/video-actions";
import { Language } from "@core/models/subtitle.interface";

export const initialState: VideoMedia = {
   progress: 0,
   src: 'assets/media/Music-480.mp4',
   subtitlesSelected: {
      label: '',
      srclang: '',
      source: '',
      language: Language.None
   }
};

export const videoReducer = createReducer(
   initialState,
   on(setPreferencesToVideo, (state, {progress, src}) => {
      return {
         ...state,
         progress,
         src
      }
   }),
   on(saveProgressVideo, (state,  { progress }) => {
      return {
         ...state,
         progress
      }
   }),
   on(setQualityVideo, (state, { quality }) => {
      return {
         ...state,
         src: quality
      }
   }),
   on(setSubtitle, (state, { subtitle }) => {
      return {
         ...state,
         subtitlesSelected: subtitle
      }
   })
)