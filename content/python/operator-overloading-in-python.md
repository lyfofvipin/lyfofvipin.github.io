---
date: '2025-01-27'
tags:
- python
title: Operator Overloading and Magic Methods in Python
---
# Master Guide to Operator Overloading and Magic Methods in Python

Hello Everyone! Today we are exploring **Operator Overloading**.

Operator overloading allows you to redefine how standard built-in Python operators (such as `+`, `-`, `*`, or comparison symbols) behave when applied to your custom objects. This gives you the power to use clean, intuitive expressions directly on your custom class instances, making your code highly readable and elegant.


## 1. Core Mechanics: How Magic Methods Work

When you write an expression like `a + b`, Python maps that operator behind the scenes to a special class method. These are called **Magic Methods** (or **Dunder Methods** because they begin and end with a **d**ouble **under**score).

For example, when Python evaluates `a + b`, it translates it to `a.__add__(b)`. By writing an `__add__` method inside your custom class, you define exactly what that addition operation should return.

### Circle Operator Overloading Example

Let's see how we can overload mathematical and comparison operators to work smoothly with a custom `Circle` class:

```python
class Circle:
    def __init__(self, r):
        self.radius = r

    def area(self):
        return 3.14 * (self.radius ** 2)
    
    # Overloading the + operator
    def __add__(self, other):
        return self.radius + other.radius

    # Overloading the - operator
    def __sub__(self, other):
        return self.radius - other.radius

    # Overloading the * operator
    def __mul__(self, other):
        return self.radius * other.radius

    # Overloading the / operator
    def __truediv__(self, other):
        return self.radius / other.radius

    # Overloading the // operator
    def __floordiv__(self, other):
        return self.radius // other.radius

    # Overloading the comparison operator
    def __gt__(self, other):
        return self.radius > other.radius

# Creating object instances
c1 = Circle(5)
c2 = Circle(10)

# Clean, intuitive operations on custom objects
print(c1 + c2)   # Output: 15
print(c1 * c2)   # Output: 50
print(c1 > c2)   # Output: False

```

---

## 2. Returning Custom Data Types and Structs

You do not have to limit operator overloading to returning simple integers or floats. Your dunder methods can return completely new objects, dictionaries, or custom string layouts.

### A. Custom Combined Dictionaries and String Formats

```python
class Car:
    def __init__(self, brand, mileage, speed):
        self.brand = brand
        self.mileage = mileage
        self.speed = speed

    # Overloading + to return a combined performance dictionary
    def __add__(self, other):
        return {
            "name": f"{self.brand}-{other.brand}",
            "speed": self.speed + other.speed,
            "mileage": self.mileage + other.mileage
        }

    # Overloading the default print representation of the object
    def __str__(self):
        return f"Car Properties -> Brand: {self.brand} | Speed: {self.speed} km/h"

    # Overloading the built-in len() function
    def __len__(self):
        return self.speed

my_car = Car("Honda", 60, 100)
your_car = Car("BMW", 5, 300)

# Testing the custom outputs
print(my_car + your_car) # Output: {'name': 'Honda-BMW', 'speed': 400, 'mileage': 65}
print(my_car)            # Output: Car Properties -> Brand: Honda | Speed: 100 km/h
print(len(my_car))       # Output: 100

```

### B. Spatial Coordinates (Returning a New Object)

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        # Calculates coordinate geometry sums and passes them into a new object instance
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(2, 3)
v2 = Vector(5, 7)
v3 = v1 + v2

print(v3) # Output: Vector(7, 10)

```

---

## 3. Operator Mapping Cheat Sheet

Here is a quick reference table showing common symbols and the magic methods required to implement them:

| Operator Symbol | Internal Magic Method | Code Expression Translation |
| --- | --- | --- |
| **`+`** | `__add__(self, other)` | `obj1 + obj2` |
| **`-`** | `__sub__(self, other)` | `obj1 - obj2` |
| **`*`** | `__mul__(self, other)` | `obj1 * obj2` |
| **`/`** | `__truediv__(self, other)` | `obj1 / obj2` |
| **`//`** | `__floordiv__(self, other)` | `obj1 // obj2` |
| **`==`** | `__eq__(self, other)` | `obj1 == obj2` |
| **`<`** | `__lt__(self, other)` | `obj1 < obj2` |
| **`>`** | `__gt__(self, other)` | `obj1 > other` |
| **`str()` / `print()`** | `__str__(self)` | `print(obj)` |
| **`len()`** | `__len__(self)` | `len(obj)` |