---
title: While Loop Lab Work
categories: python
tags: [python]
---

# Comprehensive Python Practice Workbook: Data Structures and Control Flow

Hello Everyone! Welcome to your master practice repository. This comprehensive workbook combines core structural algorithmic control streams with deep-dive technical interview scenarios across every foundational Python collection container type: **Strings**, **Lists**, **Sets**, **Dictionaries**, and **Tuples**.


## Master Table of Contents

* While Loops & Algorithmic Patterns
* Visual Star Patterns
* Mathematical Loops
* Loops with Strings
* Input Validation Loops
* Strings Deep Dive
* String System Operations (No Loops)
* Loop-Based String Aggregations
* Lists Deep Dive
* List Reference & Slicing Operations (No Loops)
* Loop-Based List Mutators
* Sets Deep Dive
* Dictionaries Deep Dive
* Tuples Deep Dive

---

## 1. While Loops & Algorithmic Patterns

### Visual Star Patterns

```
Star Printing QNA:
* * * *
* * * *
* * * *
* * * *

*
* *
* * *
* * * *
* * * * *

* * * * *
* * * *
* * *
* *
*


        *
      * *
    * * *
  * * * *
* * * * *


    *
   * *
  * * *
 * * * *
* * * * *


    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *

```

#### Square Block Matrix

```python
row = 1
while row <= 4:
     print("* " * 4)
     row += 1

```

#### Left-Aligned Growing Triangle

```python
row = 1
while row <= 5:
     print("* " * row)
     row += 1

```

#### Left-Aligned Inverted Triangle

```python
row = 5
while row >= 1:
     print("* " * row)
     row -= 1

```

#### Right-Aligned Growing Triangle

```python
row = 1
while row <= 5:
     spaces = "  " * (5 - row)
     stars = "* " * row
     print(spaces + stars)
     row += 1

```

#### Symmetrical Isosceles Pyramid

```python
row = 1
while row <= 5:
     spaces = " " * (5 - row)
     stars = "* " * row
     print(spaces + stars)
     row += 1

```

#### Symmetric Diamond Pattern

```python
# Upper Triangle
row = 1
while row <= 5:
     print(" " * (5 - row) + "* " * row)
     row += 1
# Lower Inverted Triangle
row = 4
while row >= 1:
     print(" " * (5 - row) + "* " * row)
     row -= 1

```

---

### Mathematical Loops

#### Digit Reversal via Math Operations

```python
number = int(input("Enter an integer to reverse: "))
reversed_num = 0

while number > 0:
     remainder = number % 10
     reversed_num = (reversed_num * 10) + remainder
     number = number // 10

print(f"Reversed Number: {reversed_num}")

```

---

### Loops with Strings

#### Character Vowel Extraction Scanner

```python
text = input("Enter a string: ")
index = 0
vowel_count = 0

while index < len(text):
     char = text[index]
     if char in "aeiouAEIOU":
          vowel_count += 1
     index += 1

print(f"Total Vowels: {vowel_count}")

```

#### Case Inversion Character Switcher

```python
text = input("Enter mixed case string (e.g. PyThOn): ")
index = 0
result_str = ""

while index < len(text):
     char = text[index]
     if char.isupper():
          result_str += char.lower()
     elif char.islower():
          result_str += char.upper()
     else:
          result_str += char
     index += 1

print(f"Inverted Output: {result_str}")

```

---

### Input Validation Loops

#### Multi-Criteria Secure Gatekeeper

```python
while True:
     password = input("Establish a secure password: ")
     
     if len(password) < 8:
          print("Fail: Entry must be at least 8 characters long.")
          continue
          
     # Check for digits and special characters manually
     has_digit = False
     has_special = False
     index = 0
     
     while index < len(password):
          char = password[index]
          if char.isdigit():
               has_digit = True
          elif char in "$#@!%^&*()-_=+[{]};:',<.>/?`~|\\":
               has_special = True
          index += 1
          
     if not has_digit:
          print("Fail: Must contain at least one digit (0-9).")
          continue
     if not has_special:
          print("Fail: Must contain at least one special character ($ or # or @).")
          continue
          
     print("Password accepted!")
     break

```

---

## 2. Strings Deep Dive

### String System Operations (No Loops)

```python
# 1. Whitespace Sanitizer
email = "   alex@gmail.com   "
cleaned_email = email.strip()

# 2. Protocol Header Verification
url = "https://xyz.com"
is_secure = url.startswith("https")

# 3. Trailing Boundary Eraser
log_entry = "[ERROR]===System Crash==="
cleaned_log = log_entry.rstrip("=")

# 4. File Extension Validator
document = "final_report.pdf"
is_pdf = document.endswith(".pdf")

# 5. Case-Insensitive Search Converter
user_search = "IPHONE"
db_query = user_search.lower()

# 6. Structured Right-Justification Padding
price = "450"
aligned_price = price.rjust(10)

# 7. Substring Replacement Mapping
msg = "This software has a nasty bug"
fixed_msg = msg.replace("bug", "feature")

# 8. Syntax Comment Sign Check
line = "# This is a comment line"
is_comment = line.startswith("#")

# 9. Left Side Boundary Truncation
domain = "www.google.com"
clean_domain = domain.lstrip("w.")

# 10. Retro Arcade Zero Padding Formatter
score = "75"
padded_score = score.zfill(5)

# 11. Clean URL Slug Generator
title = "blue running shoes"
url_slug = title.replace(" ", "-")

# 12. Newline Character Strip Safety Clean
key = "KEY123XYZ\n"
clean_key = key.rstrip("\n")

# 13. High Visibility Upper-Case Converter
server = "sub-domain-01"
loud_server = server.upper()

```

#### 14. String Mutability Conceptual Prediction Case

```python
username = "guest123"
username.upper()
print(username)

```

**Output:** `guest123`

**Technical Reason:** Strings in Python are **immutable** (unchangeable in memory). Running `.upper()` creates a completely brand-new string object in memory rather than modifying the original instance. Because the result was not reassigned back to the variable (`username = username.upper()`), the print output remains unaffected.

```python
# 15. Spam Filter Core Substring Index Finder
email_body = "Get rich quick! Click here now!"
position = email_body.find("Click")

# 16. Specific Token Occurrence Calculator
paragraph = "Python is great because python code is easy to read"
python_count = paragraph.lower().count("python")

# 17. Alphanumeric Rule Enforcement
username_input = "coder_99"
is_valid_user = username_input.isalnum() # False due to underscore '_'

# 18. Pre-Conversion Digit Guard Verification
birth_year = "2005"
is_numeric_year = birth_year.isdigit()

# 19. Initial Sentence Capitalization
blog_title = "10 tips for learning python"
clean_title = blog_title.capitalize()

# 20. Shouting Character Evaluation
chat = "HELP ME PLEASE!!"
is_shouting = chat.isupper()

```

#### Slicing, Searching, and Core String System Methods Questions (Quick Answers)

* **Reversing a string via slicing:** `reversed_str = text[::-1]`
* **Convert initial character only to uppercase, rest to lowercase:** `text.capitalize()`
* **Extract length constraint calculation:** `len(text)`
* **Count matching character hits without a loop:** `text.count('a')`
* **Isolate initial 3 indexing blocks:** `text[0:3]` or `text[:3]`
* **Verify specific terminal characters without a loop:** `text.endswith("ing")`
* **Swap spaces for structural hyphens:** `text.replace(" ", "-")`
* **Verify absolute digit content composition:** `text.isdigit()`
* **Locate starting index tracker coordinate of substring:** `text.find("Python")`
* **Verify Palindrome symmetry state via slicing:** `is_palindrome = (text == text[::-1])`

---

### Loop-Based String Aggregations

#### Individual Character Extraction Line Iterator

```python
text = "Python"
for char in text:
     print(char)

```

#### Loop-Driven Structural Inversion Engine

```python
original = "Data"
reversed_str = ""
for char in original:
     reversed_str = char + reversed_str
print(reversed_str)

```

#### Accumulator Space Tracking Metrics Scanner

```python
sentence = "System Logs Track Terminal Entries"
space_count = 0
for char in sentence:
     if char == " ":
          space_count += 1
print(f"Total Spaces: {space_count}")

```

#### Manual Index Element Allocation Copy Test

```python
source = "Catalyst"
destination = ""
for char in source:
     destination += char
print(destination)

```

#### Alternate Array Index Structural Upper-Case Shift

```python
input_str = "python"
output_str = ""
for index in range(len(input_str)):
     if index % 2 == 0:
          output_str += input_str[index].upper()
     else:
          output_str += input_str[index].lower()
print(output_str) # Output: PyThOn

```

#### Manual Unique Collection Filter (Duplicate Eliminator Loop)

```python
raw_input = "bookkeeper"
unique_str = ""
for char in raw_input:
     if char not in unique_str:
          unique_str += char
print(unique_str)

```

---

## 3. Lists Deep Dive

### List Reference & Slicing Operations (No Loops)

#### UI Undo Feature Reference Mutability Assessment

```python
current_actions = ["line", "circle", "square"]
backup_actions = current_actions
current_actions.append("triangle")

```

**Output of `backup_actions`:** `["line", "circle", "square", "triangle"]`

**Technical Reason:** Assigning a list variable directly to another (`backup_actions = current_actions`) does not create a clean copy of the data. Instead, it copies the **memory address reference reference**. Both variables point to the exact same list entity in memory, meaning operations done through either handle affect the shared target block.

```python
# E-Commerce Terminal Reverse Extract Slicing
cart = ["shoes", "shirt", "watch", "hat", "belt", "socks"]
last_three = cart[-3:]

```

#### Sorting Order Priority Case Breakdown

```python
tags = ["banana", "Vipia", "apple", "cherry", "vipin"]
tags.sort()
print(tags)

```

**Sorted Array Output:** `['Vipia', 'apple', 'banana', 'cherry', 'vipin']`

**Technical Reason:** Python sorts items based on their internal alphanumeric ASCII dictionary definitions. All **uppercase character symbols** are categorized ahead of lowercase variants (e.g., `'V'` has an ASCII index of 86, whereas `'a'` is 97).

```python
# Downsample Slicing Step Extraction
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
every_fourth = numbers[::4]

# Position-Based Index Feed Insertion
notifications = ["Like", "Comment"]
notifications.insert(0, "New Follower")

```

#### Deep Destructuring Extraction Multi-Layer Index Route

```python
log_data = ["Vipin", 25, "Jaipur", 302020, True, ["Test", 43, [23242, [234234]]]]
target_value = log_data[5][2][1][0]
print(target_value) # 234234

```

#### Appending vs Extending Structural Execution Contrast

```python
ledger = [100, -50, 200]
new_batch = [500, -20, 30]

```

* **Case A: `ledger.append(new_batch)**` Inserts the incoming object directly as a single new nested block element:
`[100, -50, 200, [500, -20, 30]]`
* **Case B: `ledger.extend(new_batch)**` Unpacks the elements inside the incoming sequence, appending each individually:
`[100, -50, 200, 500, -20, 30]`

#### Core List Methods Quick Queries (No Loops Allowed)

* **Access final array item element:** `last_item = my_list[-1]`
* **Invert index sequence via stride slicing execution:** `reversed_list = my_list[::-1]`
* **Append item tracking update to base end:** `my_list.append(new_element)`
* **Extract container population metric dimension:** `len(my_list)`
* **Sum numeric collection instantly without iteration:** `sum(my_list)`
* **Extract absolute maximum and minimum metrics:** `max(my_list)`, `min(my_list)`
* **Quantify specific occurrence matches:** `my_list.count(5)`
* **Slice out initial three tracking array units:** `my_list[:3]`
* **Purge all container content elements completely:** `my_list.clear()`
* **Verify absolute item existence flag:** `"Python" in my_list`

---

### Loop-Based List Mutators

#### Extraction Loop Squares Mapping Transform

```python
base_numbers = [2, 3, 4]
squares_list = []
for num in base_numbers:
     squares_list.append(num ** 2)
print(squares_list) # [4, 9, 16]

```

#### Manual Search Logic Verification Block

```python
# Checking for item without using the 'in' keyword
target = "vipin"
items = ["apple", "cherry", "vipin"]
found = False

for item in items:
     if item == target:
          found = True
          break
print(f"Target present state match: {found}")

```

#### Elements Array Zero Stride Displacement Shuffle

```python
raw_array = [0, 1, 0, 3, 12]
non_zeros = []
zeros_count = 0

for num in raw_array:
     if num != 0:
          non_zeros.append(num)
     else:
          zeros_count += 1

sorted_output = non_zeros + ([0] * zeros_count)
print(sorted_output) # [1, 3, 12, 0, 0]

```

#### Multi-Dimensional Nested Sequence Extraction (Flattening Array)

```python
matrix = [[1, 2], [3, 4]]
flat_list = []

for sublist in matrix:
     for item in sublist:
          flat_list.append(item)
print(flat_list) # [1, 2, 3, 4]

```

---

## 4. Sets Deep Dive

Sets are unordered collections of unique elements. They are exceptionally fast for membership testing and eliminating duplicates.

### Set Iterations and Calculations With Loops

```python
# 1. Stride Value Multiplier
num_set = {1, 2, 3}
for item in num_set:
     print(item * 10)

# 2. Manual Sum Tracker
total_sum = 0
for item in num_set:
     total_sum += item

# 3. String length evaluation filter
str_set = {"apple", "kiwi", "banana"}
long_count = 0
for s in str_set:
     if len(s) > 4:
          long_count += 1

# 4. Odd values extraction sorting
mixed_nums = {1, 2, 3, 4, 5}
odd_set = set()
for num in mixed_nums:
     if num % 2 != 0:
          odd_set.add(num)

# 5. Union of multiple sets inside a list
list_of_sets = [{1, 2}, {2, 3}, {4}]
unified_set = set()
for s in list_of_sets:
     unified_set = unified_set.union(s)

```

### Direct Set Core Systems Operations (No Loops)

* **Check item dimension capacity:** `len(my_set)`
* **Isolate intersecting values between sets:** `setA.intersection(setB)`
* **Add single item vs update with multiple values:** `my_set.add(item)`, `my_set.update([item1, item2])`
* **Combine all distinct elements across sets:** `setA.union(setB)`
* **Remove an element safely without throwing errors:** `my_set.discard(target_element)`
* **Verify containment match profile criteria:** `setA.issubset(setB)`
* **Purge all components from set completely:** `my_set.clear()`

---

## 5. Dictionaries Deep Dive

Dictionaries store data in key-value pairs, allowing you to look up values instantly using their keys.

### Dictionary Processing Tasks With Loops

```python
inventory = {"apple": 2.5, "banana": 1.8, "cherry": 4.2}

# 1. Print all keys
for key in inventory.keys():
     print(key)

# 2. Print all values
for val in inventory.values():
     print(val)

# 3. Side-by-side pair presentation
for key, val in inventory.items():
     print(f"Key: {key} -> Value: {val}")

# 4. Cumulative evaluation cost total sum
total_cost = 0
for price in inventory.values():
     total_cost += price

```

#### 5. Generate Numbers and Squares using a `while` loop

```python
squares_dict = {}
num = 1
while num <= 5:
     squares_dict[num] = num ** 2
     num += 1
print(squares_dict)

```

```python
# 6. Values Filter Map Extraction
raw_data = {"a": 1, "b": 2, "c": 4}
even_val_dict = {}
for k, v in raw_data.items():
     if v % 2 == 0:
          even_val_dict[k] = v

# 7. Max Metric Evaluation Tracker Search
high_score_dict = {"player1": 45, "player2": 92, "player3": 78}
highest_key = None
for k in high_score_dict:
     if highest_key is None or high_score_dict[k] > high_score_dict[highest_key]:
          highest_key = k

# 8. Structural Key-Value Inversion Swap
base_map = {"X": 10, "Y": 20}
inverted_map = {}
for k, v in base_map.items():
     inverted_map[v] = k

# 9. Manual Loop-Driven Merging Dictionary Combine
dictA = {"a": 1, "b": 2}
dictB = {"b": 99, "c": 4}
merged_dict = dictA.copy()
for k, v in dictB.items():
     merged_dict[k] = v

```

### Direct Dictionary Key lookups and Manipulation (No Loops)

* **Safe key lookup to avoid a `KeyError`:** `my_dict.get("target_key", default_value)`
* **Count key-value pairs:** `len(my_dict)`
* **Add or update an entry:** `my_dict["new_or_existing_key"] = new_value`
* **Extract and remove a key-value pair simultaneously:** `removed_value = my_dict.pop("target_key")`
* **Check if a key exists:** `"target_key" in my_dict`
* **Empty a dictionary completely:** `my_dict.clear()`
* **Merge two dictionaries in a single line:** `merged = {dictA, dictB}` or `dictA.update(dictB)`
* **Extract all keys into a clean list:** `keys_list = list(my_dict)`
* **Initialize a dictionary from a list of keys with a default value of 0:** `new_dict = dict.fromkeys(list_of_keys, 0)`
* **Create a shallow copy of a dictionary:** `cloned_dict = my_dict.copy()`

---

## 6. Tuples Deep Dive

Tuples are ordered collections that are **immutable** (cannot be changed after creation). They are often used to protect data from accidental modifications.

### Tuple Processing Tasks With Loops

```python
mixed_tuple = (10, "apple", 20, "banana", 30)

# 1. Multiline element presentation extraction loop
for item in mixed_tuple:
     print(item)

# 2. Cumulative summation calculator logic
num_tuple = (10, 20, 30)
running_total = 0
for n in num_tuple:
     running_total += n

# 3. Even values tally scanner
even_count = 0
for n in num_tuple:
     if n % 2 == 0:
          even_count += 1

# 4. String sequence merger to sentence string builder
words = ("Python", "is", "awesome")
sentence = ""
for w in words:
     sentence += w + " "
sentence = sentence.strip()

```

#### 5. Manual Elements Search Flag Checking

```python
# Check if an element exists without using the 'in' keyword
target = 20
found = False
for item in num_tuple:
     if item == target:
          found = True
          break

```

```python
# 6. Type filtering data list extraction
integers_only = []
for item in mixed_tuple:
     if type(item) is int:
          integers_only.append(item)
extracted_tuple = tuple(integers_only)

# 7. Maximum extraction scanner algorithm
max_val = num_tuple[0]
for n in num_tuple:
     if n > max_val:
          max_val = n

# 8. Inverse structural data assignment array transfer
cloned_list_reversed = []
index = len(mixed_tuple) - 1
while index >= 0:
     cloned_list_reversed.append(mixed_tuple[index])
     index -= 1

# 9. Manual locator coordinate calculation index position algorithm
target_element = "banana"
found_index = -1
for i in range(len(mixed_tuple)):
     if mixed_tuple[i] == target_element:
          found_index = i
          break

# 10. Multi-Dimensional Nested Tuple Sequence Array Loops
nested_matrix = ((1, 2), (3, 4))
for row in nested_matrix:
     for element in row:
          print(element)

```

### Direct Tuple Core Operations (No Loops)

* **Count total items inside a tuple:** `len(my_tuple)`
* **Count how many times a value appears:** `my_tuple.count(target_value)`
* **Find the first index position of a value:** `my_tuple.index(target_value)`
* **Unpack elements into individual variables:** `var1, var2, var3 = my_tuple` (The number of variables must match the tuple's length exactly!)
* **Reverse a tuple using slicing:** `reversed_tuple = my_tuple[::-1]`
* **Concatenate (join) two tuples:** `combined_tuple = tupleA + tupleB`
* **Repeat a tuple's elements multiple times:** `repeated_tuple = my_tuple * 3`
* **Extract a slice containing the first three items:** `sliced_tuple = my_tuple[:3]`
* **Check if an item exists inside a tuple in one line:** `if item in my_tuple:`

#### Immutability Constraints Evaluation

> **Can you change, add, or remove an element from a tuple after it is created?** > No, because tuples are defined as **immutable** structures in Python's memory architecture. If you need to modify its contents, you must first convert it into a list using `list()`, apply your changes, and convert it back using `tuple()`.