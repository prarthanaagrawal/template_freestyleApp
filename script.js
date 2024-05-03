/* script.js */

// Event listener for when the page finishes loading
window.addEventListener('load', function() {
    // Get the chessboard element
    var chessboard = document.getElementById('chessboard');
    
    // Get the solutions element
    var solutions = document.getElementById('solutions');
    
    // Get the input parameter n from the user
    var n = parseInt(prompt('Enter the size of the chessboard (n):'));
    
    // Solve the N-Queen problem and display the solutions
    var allSolutions = solveNQueenProblem(n);
    displaySolutions(allSolutions);
    
    // Function to solve the N-Queen problem using backtracking
    function solveNQueenProblem(n) {
        var solutions = [];
        var board = [];
        placeQueens(0);
        return solutions;
        
        function placeQueens(row) {
            if (row === n) {
                solutions.push(board.slice());
                return;
            }
            
            for (var col = 0; col < n; col++) {
                if (isSafe(row, col)) {
                    board[row] = col;
                    placeQueens(row + 1);
                }
            }
        }
        
        function isSafe(row, col) {
            for (var i = 0; i < row; i++) {
                if (board[i] === col || Math.abs(board[i] - col) === Math.abs(i - row)) {
                    return false;
                }
            }
            return true;
        }
    }
    
    // Function to display the solutions on the front page
    function displaySolutions(allSolutions) {
        for (var i = 0; i < allSolutions.length; i++) {
            var solution = allSolutions[i];
            var solutionElement = document.createElement('div');
            solutionElement.textContent = 'Solution ' + (i + 1) + ': ' + solution.join(', ');
            solutions.appendChild(solutionElement);
        }
    }
});
