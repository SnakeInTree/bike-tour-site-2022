import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SegmentList } from "../models";

const initialState : SegmentList = {
  activeSegmentId: -1,
  hoverSegmentId: -1,
  activePoiId: 0
};

export const segmentSlice = createSlice({
  name: "segmentList",
  initialState,
  reducers: {
    updateActiveSegment: (state: SegmentList, action: PayloadAction<number>) => {
      return {...state, activeSegmentId: action.payload, activePoiId: 0};
    },
    updateHoverSegment: (state: SegmentList, action: PayloadAction<number>) => {
      return {...state, hoverSegmentId: action.payload};
    },
    updateActivePoiId: (state: SegmentList, action: PayloadAction<number>) => {
      return {...state, activePoiId: action.payload};
    },
  },
});

export const { updateActiveSegment, updateHoverSegment, updateActivePoiId } = segmentSlice.actions;
export default segmentSlice.reducer;