/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // handle edge case
    if (!node) return node;

    // create first node
    let firstNode = new Node(node.val);

    // create the copy of graph starting with the first node
    let copy = new Map();
    copy.set(node, firstNode);

    // helper function to recursively copy nodes and their neighbors
    const dfs = (currentNode) => {
        let currentNodeCopy = copy.get(currentNode);
        for (let neighbor of currentNode.neighbors) {
            let neighborCopy = copy.get(neighbor);
            if (!neighborCopy) {
                neighborCopy = new Node(neighbor.val);
                copy.set(neighbor, neighborCopy);
                dfs(neighbor);
            }
            currentNodeCopy.neighbors.push(neighborCopy);
        }
    };

    // copy the graph starting with the input node
    dfs(node);

    // return the copy
    return firstNode;
};
