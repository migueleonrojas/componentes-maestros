export enum Language {
   Spanish = "Español",
   English = "Inglés",
   None = "Desactivado"
}


export interface Subtitle {
   source: string,
   language: Language
   srclang: string
   label: string
}