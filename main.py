from n_queen import solve_n_queen

def main():
    # Main program
    n = int(input("Enter the value of n: "))
    solutions = solve_n_queen(n)
    print(f"Number of solutions: {len(solutions)}")
    for i, solution in enumerate(solutions):
        print(f"Solution {i+1}:")
        for row in solution:
            print(row)
        print()

if __name__ == "__main__":
    main()