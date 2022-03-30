import { generatedBoard } from "../utils/setup";
import { StateType } from "./types";

export const initialState: StateType = {
  blocks: generatedBoard(),
  isRain: false
};
