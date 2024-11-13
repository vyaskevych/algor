import React, { useState } from 'react';
import TaskList from '../components/tasks/TaskList';
import TaskContent from '../components/tasks/TaskContent';
import ResizablePanel from '../components/tasks/ResizablePanel';
import { createFunc, myEqual } from '../utils/runTest';
import './TaskPanel.css';

const TaskPanel = ({ tasks, code }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);
  const [width, setWidth] = useState(30);
  const [testResults, setTestResults] = useState('');
  const [countTests, setCountTests] = useState(null);

  const handleCollapse = () => setIsCollapsed(!isCollapsed);

  const handleSelectTask = (task) => {
    setSelectedTask(task);
    setTestResults('');
    setCountTests(null);
  };

  const executeTest = () => {
    if (!selectedTask) return;

    let total = 0, passed = 0;
    const f = createFunc(selectedTask.arg, code);
    let results = '';

    selectedTask.execute((rec, exp, spec) => {
      const result = myEqual(rec, exp, spec);
      results += result;
      total++;
      if (result.includes('OK')) passed++;
      return result;
    }, f);

    setTestResults(results);
    setCountTests({ total, passed });
  };

  return (
    <ResizablePanel width={width} isCollapsed={isCollapsed} onResize={setWidth}>
      <button onClick={handleCollapse} className="collapse-btn">
        {isCollapsed ? '<<' : '>>'}
      </button>

      {!isCollapsed && (
        <>
          <TaskList tasks={tasks} selectedTask={selectedTask} onSelectTask={handleSelectTask} width={width} />
          <TaskContent selectedTask={selectedTask} executeTest={executeTest} countTests={countTests} testResults={testResults} />
        </>
      )}
    </ResizablePanel>
  );
};

export default TaskPanel;
