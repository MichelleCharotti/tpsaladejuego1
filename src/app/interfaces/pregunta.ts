export interface Pregunta {
    country: string;
    question: string;
    answer: { option: string, correct: boolean } [];
}
