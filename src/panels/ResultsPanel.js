// ResultsPanel.js
import React, { useState } from 'react';

const ResultsPanel = ({ results }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div style={{   width: '100%', backgroundColor: '#f0f0f0', borderTop: '1px solid #ddd' }}>
            <button onClick={toggleCollapse} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>
                {isCollapsed ? 'Показати Результати' : 'Згорнути Результати'}
            </button>
            {!isCollapsed && (
                <div style={{ padding: '10px', maxHeight: '150px', overflowY: 'auto' }}>
                    <pre>{results}</pre>
                </div>
            )}
        </div>
    );
};

export default ResultsPanel;
