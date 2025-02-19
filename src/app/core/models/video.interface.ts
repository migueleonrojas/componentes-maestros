import { Subtitle } from "./subtitle.interface"

export interface VideoMedia {
   progress: number,
   src: string,
   subtitlesSelected: Subtitle
}