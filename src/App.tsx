import "./App.css";
import BlockNoteEditorComponent from "./components/BlockNoteEditorComponent";

function App() {
  return (
    <div className="App">
      <h1>BlockNote Editor</h1>
      <p>
        Made with &lt; / &gt; by <b id="name"> Maitra Khatri </b>
      </p>
      <div id="editor">
        <BlockNoteEditorComponent />
      </div>
    </div>
  );
}

export default App;
