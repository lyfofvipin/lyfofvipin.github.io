---
title: Structural Pattern Matching (Match-Case) in Python
categories: python
tags: [python]
---

# Structural Pattern Matching (Match-Case) in Python

Hello Everyone! Today we are going to learn about a cleaner, more efficient way to handle multiple fixed-value conditions in Python: **Match-Case Statements**.

When writing multi-condition code with `if-elif-else`, checking a long list of distinct matching values can become repetitive and visually cluttered. Python resolves this elegantly using the `match` and `case` structure, which works similarly to the `switch-case` statements found in languages like C.


## 1. Moving from if-elif-else to Match-Case

Let's look at the problem of mapping a number to a weekday name. First, here is how we would implement it using our traditional conditional blocks:

### The Traditional approach (`if-elif-else`):

```python
number = int(input("Enter A Number: "))

if number == 1:
     print("Monday")
elif number == 2:
     print("Tuesday")
elif number == 3:
     print("Wednesday")
elif number == 4:
     print("Thursday")
elif number == 5:
     print("Friday")
elif number == 6:
     print("Saturday")
elif number == 7:
     print("Sunday")
else:
     print("Invalid number")

```

### The Optimized approach (`match-case`):

Instead of repeating `number ==` on every line, we pass the variable once to `match` and check its potential values via individual `case` blocks.

```python
number = int(input("Enter A Number: "))

match number:
     case 1:
          print("Monday")
     case 2:
          print("Tuesday")
     case 3:
          print("Wednesday")
     case 4:
          print("Thursday")
     case 5:
          print("Friday")
     case 6:
          print("Saturday")    
     case 7:
          print("Sunday")
     case _:
          print("Invalid number.")

```

> **What is the underscore `_`?** The `case _:` acts as the wildcard or fallback block. It is identical to the `else` block in conditional logic and will match absolutely anything if none of the explicit cases above it match.

---

## 2. Match-Case with String Characters

Match-Case functions perfectly with characters and text strings too. Let's see how we can map a singular text string input to verify an alphabet profile character:

```python
char = input("Enter only 1 character: ")

match char:
     case "a":
          print("Vowel")
     case "e":
          print("Vowel")
     case "i":
          print("Vowel")
     case "o":
          print("Vowel")
     case "u":
          print("Vowel")
     case _:
          print("Consonant")

```

---

## 3. Real-World Match-Case Scenarios

### Scenario A: Cold Drink Volume Pricing Inventory Check

This structure checks an integer amount variable value to output precise manufacturing fluid volume packages available:

#### The Old `if-elif` Layout:

```python
amount = int(input("Kitne rs laye ho?? "))

if amount == 20:
     print("200ML")
elif amount == 40:
     print("750ML")
elif amount == 50:
     print("1L")
elif amount == 90:
     print("2.25L")
else:
     print("No cold drink.")

```

#### The New `match-case` Layout:

```python
match amount:
     case 20:
          print("200ML")
     case 40:
          print("750ML")
     case 50:
          print("1L")
     case 90:
          print("2.5L")
     case _:
          print("No cold drink.")

```

---

### Scenario B: Tracking Calendar Days in a Month

Here, we take a sequential index input integer representing a specific target month on the calendar (1-12) and read its matching total day limits.

```python
month = int(input("Enter Month Number: "))

match month:
     case 1:
          print("31 Days")
     case 2:
          print("29 Days")
     case 3:
          print("31 Days")
     case 4:
          print("30 Days")
     case 5:
          print("31 Days")
     case 6:
          print("30 Days")
     case 7:
          print("31 Days")
     case 8:
          print("31 Days")
     case 9:
          print("30 Days")
     case 10:
          print("31 Days")
     case 11:
          print("30 Days")
     case 12:
          print("31 Days")
     case _:
          print("Invalid Month")

```