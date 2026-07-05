---
title: Hello World And Escape Sequence In Python
categories: python
tags: [python]
---

# Hello World And Escape Sequences In Python

Hello Everyone Python is a very easy and simple language.

Let us start with it.

First of all, I will tell you that Python is a high-level, interpreted programming language, which was developed by Guido van Rossum and released in 1991. Unlike languages where you have to worry about memory management, Python takes care of it for you, allowing you to focus entirely on *what to do*.

It is one of the most popular languages because it is easy to read, write, and run across multiple platforms like Windows, Mac, and Linux.

---

## Features Of Python Language

* It’s a very easy language with a clean and readable syntax
* It’s a general-purpose language used in Web Dev, Data Science, and Automation
* It supports multiple programming paradigms (Procedural, Object-Oriented, and Functional)
* It has a massive standard library providing predefined solutions for almost any task

#### Environment to write Code:

So to run a Python program, you just need Python installed on your system. I would suggest you use a simple Text Editor or Notepad as your text editor and run your code via Terminal or PowerShell.

In Linux and Mac, we open the terminal and use the command:

```bash
python3 name_of_program.py

```

In Windows, we open the PowerShell or Command Prompt and use:

```cmd
python name_of_program.py

```

This will instantly execute and show you the Output of the program without needing a separate compilation step.

---

## Structure Of A Python Program

Unlike C, Python doesn't require boilerplate code like `#include` or `main()` blocks to print something. You can directly write a statement, and it executes.

Let's look at a basic setup to print text:

```python
print("Hello World.")

```

`print()` : Is a built-in function in Python that handles outputting text to the console.

`"Hello World."` : The text inside the quotation marks is a string passed as an argument to the function.

**NOTE: Unlike C, Python does NOT require a semicolon (`;`) at the end of a statement. A new line itself represents the end of a statement.**

*Here is the execution:*

```bash
$ ls
hello_world.py
$ python3 hello_world.py
Hello World.
$ 

```

---

## Working With Strings & Quotes

In Python, you can define strings using either single quotes (`' '`) or double quotes (`" "`). This gives you a lot of flexibility when your text contains quote characters.

```python
print('It"s her choice')
print("It's her choice.")

```

If your sentence contains a single quote (like *It's*), you can enclose the whole string in double quotes so Python doesn't get confused about where the string ends.

---

## What Are Escape Sequences?

Sometimes we want to print special characters or format our output (like adding a new line or a tab) inside a string. To do this, we use a backslash (`\`) followed by a specific character. This combination is known as an **Escape Sequence**.

##### Here is the list of Escape Sequences in Python

| Escape Sequence | Description | Example Output |
| --- | --- | --- |
| `\n` | New line | Hello`\n`World → Splits into two lines |
| `\t` | Horizontal tab | Hello`\t`World → Adds a wide space |
| `\r` | Carriage return | Hello`\r`World → Overwrites the line starting with World |
| `\b` | Backspace | Helloo`\b` → Deletes the extra 'o' |
| `\f` | Form feed | Rarely used |
| `\v` | Vertical feed | Rarely used |
| `\a` | Bell (alert) | May beep or alert on some systems |
| `\\` | Backslash | Used to print a literal `\` |
| `\'` | Single quote | Used to print a literal `'` inside single quotes |
| `\"` | Double quote | Used to print a literal `"` inside double quotes |

---

## Let's See Them In Action

Let's write a script containing all these concepts to see how they impact our output console.

```python
print("Hello\aWorld.")
print("Hello\aworld.")

print("she\\her")
print("they\\them")

print("Hello This is\n line feed or newline. \n")
print("Hello This is\b backspace. \n")
print("Hello This is\a alert or bell. \n")
print("Hello This is\f form feed. \n")
print("Hello This is\v vertical tab. \n")
print("Hello This is\r carriage return. \n")
print("Hello This is\t horizontal tab. \n")
print("Hello This is\\ backslash. \n")
print("Hello This is\' single quote. \n")
print("Hello This is\" double quote. \n")

```

When you run this script, the backslash characters won't print directly. Instead, they change the formatting—causing lines to break, spaces to stretch, characters to clear backwards, or even your console to trigger a system beep!