import { createSlice } from "@reduxjs/toolkit";

export const edgeSlice = createSlice({
  name: "edge",
  initialState: { edges: [] } as {
    edges: Array<{
      id: string;
      source: string;
      target: string;
      type?: string;
    }>;
  },
  reducers: {
    renderAdges: (state, { payload }: { payload: number }) => {
      const edges = [];

      for (let i = 0; i <= payload - 1; i += 1) {
        console.log(i);

        edges.push({
          id: `e${i}-${i + 1}`,
          source: `${i}`,
          target: `${i + 1}`,
          type: "smoothstep",
        });
      }
      console.log(edges);
      return { edges };
    },
  },
});

export const { renderAdges } = edgeSlice.actions;
