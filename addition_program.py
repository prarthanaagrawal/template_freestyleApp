# addition_program.py

import sys

def add_numbers(num1, num2):
    """
    Function to add two numbers.
    
    Args:
        num1 (float): The first number.
        num2 (float): The second number.
    
    Returns:
        float: The sum of the two numbers.
    """
    return num1 + num2

if __name__ == "__main__":
    # Accept the two numbers as command-line arguments.
    num1 = float(sys.argv[1])
    num2 = float(sys.argv[2])
    
    # Call the add_numbers function with the input numbers.
    result = add_numbers(num1, num2)
    
    # Display the sum of the two numbers as the output.
    print("The sum of", num1, "and", num2, "is", result)
