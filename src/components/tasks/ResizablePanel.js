import React from 'react';

const ResizablePanel = ({ width, isCollapsed, onResize, children }) => {
  const handleResize = (e) => {
    const newWidth = ((window.innerWidth - e.clientX) / window.innerWidth) * 100;
    onResize(newWidth < 10 ? 10 : newWidth > 70 ? 70 : newWidth);
  };

  return (
    <div className="resizable-panel" style={{ width: isCollapsed ? '50px' : `${width}%` }}>
      {children}
      <div
        className="resizer"
        onMouseDown={(e) => {
          e.preventDefault();
          document.addEventListener('mousemove', handleResize);
          document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleResize);
          });
        }}
      />
    </div>
  );
};

export default ResizablePanel;
