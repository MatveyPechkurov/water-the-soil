import React  from "react";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../redux/types";
import { BlockForBuilding} from "../Block";
import './styles.css'
import {rainAction} from "../../redux/slice";
import ClassName from 'classnames'


export const PlayingField = () => {
  const dispatch = useDispatch()
  const rows =  useSelector((state: StateType) => state.blocks);
  const isRain =  useSelector((state: StateType) => state.isRain);

  function spendRain(){
    dispatch(rainAction())
  }

  const rainClassName = ClassName({
    container: true,
    "rain--active": isRain
  })

  return (
<div className={"container"}>
  <div className={rainClassName}>
    <div className={"matrix"}>
      {rows.map(function(columns, i){

        return (
          <div className={"matrix_string"} key={`playrown ${i}`}>
            {columns.map(function(block, j){

              return  <BlockForBuilding key={`playcolumn ${j}`}  cell={block} xCord={j} yCord={i}/>;
            })}

          </div>
        )
          })}

    </div>
  <button className={"container_button"} onClick={spendRain}>Rain!</button>
  </div>
</div>

  )
}