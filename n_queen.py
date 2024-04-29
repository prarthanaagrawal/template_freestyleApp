def solve_n_queen(n):
    solutions = []
    board = [[0] * n for _ in range(n)]
    solve_n_queen_util(board, 0, solutions)
    return solutions

def solve_n_queen_util(board, col, solutions):
    n = len(board)
    if col >= n:
        solution = []
        for i in range(n):
            row = []
            for j in range(n):
                if board[i][j] == 1:
                    row.append('Q')
                else:
                    row.append('.')
            solution.append(''.join(row))
        solutions.append(solution)
        return True
    
    for i in range(n):
        if is_safe(board, i, col):
            board[i][col] = 1
            if solve_n_queen_util(board, col + 1, solutions):
                return True
            board[i][col] = 0
    
    return False

def is_safe(board, row, col):
    n = len(board)
    
    for i in range(col):
        if board[row][i] == 1:
            return False
    
    i = row
    j = col
    while i >= 0 and j >= 0:
        if board[i][j] == 1:
            return False
        i -= 1
        j -= 1
    
    i = row
    j = col
    while i < n and j >= 0:
        if board[i][j] == 1:
            return False
        i += 1
        j -= 1
    
    return True