import { PipelineToolbar } from "./components/toolbar";
import { PipelineUI } from "./components/PipelineUi";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
