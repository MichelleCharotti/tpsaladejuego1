import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta } from '../interfaces/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  
  quizzes: Pregunta[] = [
    {
      country:'Somalia',
      answer: [
        { option: 'Angola', correct: false },
        { option: 'Uruguay', correct: false },
        { option: 'Somalia', correct: true },
        { option: 'Mexico', correct: false }
      ]
    },
    {
      country:'Mexico',
      answer: [
        { option: 'Mexico', correct: true },
        { option: 'Tunez', correct: false },
        { option: 'Puerto Rico', correct: false },
        { option: 'Egipto', correct: false }
      ]
    },
    {
      country:'United Kingdom',
      answer: [
        { option: 'United Kingdom', correct: true },
        { option: 'Egipto', correct: false },
        { option: 'Colombia', correct: false },
        { option: 'United States', correct: false }
      ]
    },
    {
      country:'Puerto Rico',
      answer: [
        { option: 'United States', correct: false },
        { option: 'Puerto Rico', correct: true },
        { option: 'Mexico', correct: false },
        { option: 'Angola', correct: false }
      ]
    },
    {
      country:'United Arab Emirates',
      answer: [
        { option: 'Banglades', correct: false },
        { option: 'United Arab Emirates', correct: true },
        { option: 'China', correct: false },
        { option: 'Camboya', correct: false }
      ]
    },
    {
      country:'Japan',
      answer: [
        { option: 'China', correct: false },
        { option: 'Corea', correct: false },
        { option: 'Japan', correct: true },
        { option: 'Banglades', correct: false }
      ]
    },
    {
      country:'South Africa',
      answer: [
        { option: 'Egipto', correct: false },
        { option: 'Armenia', correct: false },
        { option: 'Camboya', correct: false },
        { option: 'South Africa', correct: true }
      ]
    },
    {
      country:'Brazil',
      answer: [
        { option: 'Peru', correct: false },
        { option: 'Butan', correct: false },
        { option: 'Brazil', correct: true },
        { option: 'Mozambique', correct: false },
      ]
    },
    {
      country:'Jamaica',
      answer: [
        { option: 'Jamaica', correct: true },
        { option: 'Panama', correct: false },
        { option: 'Cuba', correct: false },
        { option: 'Uruguay', correct: false }
      ]
    },
    {
      country:'Cuba',
      answer: [
        { option: 'China', correct: false },
        { option: 'Argentina', correct: false },
        { option: 'Cuba', correct: true },
        { option: 'Alemania', correct: false }
      ]
    }
  ]



 getPaises(){
  return this.quizzes;
}


}
