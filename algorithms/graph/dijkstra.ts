const INF = Number.MAX_SAFE_INTEGER;

export function dijkstra(graph: number[][], src: number): number[] {
  const dist: number[] = [];
  const visited: boolean[] = [];
  const length = graph.length;

  for (let i = 0; i < length; i++) {
    dist[i] = INF;
    visited[i] = false;
  }

  dist[src] = 0;

  for (let i = 0; i < length - 1; i++) {
    const u = minDistance(dist, visited);

    visited[u] = true;

    for (let v = 0; v < length; v++) {
      if (
        !visited[v] &&
        graph[u][v] !== 0 &&
        dist[u] !== INF &&
        dist[u] + graph[u][v] < dist[v]
      ) {
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }

  return dist;
}

function minDistance(dist: number[], visited: boolean[]) {
  let min = INF;
  let minIndex = -1;

  for (let v = 0; v < dist.length; v++) {
    if (!visited[v] && dist[v] <= min) {
      min = dist[v];
      minIndex = v;
    }
  }

  return minIndex;
}
