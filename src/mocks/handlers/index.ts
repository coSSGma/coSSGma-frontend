import { authHandler } from "./authHandler";
import { exampleHandler } from "./examHandler";
import { memberHandler } from "./memberHandler";
import { quizHandler, styleHandler } from "./styleHandler";

export const handlers = [
  ...exampleHandler,
  ...authHandler,
  ...styleHandler,
  ...quizHandler,
  ...memberHandler,
];
