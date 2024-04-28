# tests/test_addition_program.py

import unittest
from addition_program import add_numbers

class TestAdditionProgram(unittest.TestCase):
    def test_add_numbers_positive(self):
        result = add_numbers(2, 3)
        self.assertEqual(result, 5)
    
    def test_add_numbers_negative(self):
        result = add_numbers(-2, -3)
        self.assertEqual(result, -5)
    
    def test_add_numbers_decimal(self):
        result = add_numbers(2.5, 3.7)
        self.assertEqual(result, 6.2)
    
    def test_add_numbers_zero(self):
        result = add_numbers(0, 0)
        self.assertEqual(result, 0)

if __name__ == "__main__":
    unittest.main()
