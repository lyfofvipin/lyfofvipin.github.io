---
title: Practical Lab Exercises Conditional Logic Problems in Python
categories: python
tags: [python]
---

# Practical Lab Exercises: Conditional Logic Problems in Python

Hello Everyone! Today we are going to dive into a complete, hands-on practical lab workbook. We will solve 9 core logical programming challenges using our knowledge of `if`, `elif`, and `else` structures.


## Index of Problems

Click on any challenge below to jump straight to its code implementation and logical breakdown:

* Even or Odd Number
* Positive, Negative, or Zero
* Age Category Checker
* Grade Calculator & Milestone Checker
* Vowel or Consonant Checker
* Simple Login System & Admin Permissions
* Maximum of Two and Three Numbers
* Days in a Month
* Divisibility Rules (3, 5, or Both)

---

## Code Implementations

### 1. Even or Odd Number

This program asks the user to enter a number and checks whether the number is even or odd using the modulus operator (`%`). If a number is perfectly divisible by 2, the remainder is 0.

#### Implementation Variations:

```python
# Quick Test Script
a = 52

if a % 2 == 0:
     print("A 1 Even Number h")
else:
     print("A 1 Odd Number h")

```

#### Voter Eligibility Milestone Extension:

```python
a = int(input("Enter Your Age: "))

if a >= 18:
     print("Yes you can vote.")
     print("Select your leader wisely.")
else:
     print("No you can not vote.")
     print("Come after", 18 - a)

print("Program Completed.")

```

---

### 2. Positive, Negative, or Zero

This program tracks whether an integer value is greater than zero, less than zero, or equal to zero. It also includes an absolute value converter.

#### Basic Positive/Negative Script:

```python
a = -1

if a < 0:
     print("-ve ")
else:
     print("+ve")

```

#### Complete 3-Way Structural Check:

```python
number = int(input("Enter a number: "))

if number > 0:
     print("Number is positive.")
elif number < 0:
     print("Number is negative")
else:
     print("Number is 0")

```

#### Absolute Value Converter Challenge:

```python
# Converts any negative integer to its positive absolute counterpart
a = int(input("Enter A number: "))

if a > 0:
     print(a)
else:
     print(a * -1)

```

---

### 3. Age Category Checker

Classifies users into specific generational brackets based on their age input boundary limits.

```python
age = int(input("Enter Your Age: "))

if age > 50:
     print("Senior")
elif age > 30:
     print("Adult")
elif age > 20:
     print("Teenager")
elif age <= 20:
     print("Child")

```

---

### 4. Grade Calculator & Milestone Checker

These scripts demonstrate standard grading brackets, custom tier boundaries, and conditional exam passing verifications.

#### Cricket Century Milestone Script:

```python
run = 150

if run >= 100:
     print("Full")
elif run >= 50:
     print("Half")
else:
     print("Nothing")

```

#### Standard Letter Grade Brackets:

```python
score = 80
if score >= 90:
     print("A")
elif score >= 80:
     print("B")
elif score >= 70:
     print("C")
elif score >= 60:
     print("D")
else:
     print("F")

```

#### Exact Metric Match vs Passing Status Layouts:

```python
# Pass or Fail Exam Checker
number = int(input("Enter your marks: "))

if number >= 33:
     print("Yes you have passed the exam.")
else:
     print("You failed try again next year.")

```

```python
# Fixed Point Match Layout
marks = int(input("Enter your marks: "))

if marks == 100:
     print("A+")
elif marks == 80:
     print("1st")
elif marks == 60:
     print("2nd")
elif marks == 33:
     print("3rd")
else:
     print("You failed.")

```

---

### 5. Vowel or Consonant Checker

This program inspects a single string text character to verify whether it matches a collection of vowel characters.

#### Basic Character Matching Chains:

```python
a = "i"

if a == "a" or a == "e" or a == "i" or a == "o" or a == "u":
     print("Vowel")
else:
     print("Consonant")

```

#### Case Sensitivity Double Check Chains:

```python
a = "I"

if a == "a" or a == "e" or a == "i" or a == "o" or a == "u":
     print("Vowel")
elif a == "A" or a == "E" or a == "I" or a == "O" or a == "U":
     print("Vowel")
else:
     print("Consonant")

```

#### Optimized Membership Container Strategy:

```python
char = input("Enter only 1 character: ")

if char in "aeiouAEIOU":
     print("Vowel")
else:
     print("Consonant")

```

---

### 6. Simple Login System & Admin Permissions

Simulates a secure dashboard portal entry checking two independent text string assignments using logical links.

#### Credential Verification Login Block:

```python
username = "admin"
password = "123"

user = input("Enter Your Username: ")
passw = input("Enter Your Password: ")

if user == username and passw == password:
     print("Login Success.")
else:
     print("Invalid Username Or Password.")

```

#### Simple Permissions Validator:

```python
username = input("Enter Your Username: ")

if username == "admin":
     print("You can add people")
else:
     print("You can not add people")

```

---

### 7. Maximum of Two and Three Numbers

Takes numerical dimensions from a keyboard interface and extracts the maximum total metric balance.

#### Comparing Two Numbers (Difference Output Strategy):

```python
a = int(input("Enter A: "))
b = int(input("Enter B: "))

if a > b:
     print(a - b)
else:
     print(b - a)

```

#### Comparing Three Numbers (Using Logical Operators):

```python
a = int(input("Enter 1st number: "))
b = int(input("Enter 2nd number: "))
c = int(input("Enter 3rd number: "))

if a >= b and a >= c:
     print(a)
elif b >= a and b >= c:
     print(b)
else:
     print(c)

```

#### Comparing Three Numbers (Using Nested Conditions):

```python
if a >= b:
     if a >= c:
          print(a)
     else:
          print(c)
else:
     if b >= c:
          print(b)
     else:
          print(c)

```

---

### 8. Days in a Month

This script reads a numerical calendar index value (1-12) and prints the corresponding number of calendar days assigned to that section.

```python
month = int(input("Enter A month: "))

if month == 2:
    print("28 Days")
elif month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12:
    print("31 Days")
elif month == 4 or month == 6 or month == 9 or month == 11:
    print("30 Days")
else:
    print("Invalid Month.")

```

---

### 9. Divisibility Rules (3, 5, or Both)

Evaluates incoming digital numerical variables for common multiples by sorting multi-factor checks first.

#### Basic Modulus Truthiness Flag:

```python
# Remainder evaluate shortcut
number = int(input("Enter A number: "))

if number % 5:
     print("Not divisible by 5")
else:
     print("Yes divisible by 5.")

```

#### Unified Target Multipliers Script:

```python
number = float(input("Enter A number: "))

if number % 3 == 0 and number % 5 == 0:
     print("divisible by both 3 and 5")
elif number % 3 == 0:
     print("divisible by 3")
elif number % 5 == 0:
     print("divisible by 5")
else:
     print("Not divisible by 3 and 5")

```

*Note: Checking for both `3` and `5` using `and` must always happen at the top, or else individual branch matches will incorrectly intercept the calculation first!*