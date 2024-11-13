export function addStatements(node) {
    let result = '';
    switch (node.type) {
        case 'loopStart':
            result = `${node.data.label} {\n`;
            break;
        case 'loopEnd':
            result = `\n}\n`;
            break;
        case 'diamond':
            result = `if (${node.data.label}) {\n`;
            break;
        case 'rectangle':
            result = `${node.data.label}\n`;
            break;
        case 'parallelogram':
            result = `console.log(${node.data.label});\n`;
            break;
        case 'outputData':
            result = `outStr += ${node.data.label}+"\u005Cn";\n`;
            break;
        case 'inputData':
            result = `let [${node.data.label}] = prompt("${node.data.label} = ").split(",").map(item => isNaN(item) ? item : Number(item));\n`;
            break;
        default:
            result = ``;
    }
    return result;
}

export function addStatementsTest(node) {
    let result = '';
    switch (node.type) {
        case 'loopStart':
            result = `${node.data.label} {\n`;
            break;
        case 'loopEnd':
            result = `\n}\n`;
            break;
        case 'diamond':
            result = `if (${node.data.label}) {\n`;
            break;
        case 'rectangle':
            result = `${node.data.label}\n`;
            break;
        case 'parallelogram':
            result = `console.log(${node.data.label});\n`;
            break;
        case 'outputData':
            result = `return ${node.data.label};\n`;
            break;
        // case 'inputData':
        //     result = `let [${node.data.label}] = prompt("${node.data.label} = ").split(",").map(item => isNaN(item) ? item : Number(item));\n`;
        //     break;
        default:
            result = ``;
    }
    return result;
}
