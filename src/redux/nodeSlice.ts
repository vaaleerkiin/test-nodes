import { createSlice } from "@reduxjs/toolkit";
import { NodeType } from "../Types/node";

export const nodeSlice = createSlice({
  name: "nodes",
  initialState: {
    nodes: [
      {
        type: "selectNode",
        id: "0",
        position: { x: 125, y: 100 },
        data: { label: "0", parentsLabel: "" },
        style: {
          border: "1px solid #777",
          backgroundColor: "white",
          borderRadius: 5,
        },
      },
    ],
    currentNodeId: 1,
  } as { nodes: NodeType[]; currentNodeId: number },
  reducers: {
    addNode: (
      state,
      { payload }: { payload: { label: string; currentId: string } }
    ) => {
      let currentId = state.currentNodeId;
      const nodes = state.nodes.map((el) =>
        el.id === payload.currentId
          ? {
              ...el,
              data: {
                parentsLabel: el.data.parentsLabel,
                label: payload.label,
              },
            }
          : el
      );

      if (nodes.length - 1 !== Number(payload.currentId)) {
        currentId = Number(payload.currentId) + 1;
        nodes.splice(currentId);
      }

      return {
        nodes: [
          ...nodes,
          {
            type: "selectNode",
            id: `${currentId}`,
            position: {
              x: 125 * (currentId + 1),
              y: 100 * (currentId + 1),
            },
            data: {
              label: "0",
              parentsLabel: `${nodes[nodes.length - 1].data.parentsLabel}${
                payload.label
              }-`,
            },
            style: {
              border: "1px solid #777",
              backgroundColor: "white",
              borderRadius: 5,
            },
          },
        ],
        currentNodeId: currentId + 1,
      };
    },
  },
});

export const { addNode } = nodeSlice.actions;
