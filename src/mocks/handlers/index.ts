import { authHandler } from "./authHandler";
import { exampleHandler } from "./examHandler";

export const handlers = [
  ...exampleHandler,
  ...authHandler,
];
