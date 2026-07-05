---
title: Taking User Input and Type Casting in Python
categories: python
tags: [python]
---

# Taking User Input and Type Casting in Python

Hello Everyone! Today we are going to look into how we can make our programs interactive by taking inputs directly from the user. We will also see why understanding data types is critical when dealing with user inputs, and how to perform basic math operations with them.

## The `input()` Function

To read data typed by a user from the keyboard, Python provides the built-in `input()` function. You can pass a string inside the function to display a prompt message to the user.

```python
input("Enter Some data: ")

```

When this line runs, the program pauses and waits for the user to type something and press Enter.

### Storing and Checking User Input

To actually use the data the user types, you need to store it inside a variable. Let's see what happens to the data type when we accept input:

```python
a = input("Enter Something: ")
print(a)
print(type(a))

```

**CRITICAL RULE:** No matter what the user types (a name, a whole number, or a decimal), Python's `input()` function **always reads it as a String (`str`)**.

```python
a = input("Enter A number: ")  # User enters: 45
print(a)                       # Output: 45
print(type(a))                 # Output: <class 'str'>

```

Even though it looks like a number on the screen, Python treats it as text characters `"45"`.

---

## Personalizing Output with F-Strings

Once you capture a user's input, you can use F-Strings to create customized greetings smoothly without dealing with messy spacing.

```python
x = input("Enter Your Name: ") # User enters: Vipin
print(f"Good Afternoon {x}.")  # Output: Good Afternoon Vipin.

```

---

## Truthy vs Falsy Values

When converting variables to booleans using `bool()`, Python categorizes values into two groups: **Truthy** (values that evaluate to `True`) and **Falsy** (values that evaluate to `False`).

| Truthy Values (Have Substance) | Falsy Values (Empty / Zero) |
| --- | --- |
| Numbers like `45`, `-760.9` | The number `0` |
| Non-empty strings like `"rohit"` | An empty string `""` |
| Booleans like `True` | Booleans like `False` |
| Non-empty lists like `[34]` | Empty lists `[]` or `None` |

---

## Building an Addition Calculator (Input Type Casting)

Since `input()` always brings in text, you cannot perform mathematical operations like addition directly on them. If you try to add two input strings, Python will just paste them together (concatenate them) instead of doing math (e.g., `"10" + "20"` becomes `"1020"`).

To fix this, we must explicitly convert the input strings into integers (`int`) right after capturing them:

```python
# Taking 1st number and converting it to an integer
a = input("Enter 1st Number: ")
a = int(a)

# Taking 2nd number and converting it to an integer
b = input("Enter 2nd Number: ")
b = int(b)

# Now they are integers, so + will add them mathematically!
print(a + b) 

```

*Here is the execution:*

```bash
$ python name_of_program.py
Enter 1st Number: 10
Enter 2nd Number: 20
30

```