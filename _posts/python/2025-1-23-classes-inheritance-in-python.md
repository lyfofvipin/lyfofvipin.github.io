---
title: Master Guide to Inheritance and Method Overriding in Python Parent and Child Classes
categories: python
tags: [python]
---


# Master Guide to Inheritance and Method Overriding in Python Parent and Child Classes

Hello Everyone! Today we are exploring **Inheritance** and **Method Overriding**.

Inheritance is a fundamental pillar of Object-Oriented Programming (OOP). It allows a brand-new class to absorb or "inherit" attributes and methods from an existing class. Think of it like a family tree: a child class (the **subclass** or derived class) inherits base traits from its parent class (the **superclass** or base class). The child class can then reuse those shared behaviors, add its own unique characteristics, or modify how inherited actions work.


## 1. Core Mechanics: Establishing a Subclass

To create a child class in Python, you pass the name of the parent class inside parentheses immediately after declaring the new class name.

```python
# Base Parent Class
class Vehicle:
    brand = "Maruti"

# Derived Child Class inherits all attributes and methods of Vehicle
class Car(Vehicle):
    pass

# Direct instantiation
my_car = Car()
print(my_car.brand) # Output: Maruti (Inherited from Vehicle!)

```

---

## 2. Constructor Chains and the Danger of Overriding `__init__`

If a child class defines its own `__init__()` constructor method, it completely **overrides and masks** the parent's constructor. This means the parent's properties are never automatically created, which can cause unexpected `AttributeError` crashes!

```python
class Vehicle:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color

class Car(Vehicle):
    def __init__(self, num_wheels):
        self.num_wheels = num_wheels

# This will trigger an error if you try to read my_car.brand!
my_car = Car(4)
# print(my_car.brand) -> AttributeError: 'Car' object has no attribute 'brand'

```

---

## 3. The Solution: Reusing Parent Code with `super()`

To correctly run the initialization code of a parent class inside a child class, use the built-in **`super()`** proxy proxy function. It links the child constructor back to the parent method block, allowing you to pass parameters up the chain cleanly.

```python
class Vehicle:
    def __init__(self, brand, color):
        self.brand = brand
        self.color = color
        print("Vehicle base initialized.")

class Car(Vehicle):
    def __init__(self, brand, color, num_wheels):
        self.num_wheels = num_wheels
        # Explicitly forward brand and color to the parent class constructor
        super().__init__(brand, color)
        print("Car sub-properties initialized.")

    def car_info(self):
        print(f"This is a {self.color} {self.brand} with {self.num_wheels} wheels.")

# Execution Test
my_car = Car(brand="Ford", color="Red", num_wheels=4)
my_car.car_info()
# Output:
# Vehicle base initialized.
# Car sub-properties initialized.
# This is a Red Ford with 4 wheels.

```

---

## 4. Method Overriding

Method overriding happens when a subclass provides a customized, specific implementation of a method that is already built into its parent class. When the method is invoked on a child instance, Python matches the signature inside the child class first, overriding the parent's default behavior.

```python
class Vehicle:
    def sound_horn(self):
        print("Generic vehicle horn sound.")

class Car(Vehicle):
    def sound_horn(self):
        # Overriding the parent method completely
        print("Peeeeeeeeeeeeeeeeee!")

class Truck(Vehicle):
    # If a child does not override, it falls back to the parent implementation
    pass

# Testing behavior variants
car_obj = Car()
truck_obj = Truck()

car_obj.sound_horn()   # Output: Peeeeeeeeeeeeeeeeee!
truck_obj.sound_horn() # Output: Generic vehicle horn sound.

```