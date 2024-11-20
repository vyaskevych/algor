import { useState, useCallback, useEffect } from 'react';
import { useDrop } from 'react-dnd';

import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  // useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import {
  BeginNode,
  EndNode,
  RectangleNode,
  DiamondNode,
  LoopStartNode,
  LoopEndNode,
  InputNode,
  OutputNode,
} from '../components/CustomNodes';
import ResultsPanel from './ResultsPanel';
import collectTextByConnections from '../utils/collectText';
import { runCode } from '../utils/runCode';
import { addStatements, addStatementsTest } from '../utils/addStatements';


const nodeTypes = {
  begin: BeginNode,
  end: EndNode,
  rectangle: RectangleNode,
  diamond: DiamondNode,
  loopStart: LoopStartNode,
  loopEnd: LoopEndNode,
  inputData: InputNode,
  outputData: OutputNode,
};

const initialNodes = [];

const initialEdges = [];



const DiagramArea = ({ setCode }) => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [rfInstance, setRfInstance] = useState(null);
  //const {setViewport} = useReactFlow();
  const [results, setResults] = useState('');

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  // useEffect(() => {
  //   const collectedText = collectTextByConnections(nodes, edges, addStatementsTest);
  //   setCode(collectedText);
  // }, [edges, nodes])

  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem('flow', JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem('flow'));

      if (flow) {
        // const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        //setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes]);

  const addBlock = useCallback(
    (item, clientOffset) => {
      const position = { x: clientOffset.x - 500, y: clientOffset.y };

      const newNode = {
        id: `${item.type}-${Date.now()}`,
        type: item.type,
        position,
        data: { label: `${item.label}` },
      };

      setNodes((prev) => [...prev, newNode]);
    },
    [setNodes]
  );

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'BLOCK',
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      addBlock(item, clientOffset);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleRunCode = () => {
    const collectedText = collectTextByConnections(nodes, edges, addStatements);
    const result = runCode(collectedText);
    setResults(result);
  };

  const handleTestCode = () => {
    const collectedText = collectTextByConnections(nodes, edges, addStatementsTest);
    setCode(collectedText);
  }

  return (
    <div ref={drop}
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100vh',
        backgroundColor: isOver ? '#f0f0f0' : '#fff',
        position: 'relative',
      }}>
      <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10 }}>
        <button onClick={handleRunCode} disabled={!nodes.length || !edges.length}>Виконати</button>
        <button onClick={handleTestCode} disabled={!nodes.length || !edges.length}>Тест</button>
        <button onClick={onSave} disabled={!nodes.length || !edges.length}>Зберегти</button>
        <button onClick={onRestore}>Відновити</button>
      </div>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setRfInstance}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
      <ResultsPanel results={results} />
    </div>
  );
}


export default DiagramArea;