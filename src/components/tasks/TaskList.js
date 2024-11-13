import React from 'react';

const TaskList = ({ tasks, selectedTask, onSelectTask, width }) => (
  <div className="task-list">
    <h3>Список задач</h3>
    <ul className="task-items" style={{ gridTemplateColumns: width > 20 ? '1fr 1fr' : '1fr' }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${selectedTask?.id === task.id ? 'selected' : ''}`}
          onClick={() => onSelectTask(task)}
        >
          {task.title}
        </li>
      ))}
    </ul>
  </div>
);

export default TaskList;
