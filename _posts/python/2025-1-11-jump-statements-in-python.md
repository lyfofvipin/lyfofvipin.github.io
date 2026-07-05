---
title: Jump Statements (break, continue, exit) and F-Strings in Python
categories: python
tags: [python]
---

# Jump Statements (break, continue, exit) and F-Strings in Python

Hello Everyone! Today we are going to explore **Jump Statements** and **F-Strings** in Python.

By default, loops repeat a block of code until their condition naturally becomes `False`. But what if something unexpected happens *inside* the loop? What if you find the data you were looking for early, or encounter an invalid input that should be ignored?

Python gives us three powerful jump statements—`break`, `continue`, and `exit()`—to alter the flow of iteration on the fly. We will also learn about **F-Strings**, the cleanest way to format text in Python.


## 1. The Three Core Jump Statements

Here is a quick breakdown of how these three jump mechanisms function:

* **`break`**: Exits the loop entirely and instantly. Execution jumps straight to the first line of code *after* the loop block.
* **`continue`**: Skips the remaining lines inside the loop for the *current* iteration only. Execution jumps straight back up to the top of the loop for the next condition evaluation.
* **`exit()`**: Shuts down the entire program immediately. It stops everything, exits the terminal, and sends an optional numeric status code back to the operating system for analytical tracking.

---

## 2. Breaking the Flow with `break`

Think of `break` as an emergency exit button. The moment Python executes a `break`, the loop is terminated completely.

### Example A: Escaping an Infinite Loop

```python
counter = 1
while True:
     print(counter)
     counter += 1
     if counter == 5:
          break  # Exits the infinite loop immediately when counter reaches 5

```

### Real-World Case: Smallest Divisor Search Engine

If you are searching for the smallest number that divides a target value evenly, you don't need to keep testing higher numbers once you find the first one. You `break` early to save computer processing time.

```python
number = 49
counter = 2

while counter <= number - 1:
     if number % counter == 0:
          print(f"Smallest divisor found: {counter}")
          break  # Found it! Stop checking and exit the loop.
     counter += 1

```

---

## 3. Skipping Blocks with `continue`

Think of `continue` as a "skip this item" button. It doesn't break the loop; it just bypasses everything beneath it for that single round.

> **CRITICAL WARNING:** When using `continue` inside a `while` loop, always make sure you update your counter variable *before* the `continue` statement executes. If you forget to increment the counter, your program will get trapped in an infinite loop!

### Example A: The Infinite `continue` Trap (Flawed Logic)

```python
# WARNING: This code will run forever at counter = 2!
counter = 1

while counter <= 10:
     print(counter)
     if counter % 2 == 0:
          continue  # Bypasses the counter increment below!
     counter += 1

```

### Example B: Fixing the Counter Loop

```python
name = "vipin"
counter = 1

while counter <= 10:
     if name == "bhaskar":
          counter += 1
          print("Hi bhaskar")
          continue
     counter += 1
     print("Hi")

```

### Example C: Simulating a Range End Skip

```python
counter = 1
while counter <= 10:
     print(counter)
     if counter == 10:
          continue  # Bypasses the increment, but it's the end of the boundary condition
     counter += 1

```

---

## 4. Comparing `continue`, `break`, and `exit()`

Let's look at a practical e-commerce shopping cart calculation scenario to see exactly how changing a jump statement alters how your program behaves when it encounters a negative price error.

### Scenario A: Ignore Bad Input (`continue`)

If a user enters a negative price, we simply skip adding it and let them continue adding items.

```python
sum = 0

while True:
     price = int(input("Enter Item Price: "))
     if price < 0:
          print("Invalid price ignored.")
          continue  # Skips the addition step, loops back up for the next price input
     sum += price
     print(f"Current Running Total: {sum}")

```

### Scenario B: Stop Checkout Entirely (`break`)

If a user enters a negative price, we stop taking inputs immediately and proceed to compute the checkout total for the valid items already entered.

```python
sum = 0

while True:
     price = int(input("Enter Item Price: "))
     if price < 0:
          break  # Instantly leaves the loop
     sum += price
     print(f"Current Running Total: {sum}")

print("Total: ", sum)  # This line successfully runs after the break

```

### Scenario C: Crash/Terminate the Program (`exit()`)

If a user enters a negative price, we treat it as a security violation or system fault. The entire app shuts down immediately, and code below the loop never runs.

```python
sum = 0

while True:
     price = int(input("Enter Item Price: "))
     if price < 0:
          print("Critical Error: Program terminating.")
          exit(2)  # Stops the entire script right here. Sends status code 2 to OS analytics.
     sum += price
     print(f"Current Running Total: {sum}")

print("Total: ", sum)  # This line will NEVER run if exit() is triggered!

```

---

## 5. System Shutdown Analytics with `exit(status_code)`

When you use `exit()`, you can pass an integer number inside the parentheses (called a **Status Code** or **Exit Status**):

* `exit(0)` means the program closed cleanly and successfully with zero errors.
* `exit(1)`, `exit(2)`, or any non-zero number means the program terminated due to an issue or custom event trigger.

Here is an input tracking routine that demonstrates this:

```python
total = 0

while True:
     number = int(input("Enter A number: "))

     if number == 0:
          print("0 is not added")
          continue  # Skips directly to the next input loop

     print("Doing calculations")
     if number < 0:
          exit(1)  # Kills the script instantly with status flag code 1
     else:
          total = total + number

# All of these terminal statements are completely abandoned if exit() triggers!
print(f"Sum of all values are {total}")
print("hello")
print("hello")
print("hello")
print("hello")

```
