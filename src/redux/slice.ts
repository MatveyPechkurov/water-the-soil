import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./initialState";
import {fillRain, handlersBlock} from "./handlers";
import {ActionType} from "./types";

export const matrixSlice = createSlice({
  name: 'matrix',
  initialState,
  reducers: {
    changeSoilAction(state, action: PayloadAction<ActionType>){
      const {xCord, yCord} = action.payload;
      handlersBlock(xCord,yCord,state);
    },
    rainAction(state){
      fillRain(state)
    }
  }
})

export const {changeSoilAction,rainAction} = matrixSlice.actions
export default  matrixSlice.reducer