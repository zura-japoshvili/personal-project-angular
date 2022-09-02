export interface resultsInt {
  results: [
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: number | string,
    incorrect_answers: []
  ]
}
