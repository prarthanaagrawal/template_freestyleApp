class Food {
  // Generate the initial position of the food
  void generateFoodPosition() {
    // Generate random position for the food on the game board
    Random random = new Random();
    foodPosX = random.nextInt(boardSizeX);
    foodPosY = random.nextInt(boardSizeY);
  }

  // Check if the snake has collided with the food
  boolean snakeCollidesWithFood() {
    // Check if the snake's position overlaps with the food's position
    return snakePosX == foodPosX && snakePosY == foodPosY;
  }

  // Other methods...
}
