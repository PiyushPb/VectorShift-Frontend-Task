import { FaDatabase } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineInput } from "react-icons/md";
import { MdOutlineOutput } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

export const nodesConfig = {
  customInput: {
    label: "Input",
    icon: MdOutlineInput,
    handles: [{ type: "source", position: "right" }],
    fields: [
      { type: "text", label: "Field name", name: "input" },
      {
        type: "select",
        label: "Type",
        name: "type",
        options: ["text", "image"],
      },
    ],
  },
  customOutput: {
    label: "Output",
    icon: MdOutlineOutput,
    handles: [{ type: "target", position: "left" }],
    fields: [
      { type: "text", label: "Input", name: "input" },
      {
        type: "select",
        label: "Type",
        name: "type",
        options: ["text", "image"],
      },
    ],
  },
  llm: {
    label: "LLM",
    icon: LuBrainCircuit,
    handles: [
      {
        type: "target",
        position: "left",
        style: { top: `${100 / 3}%` },
        id: "handle-1",
      },
      {
        type: "target",
        position: "left",
        style: { top: `${200 / 3}%` },
        id: "handle-2",
      },
      { type: "source", position: "right", id: "handle-3" },
    ],
    fields: [{ type: "text", label: "Input", name: "input" }],
  },
  text: {
    label: "Text",
    icon: IoDocumentTextOutline,
    handles: [{ type: "source", position: "right" }],
    fields: [{ type: "text", label: "Text", name: "text" }],
    value: "{{test}}",
  },
};
