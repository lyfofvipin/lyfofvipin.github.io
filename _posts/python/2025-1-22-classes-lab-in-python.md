---
title: Classes Lab In Python
categories: python
tags: [python]
---


# Master Guide to Object-Oriented Project Design Building a Complete Banking App

Hello Everyone! Today we are bringing together everything we have learned about **Classes, Objects, Methods, Lists, and Loop Controls** to build a complete, real-world terminal application.

When you build applications, you will often need to manage multiple instances of a class (like managing hundreds of different customer bank accounts). We handle this by combining Object-Oriented blueprints with collections like Lists to store and manage our structural objects dynamically.


## 1. Project Blueprint: The BankAccount System Architecture

To manage a bank branch efficiently, our system needs a clear division of labor. We use a `BankAccount` class to hold individual customer states and behaviors, combined with a central management loop that manages the collection of all accounts.

### Complete Project Implementation Code

Here is the fully functional, clean code that brings together our class definition, helper search logic, and interactive user menu interface:

```python
class BankAccount:
    BANK_NAME = "SBI"  # Class Attribute shared by all customers

    def __init__(self, name, mob, age, dob, balance=500):
        # Instance Attributes unique to each individual user
        self.name = name
        self.mob = mob
        self.age = age
        self.dob = dob
        self.balance = balance

    def show_info(self):
        print(f"\n--- Account Details ({self.BANK_NAME}) ---")
        print(f"Holder Name: {self.name}")
        print(f"Mobile No. : {self.mob}")
        print(f"Current Age: {self.age}")
        print(f"Birth Date : {self.dob}")
        print(f"Net Balance: {self.balance} INR")
        print("-" * 30)
        
    def deposit(self, amount):
        if amount <= 0:
            print("\n[Error] Invalid Amount! Deposit must be greater than 0.")
        else:
            self.balance += amount
            print(f"\n[Success] Deposited {amount} INR. New Balance: {self.balance} INR")

    def withdraw(self, amount):
        if amount <= 0:
            print("\n[Error] Invalid Amount! Withdrawal must be greater than 0.")
        elif amount > self.balance:
            print(f"\n[Error] Transaction Denied! Insufficient balance. Available: {self.balance} INR")
        else:
            self.balance -= amount
            print(f"\n[Success] Withdrew {amount} INR. Remaining Balance: {self.balance} INR")


# Helper Function to search for an account object inside our storage list
def search_account(account_list, mobile_number):
    for account in account_list:
        if account.mob == mobile_number:
            return account  # Returns the actual object instance if found
    return None  # Returns None if no matching phone number exists


# --- Central Management Application Loop ---
all_accounts = []

while True:
    print("""
==== STATE BANK OF INDIA MENU ====
A. Create New Account
B. Check Account Details
C. Deposit Money
D. Withdraw Money
E. Exit
=================================
    """)

    choice = input("Enter Your Choice (A-E): ").upper()

    match choice:
        case "A":
            print("\n--- Open New Account ---")
            name = input("Enter Your Name: ")
            age = int(input("Enter Your Age: "))
            mob = input("Enter Your Mobile Number: ")
            dob = input("Enter Your DOB (DD/MM/YYYY): ")
            initial_deposit = int(input("Enter Initial Deposit (Minimum 500): "))
            
            if initial_deposit < 500:
                print("\n[Error] Account creation failed. Minimum starting balance is 500.")
            else:
                # Instantiating and saving the object inside our tracking list
                new_account = BankAccount(name, mob, age, dob, initial_deposit)
                all_accounts.append(new_account)
                print(f"\n[Success] Welcome {name}! Your account has been registered successfully.")

        case "B":
            print("\n--- Account Inquiry ---")
            target_mob = input("Enter Registered Mobile Number: ")
            account = search_account(all_accounts, target_mob)
            
            if account:
                account.show_info()
            else:
                print("\n[Error] No account registered with that mobile number.")

        case "C":
            print("\n--- Deposit Transaction ---")
            target_mob = input("Enter Registered Mobile Number: ")
            account = search_account(all_accounts, target_mob)
            
            if account:
                amount = int(input("Enter Amount to Deposit: "))
                account.deposit(amount)
            else:
                print("\n[Error] No account registered with that mobile number.")
                
        case "D":
            print("\n--- Withdrawal Transaction ---")
            target_mob = input("Enter Registered Mobile Number: ")
            account = search_account(all_accounts, target_mob)
            
            if account:
                amount = int(input("Enter Amount to Withdraw: "))
                account.withdraw(amount)
            else:
                print("\n[Error] No account registered with that mobile number.")

        case "E":
            print("\nThank you for banking with SBI. Goodbye!")
            break

        case _:
            print("\n[Invalid Choice] Please select a valid option from A to E.")

```

---

## 2. Breaking Down Real-World Object Design Models

To master Object-Oriented design, you need to practice breaking down everyday real-world systems into code properties (**Attributes**) and operations (**Methods**). Let's review four essential structural architectures:

### A. E-Commerce (ShoppingCart Blueprint)

* **The Concept:** When shopping online, a user needs a digital container to hold items before checkout. The system needs to dynamically update as products are added or removed, and compute final totals with taxes applied.
* **Attributes:** `user_id` (links the cart to a specific user), `items` (a dictionary tracking `product_name: price` mappings).
* **Methods:** `add_item()`, `remove_item()`, `calculate_total()`.

### B. Hotel Management (HotelRoom Blueprint)

* **The Concept:** A hotel front desk clerk needs software to manage room availability, track room categories, and calculate billing charges upon check-out.
* **Attributes:** `room_number`, `room_type` ("Suite", "Deluxe"), `price`, `is_occupied` (True/False status flag).
* **Methods:** `check_in()` (flips flag if vacant), `check_out()` (calculates bill and frees up room space).

### C. Ride-Sharing Apps (RideRequest Blueprint)

* **The Concept:** An application coordinate system designed to match passengers with local drivers while computing fares dynamically based on distance metrics.
* **Attributes:** `rider`, `pickup`, `dropoff`, `driver` (starts as `None`), `status` ("Searching", "En Route", "Completed").
* **Methods:** `assign_driver()`, `complete_ride()`.

### D. Digital Library Operations (Book Blueprint)

* **The Concept:** A cataloging database tracking the shelf availability of books. If a book is checked out, other library patrons are blocked from borrowing it until it is returned.
* **Attributes:** `title`, `author`, `isbn` (unique barcode identifier), `is_available` (boolean status flag).
* **Methods:** `borrow_book()`, `return_book()`.

---

## 3. Structural Code Blueprints for Practice

```python
class ShoppingCart:
    def __init__(self, user_id):
        self.user_id = user_id
        self.items = {}  # Store items as {item_name: price}

    def add_item(self, item_name, price):
        self.items[item_name] = price
        print(f"Added {item_name} to cart.")

    def remove_item(self, item_name):
        if item_name in self.items:
            del self.items[item_name]
            print(f"Removed {item_name} from cart.")

    def calculate_total(self, tax_rate=0.08):
        subtotal = sum(self.items.values())
        total = subtotal + (subtotal * tax_rate)
        return round(total, 2)


class HotelRoom:
    def __init__(self, room_number, room_type, price_per_night):
        self.room_number = room_number
        self.room_type = room_type
        self.price = price_per_night
        self.is_occupied = False

    def check_in(self):
        if not self.is_occupied:
            self.is_occupied = True
            print(f"Room {self.room_number} is now checked in.")
        else:
            print(f"Room {self.room_number} is already occupied!")

    def check_out(self):
        if self.is_occupied:
            self.is_occupied = False
            print(f"Room {self.room_number} is now vacant and ready for cleaning.")
        else:
            print(f"Room {self.room_number} is already vacant.")


class RideRequest:
    def __init__(self, rider_name, pickup_location, dropoff_location):
        self.rider = rider_name
        self.pickup = pickup_location
        self.dropoff = dropoff_location
        self.driver = None
        self.status = "Searching for driver"

    def assign_driver(self, driver_name):
        self.driver = driver_name
        self.status = "Driver en route"
        print(f"Driver {driver_name} accepted {self.rider}'s request.")

    def complete_ride(self, distance_miles):
        self.status = "Completed"
        fare = 2.50 + (distance_miles * 1.75)  # Base fare + per mile rate
        print(f"Ride finished. Total fare billed to {self.rider}: ${fare:.2f}")


class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.is_available = True

    def borrow_book(self, borrower_name):
        if self.is_available:
            self.is_available = False
            print(f"'{self.title}' successfully lent to {borrower_name}.")
        else:
            print(f"Sorry, '{self.title}' is currently checked out.")

    def return_book(self):
        self.is_available = True
        print(f"'{self.title}' has been returned to the library shelf.")

```