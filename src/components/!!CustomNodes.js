import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Овал (Початок/Кінець)
export const BeginNode = ({ data }) => (
    <div
        style={{
            width: '120px',
            height: '60px',
            borderRadius: '120px',
            background: '#FFD700',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid black',
            textAlign: 'center',
        }}
    >
        {data.label}
        <Handle type="source" position={Position.Bottom} />
    </div>
);

export const EndNode = ({ data }) => (
    <div
        style={{
            width: '120px',
            height: '60px',
            borderRadius: '120px',
            background: '#FFD700',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid black',
            textAlign: 'center',
        }}
    >
        {data.label}
        <Handle type="target" position={Position.Top} />
    </div>
);


// Прямокутник (Присвоювання)
export const RectangleNode = ({ data }) => {
    const [label, setLabel] = useState(data.label);

    return (
        <div
            style={{
                // padding: '20px',
                width: '140px',
                height: '80px',
                background: '#ADD8E6',
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                textAlign: 'center',
            }}
        >
            <textarea
                placeholder={label}
                onChange={(e) => {
                    setLabel(e.target.value);
                    data.label = e.target.value; // Оновлюємо дані
                }}
                style={{
                    border: 'none',
                    background: 'transparent',
                    textAlign: 'center',
                    width: '100%',
                    height: '80%', // Висота для багаторядкового введення
                    resize: 'none', // Вимкнення зміни розміру
                    outline: 'none',
                    fontSize: '14px', // Збільшення шрифту для зручності читання
                }}
            />
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};

// Введення
export const InputNode = ({ data }) => {
    const [label, setLabel] = useState(data.label);
    return (
        <div
            style={{
                width: '160px',
                height: '80px',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#000',
                    clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '98%',
                        height: '97%',
                        background: '#FFB6C1',
                        clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        textAlign: 'center',
                    }}
                >
                    <textarea
                        placeholder={label}
                        onChange={(e) => {
                            setLabel(e.target.value);
                            data.label = e.target.value; // Оновлюємо дані
                        }}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            textAlign: 'center',
                            width: '100%',
                            height: '80%', // Висота для багаторядкового введення
                            resize: 'none', // Вимкнення зміни розміру
                            outline: 'none',
                            fontSize: '14px', // Збільшення шрифту для зручності читання
                        }}
                    />
                </div>
            </div>
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};

// Введення
export const OutputNode = ({ data }) => {
    const [label, setLabel] = useState(data.label);
    //background: '#FFB6C1',
    return (
        <div
            style={{
                width: '160px',
                height: '80px',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#000',
                    clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '98%',
                        height: '97%',
                        background: '#FFB6C1',
                        clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        textAlign: 'center',
                    }}
                >
                    <textarea
                        placeholder={label}
                        onChange={(e) => {
                            setLabel(e.target.value);
                            data.label = e.target.value; // Оновлюємо дані
                        }}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            textAlign: 'center',
                            width: '100%',
                            height: '80%', // Висота для багаторядкового введення
                            resize: 'none', // Вимкнення зміни розміру
                            outline: 'none',
                            fontSize: '14px', // Збільшення шрифту для зручності читання
                        }}
                    />
                </div>
            </div>
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};

// Ромб (Рішення)
export const DiamondNode = ({ data }) => {
    const [label, setLabel] = useState(data.label);

    return (
        // <div
        //     style={{
        //         width: '120px',
        //         height: '120px',
        //         transform: 'rotate(45deg)',
        //         background: '#90EE90',
        //         border: '2px solid black',
        //         display: 'flex',
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         textAlign: 'center',
        //         position: 'relative', // Для точного позиціонування точок
        //     }}
        // >
        //     <textarea
        //         value={label}
        //         onChange={(e) => {
        //             setLabel(e.target.value);
        //             data.label = e.target.value; // Оновлюємо дані
        //         }}
        //         style={{
        //             border: 'none',
        //             background: 'transparent',
        //             textAlign: 'center',
        //             width: '100%',
        //             height: '100%', // Висота для багаторядкового введення
        //             resize: 'none', // Вимкнення зміни розміру
        //             outline: 'none',
        //             fontSize: '14px', // Збільшення шрифту для зручності читання
        //             transform: 'rotate(-45deg)', // Вирівнювання тексту в ромбі
        //         }}
        //     />

        //     {/* Вхід у верхньому куті */}
        //     <Handle
        //         type="target"
        //         position={Position.Top}
        //         style={{
        //             position: 'absolute',
        //             top: '-4px', // Відступ від верхньої границі
        //             left: '0',
        //         }}
        //     />

        //     {/* Вихід "Так" у нижньому лівому куті */}
        //     <Handle
        //         id="y"
        //         type="source"
        //         position={Position.Bottom}
        //         style={{
        //             position: 'absolute',
        //             bottom: '-4px', // Відступ від нижньої границі
        //             left: '100%',
        //         }}
        //     />

        //     {/* Вихід "Ні" у правому куті */}
        //     <Handle
        //         id="n"
        //         type="source"
        //         position={Position.Right}
        //         style={{
        //             position: 'absolute',
        //             top: '0', // Центрування вертикально
        //             right: '-4px', // Відступ від правої границі              
        //         }}
        //     />
        // </div>

        <div
            style={{
                width: '120px',
                height: '120px',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#000',
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '98%',
                        height: '97%',
                        background: '#90EE90',
                        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        textAlign: 'center',
                    }}
                >
                    <textarea
                        placeholder={label}
                        onChange={(e) => {
                            setLabel(e.target.value);
                            data.label = e.target.value; // Оновлюємо дані
                        }}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            textAlign: 'center',
                            width: '100%',
                            height: '80%', // Висота для багаторядкового введення
                            resize: 'none', // Вимкнення зміни розміру
                            outline: 'none',
                            fontSize: '14px', // Збільшення шрифту для зручності читання
                        }}
                    />
                </div>
            </div>
            <Handle type="target" position={Position.Top} />
            <Handle id="y" type="source" position={Position.Bottom} />
            <Handle id="n" type="source" position={Position.Right} />
        </div>
    );
};

// Прямокутник із зрізаними верхніми кутами (Початок циклу)
export const LoopStartNode = ({ data }) => {
    const [label, setLabel] = useState(data.label);

    return (
        <div
            style={{
                width: '160px',
                height: '80px',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#000',
                    clipPath: 'polygon(76% 0, 100% 24%, 100% 100%, 0 100%, 0 24%, 24% 0)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '98%',
                        height: '97%',
                        background: '#FFE4B5',
                        clipPath: 'polygon(76% 0, 100% 24%, 100% 100%, 0 100%, 0 24%, 24% 0)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        textAlign: 'center',
                    }}
                >
                    <textarea
                        placeholder={label}
                        onChange={(e) => {
                            setLabel(e.target.value);
                            data.label = e.target.value; // Оновлюємо дані
                        }}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            textAlign: 'center',
                            width: '100%',
                            height: '80%', // Висота для багаторядкового введення
                            resize: 'none', // Вимкнення зміни розміру
                            outline: 'none',
                            fontSize: '14px', // Збільшення шрифту для зручності читання
                        }}
                    />

                </div>

            </div>
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};

// Прямокутник із зрізаними нижніми кутами (Кінець циклу)
export const LoopEndNode = ({ data }) => {
    const [label, setLabel] = useState(data.label);

    return (
        <div
            style={{
                width: '160px',
                height: '80px',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#000',
                    clipPath: 'polygon(0 0, 100% 0, 100% 76%, 76% 100%, 24% 100%, 0 76%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '98%',
                        height: '97%',
                        background: '#FFE4B5',
                        clipPath: 'polygon(0 0, 100% 0, 100% 76%, 76% 100%, 24% 100%, 0 76%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    {data.label}
                </div>
            </div>

            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};
