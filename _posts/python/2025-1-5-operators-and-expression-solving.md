---
title: Operators And Expressions In Python
categories: python
tags: [python]
---

# Master Guide to Operators and Expression Evaluation in Python

Hello Everyone! Today we are going to explore **Operators** in Python. Operators are special symbols that perform computations, comparisons, and logical checks on data. Python provides a rich set of operators that make writing complex logic incredibly simple.

Let's break them down category by category.


## 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

| Operator | Meaning | Example (`a = 5`, `b = 2`) | Output |
| --- | --- | --- | --- |
| `+` | Addition | `a + b` | `7` |
| `-` | Subtraction | `a - b` | `3` |
| `*` | Multiplication | `a * b` | `10` |
| `/` | Division | `a / b` | `2.5` (Always returns a float!) |
| `//` | Floor Division | `a // b` | `2` (Gives the integer part only) |
| `%` | Modulus (Remainder) | `a % b` | `1` (Remainder of $5 \div 2$) |
| `**` | Exponentiation (Power) | `a ** b` | `25` ($5^2$) |

### Special Python Tricks with Arithmetic Operators

* **String Concatenation (`+`):** Joins text together: `"Hello " + "World"` $\rightarrow$ `"Hello World"`.
* **String Replication (`*`):** Repeats text multiple times: `"-" * 10` $\rightarrow$ `----------`.
* **Fractional Powers:** You can find roots using fractions: `49  0.5` gives `7.0`.

---

## 2. Operator Precedence (BODMAS vs. PEMDAS)

When evaluating mathematical expressions, Python follows strict priority rules similar to algebraic rules:

1. Parentheses `()**` (Highest Priority)
2. Exponentiation `**`
3. Multiplication `*`, Division `/`, Floor Division `//`, Modulus `%**` (Left-to-right)
4. Addition `+`, Subtraction `-**` (Lowest Priority)

```python
# Let's trace this calculation:
print(2 * 2 + 2 / 2) 
# Step 1: 2 * 2 = 4 and 2 / 2 = 1.0
# Step 2: 4 + 1.0 = 5.0

```

---

## 3. Comparison Operators

Comparison operators are used to compare two values. They **always** return a Boolean value: `True` or `False`.

| Operator | Meaning | Example | Result |
| --- | --- | --- | --- |
| `>` | Greater Than | `5 > 10` | `False` |
| `<` | Less Than | `50 < 10` | `False` |
| `==` | Equal To | `18 == 8` | `False` |
| `!=` | Not Equal To | `18 != 18` | `False` |
| `>` | Greater Than or Equal To | `188 >= 18` | `True` |
| `<` | Less Than or Equal To | `1 <= 18` | `True` |

> **Note on String Comparisons:** Python compares strings based on alphabetical order and ASCII values. Capital letters have smaller ASCII weights than lowercase letters (e.g., `'A' > 'a'` evaluates to `False`).

---

## 4. Short-Hand / Assignment Operators

Assignment operators are used to assign values to variables. Short-hand operators combine an arithmetic operation with assignment to save space.

```python
a = 60
a += 20  # Equivalent to: a = a + 20 -> Now a is 80
a -= 10  # Equivalent to: a = a - 10 -> Now a is 70
a **= 2  # Equivalent to: a = a ** 2 -> Now a is 4900

```

---

## 5. Logical Operators (`and`, `or`, `not`)

Logical operators allow you to combine multiple conditions. In Python, these operators evaluate using **Short-Circuit Evaluation** and can return actual values instead of just `True`/`False`.

### The `or` Operator

* **Rule:** If any value is true, it returns the **first true value** found from left to right. If all values are false, it returns the **right-most false value**.

```python
print(False or False or 56 or True or 90) # Output: 56 (First Truthy value)
print("" or [] or 0 or None)             # Output: None (All are Falsy, picks last)

```

### The `and` Operator

* **Rule:** If any value is false, it immediately returns the **first false value**. If all values are true, it returns the **right-most true value**.

```python
print(23 and 25 and "" and 9) # Output: "" (First Falsy value found)
print(23 and 25 and 100)      # Output: 100 (All are Truthy, picks last)

```

---

## 6. Membership and Identity Operators

### Membership Operators (`in`, `not in`)

Used to check if a specific element or substring is present inside a sequence like a string or a list.

```python
a = "I live in India."
print("India" in a)      # Output: True
print("x" not in "cat")  # Output: True

```

### Identity Operators (`is`, `is not`)

Used to check if two variables point to the **exact same memory location/object**, not just whether their values match.

```python
a = [1, 2]
b = [1, 2]
print(a == b)  # Output: True (Their values are identical)
print(a is b)  # Output: False (They are stored in different memory buckets)

```

---

## Practical Laboratory Assignments

Here are practical script formulas built from our concepts to solve common foundation problems:

### A. Finding 10% of a Number

```python
a = float(input("Enter A Number: "))
print((a * 10) / 100)

```

### B. Business Payroll Calculator

```python
basic_pay = 1500
num_sold = int(input("Enter Num Of Cameras sold: "))

total_bonus = num_sold * 200
total_comm = (total_bonus + basic_pay) * 0.02
total_pay = basic_pay + total_bonus + total_comm

print(f"Total pay out: {total_pay}")

```

### C. Calculating Geometric Area

```python
# Area of Circle
radius = int(input("Enter radius: "))
print("Area of a circle is:", 3.14 * radius * radius)

```