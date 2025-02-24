import { Injectable } from '@angular/core';
import { Message } from '@core/models/message.interface';
import { PossibleAnswers } from '@core/models/possible-answers.interface';
import { Transmitter } from '@core/models/transmitter.enum';
import { Observable, of } from 'rxjs';
import { delay, max } from 'rxjs/operators';
import { answersSupport } from 'src/assets/answers/answers.support';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  _getAnswer(answers: ReadonlyArray<string>, message:string): string {
      const possibleAnswers: PossibleAnswers[] = [];

      for(let i = 0; i < message.split(' ').length; i++) {

         let coincidencesInclude = 0;

         for(let j = 0; j < answers.length; j++) {

            if(answers[j].replace(',', ' ').includes(message.split(' ')[i])) {
               coincidencesInclude ++;
               possibleAnswers.push({
                  coincidencesScore: coincidencesInclude * message.split(' ')[i].length,
                  textAnswer: answers[j]
               })
            }
            else {
               possibleAnswers.push({
                  coincidencesScore: 0,
                  textAnswer: answers[j]
               })
            }
            
         } 

      }
      
      const answer = possibleAnswers.reduce((prev, current) => current.coincidencesScore > prev.coincidencesScore ? current: prev);

      return answer.textAnswer;

   }

   generateAnswerSupport(message:Message): Observable<Message> {

      
      return of({
         id: new Date().getTime().toString(),
         date: new Date(),
         message: this._getAnswer(answersSupport, message.message),
         transmitter: Transmitter.Support
      }).pipe(
         delay(2000)
      )
   }

}
