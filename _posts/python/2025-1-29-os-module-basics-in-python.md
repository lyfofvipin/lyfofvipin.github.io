---
title: File System Automation and Command Line Arguments in Python
categories: python
tags: [python]
---


# Master Guide to File System Automation and Command Line Arguments in Python

Hello Everyone! Today we are diving into interacting with the operating system using Python's built-in **`os`** and **`sys`** modules.

With these tools, you can automate repetitive file tasks, filter directories, build custom terminal-like interfaces, and pass inputs into your scripts directly from the command line.


## 1. Deep Dive into File System Automation with `os`

The `os` module provides a powerful suite of functions to navigate, inspect, and modify directories and files on your computer.

### Common File System Operations

* **`os.listdir()`**: Returns a raw list containing the names of all entries (both files and folders) inside the current directory.
* **`os.remove(filename)`**: Permanently deletes a specific file from the file system.
* **`os.path.exists(path)`**: Returns `True` or `False` depending on whether a specific file or directory path physically exists.

### Classifying Directories vs. Files

When you read a directory using `os.listdir()`, it returns strings representing the names of items. To check what those items actually are, use the **`os.path`** sub-module:

* **`os.path.isdir(item)`**: Checks if the item is a folder/directory.
* **`os.path.isfile(item)`**: Checks if the item is a standalone file.

```python
import os

# Filter and display Python files only
all_items = os.listdir()
print("--- Python Files ---")
for item in all_items:
    if item.endswith(".py"):
        print(item)

```

---

## 2. Hands-On Project: Building a Custom Terminal Simulator

By combining a `while True` loop, `match-case` state controls, and `os.path` validation methods, you can build a interactive command-line simulator to filter directories on the fly:

```python
import os

print("=== Custom Python Terminal Shell Initialized ===")
print("Commands: ls | lsfolder | lsfiles | exit")

while True:
    command = input("--> ").strip()
    
    match command:
        case "ls":
            # Direct raw list dump of the directory
            print(os.listdir())
            
        case "lsfolder":
            # Loop through and print directories only
            for item in os.listdir():
                if os.path.isdir(item):
                    print(f"[Folder] {item}")
                    
        case "lsfiles":
            # Loop through and print files only
            for item in os.listdir():
                if os.path.isfile(item):
                    print(f"[File]   {item}")
                    
        case "exit":
            print("Closing terminal simulator...")
            break
            
        case _:
            print("Invalid command! Please use: ls, lsfolder, lsfiles, or exit.")

```

---

## 3. Capturing Terminal Input with Command Line Arguments (`sys.argv`)

Sometimes you don't want your program to pause and wait for an interactive `input()` prompt. Instead, you want to pass arguments into the script the exact moment you run it from your terminal window.

We do this using **`sys.argv`**.

> **What is `sys.argv`?** It is a built-in Python list that automatically stores the arguments passed to a script from the command line.
> * `sys.argv[0]` always holds the name of the script itself.
> * `sys.argv[1]` captures the very first input modifier string typed after the script name.
> 
> 

### Script Implementation Example (`trade.py`)

```python
import sys

def buy_stocks():
    print("Executing BUY order processing...")

def sell_stocks():
    print("Executing SELL order processing...")

# Ensure an argument was actually passed to prevent IndexError crashes
if len(sys.argv) < 2:
    print("Error: Missing operation argument! Usage: python trade.py [buy|sell]")
else:
    # Capture the flag passed at index index index index 1
    operation = sys.argv[1].lower()

    if operation == "buy":
        buy_stocks()
    elif operation == "sell":
        sell_stocks()
    else:
        print(f"Error: Unknown operation '{operation}'. Use 'buy' or 'sell'.")

```

### How to Execute This in Your Terminal

To run this application, pass your argument modifiers right after calling the script file name:

```bash
$ python trade.py buy
Executing BUY order processing...

$ python trade.py sell
Executing SELL order processing...

```