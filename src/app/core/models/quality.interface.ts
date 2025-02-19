export enum Resolution {
   FULLHD = "1080p",
   HD = "720p",
   Standard = "480p"
}

export interface Quality {
   source: string,
   resolution: Resolution
}