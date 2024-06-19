// draggableNode.js

import React, { createElement } from "react";
import { MdOutlineInput } from "react-icons/md";

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`mb-2 flex gap-2 ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <div className="p-2 py-3 border-[1px] border-gray-300 rounded-xl w-[70px] flex flex-col justify-center items-center gap-1">
        {createElement(icon)}
        {/* <MdOutlineInput className="text-2xl text-black/60" /> */}
        <p className="text-[12px] font-semibold text-black/60">{label}</p>
      </div>
    </div>
  );
};
