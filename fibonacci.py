def generate_fibonacci_series():
    num_terms = int(input("Enter the number of terms in the Fibonacci series: "))
    fibonacci_series = []
    
    first_term = 0
    second_term = 1
    
    for _ in range(num_terms):
        fibonacci_series.append(first_term)
        next_term = first_term + second_term
        first_term, second_term = second_term, next_term
    
    for term in fibonacci_series:
        print(term)

generate_fibonacci_series()