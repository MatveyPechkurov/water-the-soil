import {BlockType} from "../redux/types";
import {isNil} from "lodash";
type Cords = [number,number]

export function getRainCords(blocks:BlockType[][]) {
  let firstSoilCords: Cords | null = null;
  let rainPlaceFound = false
  let rainCords: Cords[] = [];
  const numberOfRows = blocks.length;
  const numberOfColumns = blocks[0].length;
  for(let i=numberOfRows-1; i>=0; i--){
    for(let j = 0; j< numberOfColumns; j++) {
      const block = blocks[i][j]
      if(block.type === "soil"){
        if (firstSoilCords){
          let secondSoilCords: Cords = [i, j];

          const rowRainCords = calculateRowRainCords(firstSoilCords, secondSoilCords)
          if(rowRainCords.length) {
            rainCords = rainCords.concat(rowRainCords)
            rainPlaceFound = true;
          }
          firstSoilCords = secondSoilCords
          continue;
        }
        firstSoilCords = [i,j]
        continue
      }
      if ( i !==numberOfRows-1 && !rainPlaceFound && j === numberOfColumns - 1){
        return rainCords
      }
    }
    firstSoilCords = null;
  }
  return rainCords
}

function calculateRowRainCords(firstSoilCords?: Cords, secondSoilCords?: Cords): Cords[]{
  const rainCords: Cords[] = [];
  if (isNil(firstSoilCords)||isNil(secondSoilCords)){
    return rainCords;
  }
  const [row, firstSoilColumn] = firstSoilCords;
  const [, secondSoilColumn] = secondSoilCords;
  for (let i =firstSoilColumn+1;i<secondSoilColumn; i++){
    rainCords.push([row,i])
  }
  return rainCords

}



