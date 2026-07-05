---
title: Variables And Data Type In Python And F Strings
categories: python
tags: [python]
---

# Understanding Variables, Data Types, and F-Strings in Python

Hello Everyone! Today we are going to learn about one of the most fundamental building blocks of programming: **Variables and Data Types**, along with some cool ways to print them using **F-Strings**.

Python handles variables beautifully and dynamically. Let's dive right into how they work.

---

## What is a Variable?

Think of a variable as a storage container or a mailbox. You can drop any data inside it, give that mailbox a name, and use that name whenever you need to access the data.

### Rules for Naming Variables

You can't just name a variable whatever you want. Python has a few strict rules you must follow:

* **Allowed Characters:** Variable names can only contain letters (A-Z, a-z), digits (0-9), and underscores (`_`). No other special characters are allowed.
* **Cannot Start with a Number:** A variable name can start with a letter or an underscore, but *never* with a number (e.g., `1_ty` is invalid).
* **No Keywords:** You cannot use words that Python has already reserved for its own functionality (like `print`, `True`, `False`).
* **Case-Sensitive:** Capitalization matters! `system` and `System` are treated as two completely different variables.

Let's look at some examples of valid and invalid variables:

```python
# Valid Names
_abc = 56
b = 23
_ = 67
ab_bc_cd = "Hello"

# Invalid Names (These will throw errors!)
1_ty = 90  # Error: Starts with a number
-ty = 90   # Error: Contains a hyphen instead of an underscore

```

---

## Dynamic Typing: The Flexibility of Python

In many languages like C, once you declare a variable as a number, it can *only* hold numbers. Python is different. It is **dynamically typed**, meaning a single variable can change its data type on the fly depending on what you assign to it.

```python
a = "Jaipur"
print(a)     # Output: Jaipur

a = 34.34
print(a)     # Output: 34.34

a = 34
print(a)     # Output: 34

```

As you can see, the variable `a` effortlessly switches from text to a decimal, and then to a whole number.

---

## Data Types in Python

Python automatically detects what kind of value you are storing. Here are the basic data types you'll use every day:

1. **Integer (`int`):** Whole numbers without decimals (e.g., `23`, `10`, `-5`).
2. **Float (`float`):** Numbers with decimal points (e.g., `34.34`, `77.454`).
3. **String (`str`):** Text surrounded by single or double quotes (e.g., `"Jaipur"`, `"True"`).
4. **Boolean (`bool`):** True or False logical values (Note the capital **T** and **F**: `True`, `False`).

### Checking a Type with `type()`

If you ever want to see what data type a variable currently holds, you can pass it to the built-in `type()` function:

```python
a = 45
print(type(a))  # Output: <class 'int'>

print(type("True"))  # Output: <class 'str'> (Because it's in quotes!)

```

---

## Multiple Assignments

Python lets you pack or unpack variables quickly in a single line, which keeps your code clean.

```python
# Assigning separate values to multiple variables at once
a, b, c = 10, 20, 30

# Packing multiple items into a single container (Tuple)
b = 23
c = 234
d = 23
e = 53
a = (b, c, d, e)

```

---

## Advanced Printing Techniques

The standard `print()` function can take multiple items separated by commas, and it will automatically separate them with a space when printing.

```python
print(34, 78, 34.97, "Jaipur") 
# Output: 34 78 34.97 Jaipur

```

### The Power of F-Strings (Formatted Strings)

When you want to mix text variables together smoothly without messing around with endless commas, you use an **F-String**. You just put an `f` right before the opening quote, and you can inject variables directly inside curly braces `{}`.

Let's look at how much easier it makes building sentences:

```python
a = "Jaipur"

# The old way using commas:
print("Hello", a, "I am from Python.")

# The clean way using F-Strings:
print(f"Hello {a} I am from Python.")

```

Both print exactly the same thing, but the F-String is much easier to read and write!

### Combining F-Strings with Escape Sequences

If you want to break lines cleanly using variables, you can place your escape sequences (`\n`) directly inside or outside the expressions:

```python
a = 1
b = 2
c = 3
d = 56

# Using inline F-String line breaks:
print(f"{a}\n{b}\n{c}\n{d}")

# This prints:
# 1
# 2
# 3
# 56

```