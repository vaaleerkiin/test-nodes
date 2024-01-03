import { memo } from "react";
import { useDispatch } from "react-redux";

import { Handle, Position } from "reactflow";
import { addNode } from "./redux/nodeSlice";

const options = [
  { value: "0", label: "Виберіть значення" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
];

export default memo(
  ({
    data,
    id,
  }: {
    data: { label: string; value: string; parentsLabel: string };
    id: string;
  }) => {
    const dispath = useDispatch();
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispath(addNode({ label: e.target.value, currentId: id }));
    };

    return (
      <>
        {id !== "0" && <Handle type="target" position={Position.Top} />}
        {console.log(data.label)}
        <select
          className="select"
          onChange={onChange}
          defaultValue={data.label}
        >
          {options.map((el) => (
            <option
              key={el.value}
              disabled={el.value === "0"}
              value={`${el.value}`}
            >
              {el.value !== "0" && data.parentsLabel}
              {el.label}
            </option>
          ))}
        </select>
        <Handle type="source" position={Position.Bottom} />
      </>
    );
  }
);
