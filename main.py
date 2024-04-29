from dijkstra import dijkstra

def get_adjacency_matrix():
    # Prompt the user to input the graph represented as an adjacency matrix
    num_vertices = int(input("Enter the number of vertices: "))
    adjacency_matrix = []
    print("Enter the adjacency matrix:")
    for _ in range(num_vertices):
        row = list(map(int, input().split()))
        adjacency_matrix.append(row)
    return adjacency_matrix

def print_shortest_path(shortest_path, shortest_path_length):
    # Print the shortest path and the length of the shortest path to the console
    num_vertices = len(shortest_path)
    for v in range(num_vertices):
        path = shortest_path[v]
        length = shortest_path_length[v]
        print(f"Shortest path to vertex {v}: {path}")
        print(f"Length of shortest path to vertex {v}: {length}")
        print()

def calculate_shortest_path(adjacency_matrix):
    # Use the dijkstra function to calculate the shortest path
    shortest_path, shortest_path_length = dijkstra(adjacency_matrix)
    return shortest_path, shortest_path_length

def main():
    adjacency_matrix = get_adjacency_matrix()
    shortest_path, shortest_path_length = calculate_shortest_path(adjacency_matrix)
    print_shortest_path(shortest_path, shortest_path_length)

if __name__ == "__main__":
    main()