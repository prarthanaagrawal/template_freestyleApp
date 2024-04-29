import sys

def dijkstra(adjacency_matrix):
    # Get the number of vertices in the graph
    num_vertices = len(adjacency_matrix)

    # Create a list to store the shortest distance from the source vertex to each vertex
    distance = [sys.maxsize] * num_vertices

    # Create a list to store the shortest path from the source vertex to each vertex
    shortest_path = [[] for _ in range(num_vertices)]

    # Create a set to keep track of visited vertices
    visited = set()

    # Set the distance of the source vertex to 0
    distance[0] = 0

    # Traverse all vertices
    for _ in range(num_vertices):
        # Find the vertex with the minimum distance that has not been visited
        min_distance = sys.maxsize
        min_vertex = -1
        for v in range(num_vertices):
            if distance[v] < min_distance and v not in visited:
                min_distance = distance[v]
                min_vertex = v

        # Mark the vertex as visited
        visited.add(min_vertex)

        # Update the distance and shortest path for each neighbor of the current vertex
        for v in range(num_vertices):
            if adjacency_matrix[min_vertex][v] > 0 and v not in visited:
                new_distance = distance[min_vertex] + adjacency_matrix[min_vertex][v]
                if new_distance < distance[v]:
                    distance[v] = new_distance
                    shortest_path[v] = shortest_path[min_vertex] + [v]

    # Return the shortest path and the length of the shortest path to each vertex
    return shortest_path, distance