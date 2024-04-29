class Snake {
  // Update the position and direction of the snake
  void updateSnakePositionAndDirection(int userInput) {
    // Update the direction of the snake based on user input
    if (userInput == UP_KEY) {
      snakeDirection = DIRECTION_UP;
    } else if (userInput == DOWN_KEY) {
      snakeDirection = DIRECTION_DOWN;
    } else if (userInput == LEFT_KEY) {
      snakeDirection = DIRECTION_LEFT;
    } else if (userInput == RIGHT_KEY) {
      snakeDirection = DIRECTION_RIGHT;
    }

    // Update the position of the snake based on its direction
    if (snakeDirection == DIRECTION_UP) {
      snakePosY--;
    } else if (snakeDirection == DIRECTION_DOWN) {
      snakePosY++;
    } else if (snakeDirection == DIRECTION_LEFT) {
      snakePosX--;
    } else if (snakeDirection == DIRECTION_RIGHT) {
      snakePosX++;
    }
  }

  // Check if the snake has collided with the wall
  boolean snakeCollidesWithWall() {
    // Check if the snake's position is outside the game board
    return snakePosX < 0 || snakePosX >= boardSizeX || snakePosY < 0 || snakePosY >= boardSizeY;
  }

  // Check if the snake has collided with its own body
  boolean snakeCollidesWithBody() {
    // Check if the snake's position overlaps with any part of its body
    // (excluding the head)
    for (int i = 1; i < snakeBody.length; i++) {
      if (snakePosX == snakeBody[i].posX && snakePosY == snakeBody[i].posY) {
        return true;
      }
    }
    return false;
  }

  // Other methods...
}
