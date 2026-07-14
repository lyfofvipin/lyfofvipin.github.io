---
date: '2025-01-24'
tags:
- python
title: Multiple Inheritance and Method Resolution Order in Python
---
# Master Guide to Multiple Inheritance and Method Resolution Order in Python

Hello Everyone! Today we are exploring **Multiple Inheritance** and how Python resolves conflicts when different parent classes share the exact same method names.

Multiple inheritance occurs when a child subclass inherits properties and behaviors from **two or more completely independent parent classes**. This allows you to combine diverse functionalities into a single specialized subclass, promoting flexible code reuse.


## 1. Core Mechanics of Multiple Inheritance

To build a subclass that uses multiple inheritance, pass all parent class names as a comma-separated list inside the parentheses.

```python
# Base Parent Class 1
class Vehicle:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color

# Base Parent Class 2
class RTO:
    def __init__(self, plate_number, owner_id):
        self.plate_number = plate_number
        self.owner_id = owner_id

# Child Subclass combining both tracking domains
class Car(Vehicle, RTO):
    def __init__(self, brand, color, plate_number, owner_id):
        # Manually invoke both constructors to initialize all state values
        Vehicle.__init__(self, brand, color)
        RTO.__init__(self, plate_number, owner_id)

my_car = Car("BMW", "Black", "DL-1C-1234", "Rohit")
print(my_car.brand)    # Inherited from Vehicle: BMW
print(my_car.owner_id) # Inherited from RTO: Rohit

```

---

## 2. Resolving Name Clashes: Method Resolution Order (MRO)

A common challenge with multiple inheritance occurs when two separate parent classes contain methods with identical names. How does Python know which version to execute?

Python solves this using a strict internal search pipeline known as the **Method Resolution Order (MRO)**.

> **The MRO Rule:** When looking up a method name, Python searches the **Child class first**, then moves through its parent classes **from left to right** as specified in the class declaration, and finally searches up the base object hierarchy.

```python
class ParentA:
    def test(self):
        print("Output from Parent A")

class ParentB:
    def test(self):
        print("Output from Parent B")

# Class definition list order matters! ParentA comes before ParentB
class Child(ParentA, ParentB):
    pass

obj = Child()
obj.test() # Output: Output from Parent A

```

Because `ParentA` was listed first (`ParentA, ParentB`), Python stops looking as soon as it finds the method matching that name in `ParentA`.

---

## 3. Explicitly Calling Overridden Methods

If your child class completely overrides a shared method name, but you still want to run the original implementations from *both* parents, you can call those parent methods explicitly by name. When doing this, you must pass **`self`** manually as the first argument:

```python
class ParentA:
    def test(self):
        print("Test A")

class ParentB:
    def test(self):
        print("Test B")

class Child(ParentA, ParentB):
    def test(self):
        # Explicitly running code from both parent domains
        ParentA.test(self) # Must pass self manually
        ParentB.test(self) # Must pass self manually
        print("Test C")

child_obj = Child()
child_obj.test()
# Output:
# Test A
# Test B
# Test C

```

---

## 4. Inspecting the MRO Chain Programmatically

You can check the exact lookup route Python will use for any class by inspecting its built-in `__mro__` attribute or by calling the `.mro()` method:

```python
print(Child.mro())
# Output: [<class '__main__.Child'>, <class '__main__.ParentA'>, <class '__main__.ParentB'>, <class 'object'>]

```