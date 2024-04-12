import { createContext } from "react";

export const ScoreContext = createContext({
  answeredLength: 0,
  updateAnsweredLength: () => {},
  correctLength: 0,
});
