// toolbar.js

import { DraggableNode } from "../nodes/draggableNode";
import { nodesConfig } from "../nodes/nodes";

export const PipelineToolbar = () => {
  return (
    <div className="p-5 bg-gray-100">
      <div className="flex flex-row gap-2">
        {Object.entries(nodesConfig).map(([type, config]) => (
          <DraggableNode
            key={type}
            type={type}
            label={config.label}
            icon={config.icon}
          />
        ))}
        {/* below is a static code and the above code snippet is used to make the code dynamic. */}
        {/* <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" /> */}
      </div>
    </div>
  );
};
