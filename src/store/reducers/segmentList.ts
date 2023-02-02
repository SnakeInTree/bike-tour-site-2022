import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SegmentList } from "../models";

const initialState : SegmentList = {
  activeSegmentId: -1
};

export const segmentSlice = createSlice({
  name: "segmentList",
  initialState,
  reducers: {
    updateActiveSegment: (state: SegmentList, action: PayloadAction<number>) => {
      return {...state, activeSegmentId: action.payload};
    },
  },
});

export const { updateActiveSegment } = segmentSlice.actions;
export default segmentSlice.reducer;