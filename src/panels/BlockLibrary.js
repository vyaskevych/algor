// BlockLibrary.js
import React from 'react';
import { useDrag } from 'react-dnd';

const blocks = [
    { type: 'begin', label: 'Початок' },
    { type: 'end', label: 'Кінець' },
    { type: 'rectangle', label: 'Присвоювання' },
    { type: 'inputData', label: 'Введення' },
    { type: 'outputData', label: 'Виведення' },
    { type: 'diamond', label: 'Рішення' },
    { type: 'loopStart', label: 'Початок циклу' },
    { type: 'loopEnd', label: 'Кінець циклу' },
];

const DraggableBlock = ({ type, label }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'BLOCK',
        item: { type, label },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                margin: '10px',
                padding: '10px',
                backgroundColor: '#eee',
                border: '1px solid #ccc',
                borderRadius: '4px',
                textAlign: 'center',
            }}
        >
            {label}
        </div>
    );
};

const BlockLibrary = () => {
    return (
        <div
            style={{
                boxSizing: 'border-box',
                width: '200px',
                padding: '10px',
                borderRight: '1px solid #ddd',
                backgroundColor: '#f9f9f9',
                height: '100vh',
                overflowY: 'auto'
            }}
        >
            <h3>Бібліотека блоків</h3>
            {blocks.map((block) => (
                <DraggableBlock key={block.type} type={block.type} label={block.label} />
            ))}
        </div>
    );
};

export default BlockLibrary;
