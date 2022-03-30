export type BlockType = {
  type: string
}
export interface ActionType {
  xCord: number;
  yCord: number;
}

export interface StateType {
  blocks: Array<Array<BlockType>>,
  isRain?: boolean,
}
