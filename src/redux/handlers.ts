import {StateType} from "./types";
import {getRainCords} from "../core/cordFunctions";


export const soilDownCheck = (xCord:number, yCord:number, state:StateType) => {
  if (yCord < 5) {
    return (state.blocks[yCord + 1][xCord].type === "soil");
  }
  return true
}

export function handlerEmpty(xCord:number, yCord: number, state:StateType) {
  if ((state.blocks[yCord][xCord].type === "empty") && soilDownCheck(xCord, yCord, state)) {
    return state.blocks[yCord][xCord].type = "soil"
  }
}

export function handlerSoil(xCord:number, yCord: number, state:StateType) {

  if (state.blocks[yCord-1][xCord].type !== "soil") {
    return state.blocks[yCord][xCord].type = "empty"
  }
}

function drying(state:StateType){
  if (state.isRain){
    for(let i=state.blocks.length-1; i>=0; i--){
      for(let j = 0; j< state.blocks[0].length; j++) {
        const block = state.blocks[i][j]
        if (block.type === "rain"){
          block.type = "empty"
        }
      }
    }
  }
  return state.isRain = false;
}

export const fillRain = (state:StateType) => {
  const rainCords = getRainCords(state.blocks);
  rainCords.forEach(cords => {
    const [y,x] = cords
    state.blocks[y][x].type = 'rain'
  })
  state.isRain = true;
}

export function handlersBlock(xCord:number, yCord:number, state:StateType){
  drying(state)
  switch (state.blocks[yCord][xCord].type){
    case 'empty':
      return handlerEmpty(xCord,yCord,state)
    case 'soil':
      return handlerSoil(xCord,yCord,state)
    case "rain":
      return 'rain'
  }
}


