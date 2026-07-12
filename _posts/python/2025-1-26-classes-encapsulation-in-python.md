---
title: Encapsulation and Name Mangling in Python
categories: python
tags: [python]
---


# Master Guide to Encapsulation and Name Mangling in Python

Hello Everyone! Today we are discussing **Encapsulation**, another core pillar of Object-Oriented Programming (OOP).

Encapsulation involves bundling data (attributes) and the methods (functions) that operate on that data into a single unit: the class. It is the practice of hiding an object's internal complexity from the outside world and exposing only a clean, controlled interface to interact with it.

Think of a TV remote control: you interact with the buttons (the public interface), but you don't need to see or understand the internal circuit board (the private data and implementation).


## 1. Core Concepts: Protected Convention (`_var`)

In languages like Java or C++, you have strict keywords like `private` and `protected`. Python does not have built-in access modifiers. Instead, it relies on naming conventions to signal privacy boundaries.

Using a **single underscore (`_`)** before an attribute name tells other developers: *"This is a protected property intended for internal use only. Please do not modify it directly outside this class."*

```python
class BankAccount:
    def __init__(self, initial_balance):
        self._balance = initial_balance  # Protected attribute by convention

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            print(f"Deposited {amount}. New Balance: {self._balance}")

    def withdraw(self, amount):
        if 0 < amount <= self._balance:
            self._balance -= amount
            print(f"Withdrew {amount}. New Balance: {self._balance}")

class User(BankAccount):
    def get_balance(self):
        # Subclasses can access protected variables cleanly
        print(f"User check balance: {self._balance}")

account = User(500)
account.get_balance()  # Output: User check balance: 500
print(account._balance) # Valid, but considered poor practice because it skips the interface!

```

---

## 2. Hardening Class Space: Name Mangling (`__var`)

When you prefix a class attribute with a **double underscore (`__`)**, Python enforces a strict rule called **Name Mangling**.

Python's interpreter automatically rewrites the attribute name behind the scenes, transforming `__variable` into `_ClassName__variable`. This is designed to prevent name clashes in subclasses, making it harder for child classes or external code to accidentally overwrite important internal values.

```python
class Car:
    def __init__(self, brand, mileage):
        self.__brand = brand      # Scrambled to: _Car__brand
        self.__mileage = mileage  # Scrambled to: _Car__mileage

    def get_info(self):
        print(f"This is a {self.__brand} with {self.__mileage} miles.")

class ElectricCar(Car):
    def __init__(self, brand, mileage, battery_level):
        super().__init__(brand, mileage)
        self.__battery_level = battery_level # Scrambled to: _ElectricCar__battery_level

    def get_info(self):
        # Accessing inherited mangled properties requires calling the scrambled parent name
        print(f"Brand: {self._Car__brand}, Battery: {self.__battery_level}%")

# Execution Test
my_ev = ElectricCar("Tesla", 10000, 95)
my_ev.get_info() # Output: Brand: Tesla, Battery: 95%

```

### What Happens If You Inspect the Object?

If you pass the object to Python's built-in directory discovery function `dir()`, you can clearly see the name mangling translation mapping at work:

```python
print(dir(my_ev))
# Output includes: '_Car__brand', '_Car__mileage', '_ElectricCar__battery_level'

```

Because of this rewriting behavior, trying to run `print(my_ev.__mileage)` from outside the class will throw an `AttributeError` crash. However, you *can* technically still bypass it by writing `print(my_ev._Car__mileage)`. This shows that name mangling is a tool for namespace protection rather than true data security.

---

## 3. Summary: Single vs. Double Underscore Comparison

| Syntax Structure | Name Classification | Behavior & Intent |
| --- | --- | --- |
| **`self.value`** | **Public** | Accessible from anywhere. Represents the open interface of your object. |
| **`self._value`** | **Protected** | **Convention Only.** Signals internal intent. Python does not alter or block access to this attribute. This is the preferred way to label private data in Python. |
| **`self.__value`** | **Private / Mangled** | **Enforced Rule.** Python automatically rewrites the variable name to `_ClassName__value` to protect namespaces from conflicts during inheritance. |