---
date: '2025-01-03'
tags:
- python
title: Type Checking and Type Conversion in Python
---
# Type Checking and Type Conversion in Python

Hello Everyone! Today we are going to look into how Python manages different types of data, how to check them, and how you can convert data from one type to another.

In programming, this process of changing data types is known as **Type Casting** or **Type Conversion**. Let's break it down into simple, practical rules.


## Type Checking with `type()`

Before converting anything, you often need to see what you are currently working with. As we saw earlier, you can pass any value or variable into the `type()` function to find out its class.

```python
print(type(45))  # Output: <class 'int'>

a = "Test"
print(type(a))   # Output: <class 'str'>

```

---

## Converting String to Integer (`str` → `int`)

You can convert text into a whole number using the `int()` function, but Python has strict rules about what kind of text is allowed:

* **Rule 1:** The string must contain only numeric characters.
* **Rule 2:** Plus (`+`) or minus (`-`) signs are allowed, but **only at the very beginning** of the text.

```python
# Valid Conversion
a = "+3249"
print(type(a))   # Output: <class 'str'>
a = int(a)
print(type(a))   # Output: <class 'int'>
print(a)         # Output: 3249

# Invalid Conversion (This will throw a ValueError!)
a = "324+9"
a = int(a)       # Error! The '+' sign is in the middle, not at the start.

```

---

## Converting Float to Integer (`float` → `int`)

When you pass a decimal number (float) into `int()`, Python does not round it up or down. Instead, it completely slices off everything after the decimal point. This is called truncation.

```python
a = 45.6
print(type(a))   # Output: <class 'float'>
a = int(a)
print(a)         # Output: 45 (The .6 is dropped!)
print(type(a))   # Output: <class 'int'>

```

---

## Converting String to Float (`str` → `float`)

To change a string into a decimal number, you use the `float()` function. The formatting rules are very similar to integer conversion:

* **Rule 1:** Only digits are allowed.
* **Rule 2:** Only **one** decimal point (`.`) is permitted.
* **Rule 3:** A `+` or `-` sign is only allowed right at the start.

```python
# Valid Conversion
a = "+342323.7"
print(type(a))   # Output: <class 'str'>
a = float(a)
print(a)         # Output: 342323.7
print(type(a))   # Output: <class 'float'>

# Quick note on conversion vs layout
a = "-45"
print(float(a))  # Output: -45.0 (Temporary conversion for display)
print(type(a))   # Output: <class 'str'> (The original variable remains a string!)

```

---

## Converting Integer to Float (`int` → `float`)

Converting a whole number to a decimal is very straightforward. Python simply attaches a `.0` to the end of the number.

```python
a = 34
print(type(a))   # Output: <class 'int'>
a = float(a)
print(a)         # Output: 34.0
print(type(a))   # Output: <class 'float'>

# Text decimals can also safely convert directly to float
a = "34.00"
a = float(a)
print(type(a))   # Output: <class 'float'>

```

---

## Converting Anything to a String (`any` → `str`)

The easiest conversion in Python is moving data into a string using `str()`. Python can wrap literally anything (numbers, decimals, lists, dictionaries) inside quote marks to turn it into text.

```python
a = -3434.34343
print(type(a))   # Output: <class 'float'>
a = str(a)
print(type(a))   # Output: <class 'str'>
print(a)         # Output: "-3434.34343"

```

---

## Converting to Boolean (`any` → `bool`)

When you convert data types into a Boolean (`True` or `False`), Python evaluates them based on whether they are **empty** or **filled**. An empty container, zero, or an empty string converts to `False`. Anything with substance converts to `True`.

Let's look at an empty dictionary `{}` for example:

```python
a = {}           # An empty dictionary
print(type(a))   # Output: <class 'dict'>

a = bool(a)
print(a)         # Output: False (Because the dictionary was empty!)
print(type(a))   # Output: <class 'bool'>

```