export type NodeType = {
  type: string;
  id: string;
  position: { x: number; y: number };
  data: { label: string; parentsLabel: string };
  style: {
    border: string;
    backgroundColor: string;
    borderRadius: number;
    [x: string]: string | number;
  };
};
