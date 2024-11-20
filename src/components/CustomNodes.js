// CustomNodes.js
import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const commonNodeStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  textAlign: 'center',
  width: '98%',
  height: '97%',
};

const handleStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const clipPaths = {
  diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  loopStart: 'polygon(76% 0, 100% 24%, 100% 100%, 0 100%, 0 24%, 24% 0)',
  loopEnd: 'polygon(0 0, 100% 0, 100% 76%, 76% 100%, 24% 100%, 0 76%)',
  inOut: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
};

const EditableTextarea = ({ label, onLabelChange }) => {
  const [value, setValue] = useState(label);

  const handleChange = (e) => {
    setValue(e.target.value);
    onLabelChange(e.target.value);
  };

  return (
    <textarea
      placeholder={value}
      onChange={handleChange}
      style={{
        border: 'none',
        background: 'transparent',
        textAlign: 'center',
        width: '100%',
        height: '80%',
        resize: 'none',
        outline: 'none',
        fontSize: '14px',
      }}
    />
  );
};

export const BeginNode = ({ data }) => (
  <div style={{ ...commonNodeStyle, alignItems: 'center', borderRadius: '120px', background: '#FFD700', width: '150px', height: '60px', border: '2px solid black' }}>
    {data.label}
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export const EndNode = ({ data }) => (
  <div style={{ ...commonNodeStyle, alignItems: 'center', borderRadius: '120px', background: '#FFD700', width: '150px', height: '60px', border: '2px solid black' }}>
    {data.label}
    <Handle type="target" position={Position.Top} />
  </div>
);

export const RectangleNode = ({ data }) => (
  <div style={{ ...handleStyle, background: '#ADD8E6', border: '1px solid black', width: '150px', height: '70px' }}>
    <EditableTextarea label={data.label} onLabelChange={(value) => (data.label = value)} />
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export const InputNode = ({ data }) => (
  <div style={{ width: '170px', height: '80px' }}>
    <div style={{ ...handleStyle, background: '#000', clipPath: clipPaths.inOut }}>
      <div style={{ ...commonNodeStyle, background: '#FFB6C1', clipPath: clipPaths.inOut }}>
        <EditableTextarea label={data.label} onLabelChange={(value) => (data.label = value)} />
      </div>
    </div>
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export const OutputNode = ({ data }) => (
  <div style={{ width: '170px', height: '80px' }}>
    <div style={{ ...handleStyle, background: '#000', clipPath: clipPaths.inOut }}>
      <div style={{ ...commonNodeStyle, background: '#FFB6C1', clipPath: clipPaths.inOut }}>
        <EditableTextarea label={data.label} onLabelChange={(value) => (data.label = value)} />
      </div>
    </div>
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export const DiamondNode = ({ data }) => (
  <div style={{ width: '130px', height: '130px' }}>
    <div style={{ ...handleStyle, background: '#000', clipPath: clipPaths.diamond }}>
      <div style={{ ...commonNodeStyle, background: '#90EE90', clipPath: clipPaths.diamond }}>
        <EditableTextarea label={data.label} onLabelChange={(value) => (data.label = value)} />
      </div>
    </div>
    <Handle type="target" position={Position.Top} />
    <Handle id="y" type="source" position={Position.Bottom} />
    <Handle id="n" type="source" position={Position.Right} />
  </div>
);

export const LoopStartNode = ({ data }) => (
  <div style={{ width: '150px', height: '80px' }}>
    <div style={{ ...handleStyle, background: '#000', clipPath: clipPaths.loopStart }}>
      <div style={{ ...commonNodeStyle, background: '#FFE4B5', clipPath: clipPaths.loopStart }}>
        <EditableTextarea label={data.label} onLabelChange={(value) => (data.label = value)} />
      </div>
    </div>
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export const LoopEndNode = ({ data }) => (
  <div style={{ width: '150px', height: '80px' }}>
    <div style={{ ...handleStyle, background: '#000', clipPath: clipPaths.loopEnd }}>
      <div style={{ ...commonNodeStyle, background: '#FFE4B5', clipPath: clipPaths.loopEnd, alignItems: 'center' }}>
        {data.label}
      </div>
    </div>
    <Handle type="target" position={Position.Top} />
    <Handle type="source" position={Position.Bottom} />
  </div>
);
