import React, { useState } from 'react';

const TaskContent = ({ selectedTask, executeTest, countTests, testResults }) => {
  const [iframeHeight, setIframeHeight] = useState('auto');

  const adjustIframeHeight = (e) => {
    const iframe = e.target;
    const contentHeight = iframe.contentWindow.document.body.scrollHeight;
    setIframeHeight(contentHeight + 35 + 'px');
  };

  return (
    <div className="task-content">
      <div className="task-header">
        <h3>{selectedTask?.title}</h3>
        <button onClick={executeTest}>Перевірити</button>
      </div>
      {selectedTask ? (
        <>
          {selectedTask.htmlContent ? (
            <iframe
              srcDoc={selectedTask.htmlContent}
              style={{ width: '100%', height: iframeHeight, border: 'none' }}
              title="Task Content"
              onLoad={adjustIframeHeight}
            />
          ) : selectedTask.url ? (
            <iframe
              src={selectedTask.url}
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Task Content"
            />
          ) : (
            <p>No content available</p>
          )}
          {countTests && <p className="test-count">{countTests.passed}/{countTests.total} тестів пройдено успішно!</p>}
          <div dangerouslySetInnerHTML={{ __html: testResults }} />
        </>
      ) : (
        <p>Select a task to see the details</p>
      )}
    </div>
  );
};

export default TaskContent;
