import { http, HttpResponse } from "msw";
import { questions } from "../const/questions";
import { quiz } from "../const/quiz";

export const styleHandler = [
  http.get(`/api/style`, () => {
    return HttpResponse.json({
      data: questions,
    });
  })
]

export const quizHandler = [
  http.get(`/api/quiz`, () => {
    return HttpResponse.json({
      data: quiz,
    });
  })
]