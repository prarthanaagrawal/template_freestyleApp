class GameBoard {
  // Display the game board
  void displayGameBoard() {
    // Render a 10x10 grid on the screen
    for (int y = 0; y < 10; y++) {
      for (int x = 0; x < 10; x++) {
        if (x == snakePosX && y == snakePosY) {
          // Display the snake's head
          displaySnakeHead();
        } else if (isSnakeBodySegment(x, y)) {
          // Display a segment of the snake's body
          displaySnakeBodySegment();
        } else if (x == foodPosX && y == foodPosY) {
          // Display the food
          displayFood();
        } else {
          // Display an empty cell
          displayEmptyCell();
        }
      }
    }
  }

  // Other methods...
}
