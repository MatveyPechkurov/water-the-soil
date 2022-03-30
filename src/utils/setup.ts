import {BlockType} from "../redux/types";

const stateBlock: BlockType = {type: 'empty'}
export function generatedBoard() : BlockType[][] {
  let arr: BlockType[][] = [[]];
  for (let i = 0; i < 6; i++) {
    arr[i] = []
    for(let j = 0; j < 12; j++) {
      arr[i][j] = stateBlock;
    }
  }return arr
}