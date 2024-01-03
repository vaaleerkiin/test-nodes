import { createSlice } from "@reduxjs/toolkit";
import { EdgeType } from "../Types/edge";

export const edgeSlice = createSlice({
  name: "edge",
  initialState: { edges: [] } as {
    edges: Array<EdgeType>;
  },
  reducers: {
    renderAdges: (state, { payload }: { payload: number }) => {
      const edges = [];

      for (let i = 0; i <= payload - 1; i += 1) {
        edges.push({
          id: `e${i}-${i + 1}`,
          source: `${i}`,
          target: `${i + 1}`,
          type: "smoothstep",
        });
      }

      return { edges };
    },
  },
});

export const { renderAdges } = edgeSlice.actions;
