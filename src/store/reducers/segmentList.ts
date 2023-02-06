import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SegmentList } from "../models";

const initialState : SegmentList = {
  activeSegmentId: -1,
  hoverSegmentId: -1
};

export const segmentSlice = createSlice({
  name: "segmentList",
  initialState,
  reducers: {
    updateActiveSegment: (state: SegmentList, action: PayloadAction<number>) => {
      return {...state, activeSegmentId: action.payload};
    },
    updateHoverSegment: (state: SegmentList, action: PayloadAction<number>) => {
      return {...state, hoverSegmentId: action.payload};
    }
  },
});

export const { updateActiveSegment, updateHoverSegment } = segmentSlice.actions;
export default segmentSlice.reducer;