import React from "react";
import {BlockType} from "../../redux/types";
import {useDispatch} from "react-redux";
import {changeSoilAction} from "../../redux/slice";
import {Block, Wrapper} from "./styles";

export type Props = {
  cell: BlockType;
  xCord: number;
  yCord: number;
}

export const BlockForBuilding: React.FC<Props> = (props) => {
  const {cell, xCord, yCord} = props

  const dispatch = useDispatch();
  function changeType() : void {
    dispatch(changeSoilAction({xCord, yCord}))
  }

  return<Wrapper> <Block onClick={changeType}  type={cell.type} /></Wrapper>;
  }