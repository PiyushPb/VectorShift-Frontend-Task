import React, { createElement, useEffect, useState } from "react";
import { Handle, useReactFlow } from "reactflow";

const BaseNode = (props) => {
  const [nodeData, setNodeData] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (props.data) {
      setNodeData(props.data.nodeData || {});
      // console.log("Data received in BaseNode:", props.data);
    } else {
      console.log("No data received in BaseNode");
    }
  }, [props.data]);

  const handleNodeClick = (event) => {
    if (event.target.tagName === "INPUT" || event.target.tagName === "SELECT") {
      event.stopPropagation();
      return;
    }
    setIsClicked(true);
  };

  const handleEdgeDragStart = () => {
    setIsDragging(true);
  };

  const handleEdgeDragEnd = () => {
    setIsDragging(false);
    setIsClicked(false);
  };

  const handleInteractionStart = () => {
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
  };

  const nodeClasses = `max-w-[350px] min-w-[200px] p-1 shadow-lg rounded-md border-[2px] bg-white ${
    isDragging || isClicked
      ? "bg-green-200 border-green-300"
      : isInteracting
      ? "border-purple-300"
      : "border-gray-300"
  } group`;

  return (
    <div
      className={nodeClasses}
      onMouseDown={handleNodeClick}
      onMouseUp={handleEdgeDragEnd}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
    >
      {/* -------------- Load handles -------------- */}
      {nodeData.handles &&
        nodeData.handles.map((handle, index) => (
          <Handle
            key={index}
            type={handle.type}
            position={handle.position}
            id={handle.id || undefined}
            style={{
              ...handle.style,
              backgroundColor: isDragging ? "green" : "gray",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
            }}
            className={`w-[10px] h-[10px] rounded-[50%] ${
              isDragging ? "bg-green-500" : "bg-gray-500"
            }`}
            onMouseDown={handleEdgeDragStart}
            onMouseUp={handleEdgeDragEnd}
          />
        ))}

      {/* -------------- Header -------------- */}
      <div className="w-full p-1 flex justify-start items-center gap-1">
        {nodeData.icon &&
          createElement(nodeData.icon, {
            className: "text-[10px] group-hover:text-purple-400",
          })}
        <p className="text-[10px] group-hover:text-purple-400">
          {nodeData.label || "Node"}
        </p>
      </div>
      {/* -------------- Body -------------- */}
      <div className="flex items-start flex-col p-1 gap-1">
        {nodeData.fields &&
          nodeData.fields.map((field, index) => {
            switch (field.type) {
              case "text":
                return (
                  <div key={index} className="flex flex-col w-full">
                    <label
                      htmlFor={field.name}
                      className="text-[8px] text-black/70"
                    >
                      {field.label}
                    </label>
                    <input
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.value}
                      className="w-full outline-none text-[10px] border-[1px] border-gray-300 rounded-md p-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleInteractionStart();
                      }}
                      onBlur={handleInteractionEnd}
                      onFocus={handleInteractionStart}
                    />
                  </div>
                );
              case "select":
                return (
                  <div key={index} className="flex flex-col w-full">
                    <label
                      htmlFor={field.name}
                      className="text-[8px] text-black/70"
                    >
                      {field.label}
                    </label>
                    <select
                      id={field.name}
                      name={field.name}
                      className="w-full outline-none text-[10px] border-[1px] border-gray-300 rounded-md p-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleInteractionStart();
                      }}
                      onBlur={handleInteractionEnd}
                      onFocus={handleInteractionStart}
                    >
                      {field.options.map((option, idx) => (
                        <option key={idx} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              default:
                return null;
            }
          })}
      </div>
    </div>
  );
};

export default BaseNode;
