import React, { useState } from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DiagramArea from './panels/DiagramArea';
import BlockLibrary from './panels/BlockLibrary';
import TaskPanel from './panels/TaskPanel';
import { tasks } from './data/tasks';



function App() {
  const [code, setCode] = useState(null);
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <BlockLibrary />
        <DiagramArea setCode={setCode} />
        <TaskPanel tasks={tasks} code={code} />
      </div>
    </DndProvider>
  );
}

export default App;
