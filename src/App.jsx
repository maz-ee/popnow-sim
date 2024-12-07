import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoxSet from "./components/BoxSet";
import CharacterBar from "./components/CharacterBar";
import "./index.css";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <CharacterBar />{" "}
        {/* Scrollable, resizable character sidebar w/ draggable characters*/}
      </div>
    </DndProvider>
  );
};
export default App;
