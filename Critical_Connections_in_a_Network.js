/*
There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

 

Example 1:



Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.
 

Constraints:

1 <= n <= 10^5
n-1 <= connections.length <= 10^5
connections[i][0] != connections[i][1]
There are no repeated connections.
*/


const criticalConnections = (n, connections) => {
  // need graph to traverse
  const graph = createGraph(n, connections);

  // so you never retraverse visited path. if child was visited and IS NOT a direct parent, you will
  // end up peeking for its value to keep track of minObs in the way
  const visited = new Set();
  let   rank  = 0;

  // this will be your output. if condition meets, edge will be pushed here
  const output = [];

  // dfs function in this scope so variable rank is easily updated
  function dfs(node, parent) {
    visited.add(node.val);

    // by default, minObs will be at the greatest its own rank
    node.rank = rank;
    node.minObs = rank;

    // increment rank for next nodes
    rank++;

    node.children.forEach((child) => {
      // don't revisit your parent
      if (child === parent) { return; }
      if (visited.has(child)) {
        // if node visited, just peek the value
        node.minObs = Math.min(node.minObs, graph[child].minObs);
        return;
      } else {
        // traverse and also update minObs so its parent can use it later
        node.minObs = Math.min(node.minObs, dfs(graph[child], node.val));
      }

      // condition explained in the comments above
      if (node.rank < graph[child].minObs) output.push([node.val, child]);
    });

    return node.minObs;
  };

  dfs(graph[connections[0][0]], connections[0][0]);

  return output;
};


function createGraph(n, connections) {
  const output = {};

  for (let i = 0; i < n; i++) {
    output[i] = { val: i, children: [], rank: -Infinity, minObs: Infinity };
  }

  connections.forEach((connection) => {
    output[connection[0]].children.push(connection[1]);
    output[connection[1]].children.push(connection[0]);
  });

  return output;
}
