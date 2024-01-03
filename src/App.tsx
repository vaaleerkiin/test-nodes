import { useDispatch, useSelector } from "react-redux";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { RootState } from "./redux/store";

import selectNode from "./selectNode";
import { useEffect } from "react";
import { renderAdges } from "./redux/edgeSlice";

const nodeTypes = {
  selectNode,
};

function App() {
  const distpath = useDispatch();
  const nodes = useSelector((state: RootState) => state.nodes.nodes);
  const edges = useSelector((state: RootState) => state.edge.edges);

  useEffect(() => {
    distpath(renderAdges(nodes.length - 1));
  }, [distpath, nodes]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default App;
