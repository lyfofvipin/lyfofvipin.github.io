---
date: '2025-01-09'
tags:
- python
title: Introduction to Loops and Iteration (While Loops) in Python
---
# Introduction to Loops and Iteration (While Loops) in Python

Hello Everyone! Today we are going to learn about **Loops and Iteration**. In programming, we often need to repeat a block of code multiple times. Instead of copy-pasting the same lines over and over, we use loops to automate repetitive tasks cleanly.

Python primarily features two types of loops. Today, we will master the **While Loop**.


## 1. Core Mechanics of a While Loop

A `while` loop continuously executes its inner code block as long as its conditional expression evaluates to `True`.

### The Infinite Loop Danger

If the condition never becomes `False`, the program will get stuck in an infinite loop until it crashes or you manually stop it.

```python
# WARNING: This will run forever until manually interrupted!
while True:
     print("Hello World1!")
     print("Hello World2!")
     print("Hello World3!")

```

### Breaking a Loop via State Shifts

To stop a loop, you must change the variables controlling the condition inside the block.

```python
counter = True

while counter:
     print("hello")
     counter = False # The loop runs exactly once because the condition drops to False

```


## 2. Controlled Numeric Iterations

To build a structured loop, you need three main components: **Initialization**, **Condition Check**, and **Updating the Counter**.

### Counting Down ($5 \rightarrow 0$)

```python
counter = 5

while counter >= 0:
     print(counter)
     counter = counter - 1

```

### Counting Up ($1 \rightarrow 5$)

```python
counter = 1
while counter <= 5:
     print(counter)
     counter += 1

```

### Changing Step Intervals (Odd Numbers)

```python
counter = 1
while counter <= 5:
     print(counter)
     counter = counter + 2 # Jumps by 2: Prints 1, 3, 5

```

### Geometric Multiplication Step Intervals

```python
counter = 1
while counter <= 10:
     print(counter)
     counter *= 2          # Multiplies by 2: Prints 1, 2, 4, 8

```

---

## 3. Foundational Practice Assignments

Here are solutions for common range and direction problems.

### A. Counting Up ($1 \rightarrow 50$)

```python
counter = 1
while counter <= 50:
     print(counter)
     counter += 1

```

### B. Reverse Counting ($50 \rightarrow 1$)

```python
counter = 50
while counter >= 1:
     print(counter)
     counter -= 1

```

### C. Negative Range Progression ($-1 \rightarrow -50$)

```python
counter = -1
while counter >= -50:
     print(counter)
     counter -= 1

```

### D. Negative Range Progression ($-50 \rightarrow -1$)

```python
counter = -50
while counter <= -1:
     print(counter)
     counter += 1

```

### E. Odd Numbers ($10 \rightarrow 20$)

```python
counter = 11  # Initialized to the first odd number in the range
while counter <= 20:
     print(counter)
     counter += 2

```

### F. Even Numbers ($50 \rightarrow 80$)

```python
counter = 50
while counter <= 80:
     print(counter)
     counter += 2

```

### G. Interactive Multiplication Table Generator

```python
number = int(input("Enter a number to print its table: "))
counter = 1

while counter <= 10:
     print(f"{number} x {counter} = {number * counter}")
     counter += 1

```

---

## 4. Visual Pattern Printing

Loops can build string layouts dynamically by multiplying characters with the loop index counter.

### Right-Angled Triangle Pattern

```python
counter = 1

while counter <= 5:
     print("*" * counter)
     counter += 1

```

*Output:*

```text
*
**
***
****
*****

```

### Inverted Number Line Patterns

```python
counter = 5

while counter >= 1:
     print(str(counter) * counter)
     counter -= 1

```

*Output:*

```text
55555
4444
333
22
1

```

### Inverted Star Pattern

```python
counter = 5

while counter >= 1:
     print("*" * counter)
     counter -= 1

```

*Output:*

```text
*****
****
***
**
*

```

---

## 5. Accumulation, Summation, and Factorials

Accumulators let you add up or multiply values sequentially inside a loop.

### Running Sum vs Product ($1 \rightarrow 5$)

```python
# Factorial Logic Simulation
counter = 1
sum = 1

while counter <= 5:
     sum = sum * counter
     counter = counter + 1

```

### Taking 5 Numbers from the Keyboard & Tracking Sums

```python
counter = 1
sum = 0

while counter <= 5:
     number = int(input("Enter A Number: "))
     print(number)
     sum = sum + number
     print(sum) # Prints intermediate running total
     counter += 1

print("Sum is : ", sum)

```

### Factorial Accumulator Script

```python
sum = 1
counter = 1

while counter <= 5:
     sum = sum * counter
     print(sum)
     counter += 1

```

### Skipping Numbers using Conditions inside Loops

```python
counter = 50

while counter > 0:
     if counter % 2 != 0:
          print(counter) # Prints odd numbers moving downwards from 50
     counter -= 1

print(f"Final Counter Value is {counter}")

```

---

## 6. Advanced Practice Workbook

Here are solutions for complex logical problems using combinations of loops, conditions, and termination commands.

### Challenge 1: Sum of Even Numbers Up to N

```python
number = int(input("Enter A number: "))
sum = 0
counter = 1

while counter <= number:
     if counter % 2 == 0:
          sum += counter
     counter += 1

print(sum)

```

### Challenge 2: Secure Login Attempt Limiter

This script checks user credentials and terminates the loop early using the `break` command if details match.

```python
counter = 1

while counter <= 3:
     username = input("Enter Username: ")
     password = input("Enter Password: ")

     if username == "admin" and password == "1234":
          print("Password Accepted.")
          break # Terminate loop instantly upon success
     else:
          print("Incorrect password. Try again.")

     counter += 1

if counter == 4:
     print("Account locked.")

```

### Challenge 3: Smallest Divisor and Prime Tester

```python
counter = 2
number = int(input("Enter A Number: "))

while counter < number:
     if number % counter == 0:
          break # Found a divisor, stop searching
     counter += 1

if number == counter:
     print("Failed to find the smallest divisor as it's a Prime Number.")
else:
     print(f"Number is divisible by {counter}")

```

### Challenge 4: Positive Number Accumulator Sentinel Loop

```python
number = 0
total = 0

while number >= 0:
     number = int(input("Enter A number: "))
     if number > 0:
          total = total + number

print(f"Sum of all values are {total}")

```