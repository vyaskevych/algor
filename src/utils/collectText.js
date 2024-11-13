function collectTextByConnections(nodes, edges, addStatements) {
    const startNode = nodes.find(
        (node) => !edges.some((edge) => edge.target === node.id)
    );

    if (!startNode) {
        alert("Не знайдено початкового блоку без вхідних зв'язків.");
        return;
    }

    const collectTextRecursive = (nodeId, visited = new Set(), isBranch = false, outerJoinNode = null, joinNodesStack = [], isSameJoin = false) => {
        if (visited.has(nodeId)) return '';
        if (nodeId === outerJoinNode) return ''; // Не додаємо об'єднувальний блок у гілки "Так" та "Ні"
        visited.add(nodeId);

        const node = nodes.find((n) => n.id === nodeId);
        if (!node) return '';

        let collectedText = addStatements(node);
        const nextEdges = edges.filter((edge) => edge.source === nodeId);

        if (node.type === 'diamond') {
            const yesEdge = nextEdges.find((edge) => edge.sourceHandle === 'y');
            const noEdge = nextEdges.find((edge) => edge.sourceHandle === 'n');

            const joinNodeId = findJoinNode(nodeId);
            if (joinNodeId) {
                if (!joinNodesStack.includes(joinNodeId)) joinNodesStack.push(joinNodeId);
                else { isSameJoin = true; }
            }



            // Обробка гілки "Так"
            if (yesEdge) {
                collectedText += collectTextRecursive(yesEdge.target, visited, true, joinNodeId, joinNodesStack, isSameJoin);
                collectedText += '}\n'; // Закриття гілки "Так"
            }

            // Обробка гілки "Ні"
            if (noEdge) {
                collectedText += 'else {\n';
                collectedText += collectTextRecursive(noEdge.target, visited, true, joinNodeId, joinNodesStack, isSameJoin);
                collectedText += '}\n'; // Закриття гілки "Ні"
            }

            // Додаємо об’єднувальний блок після гілок верхнього рівня
            if (joinNodeId && !isBranch && !isSameJoin) {
                collectedText += collectTextRecursive(joinNodeId, visited, false, null, joinNodesStack, isSameJoin);
            }
        } else {
            // Продовжуємо збір тексту для лінійних зв’язків
            for (const edge of nextEdges) {
                collectedText += collectTextRecursive(edge.target, visited, false, outerJoinNode, joinNodesStack, isSameJoin);
            }
        }

        return collectedText;
    };

    const findJoinNode = (startNodeId) => {
        const visited = new Set();

        const traverseBranches = (nodeId) => {
            if (visited.has(nodeId)) return null;
            visited.add(nodeId);

            const incomingEdges = edges.filter((edge) => edge.target === nodeId);
            if (incomingEdges.length >= 2) {
                return nodeId;
            }

            const nextEdges = edges.filter((edge) => edge.source === nodeId);
            for (const edge of nextEdges) {
                const joinNodeId = traverseBranches(edge.target);
                if (joinNodeId) return joinNodeId;
            }

            return null;
        };

        return traverseBranches(startNodeId);
    };

    const collectedText = collectTextRecursive(startNode.id);
    // console.log(`Зібраний текст:\n${collectedText}`);
    return collectedText;
};

export default collectTextByConnections;
