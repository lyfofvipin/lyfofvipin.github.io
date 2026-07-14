---
date: '2025-02-05'
tags:
- python
- json
title: JSON Parsing and Serialization in Python
---
# Master Guide to JSON Parsing and Serialization in Python

Hello Everyone! Today we are exploring **JSON (JavaScript Object Notation)** and learning how to translate it into native Python objects using the built-in **`json`** module.

JSON is the standard format for web data exchange. Whether you are building web APIs, fetching data from external services, or saving local configuration files, you will use JSON constantly.


## 1. What is JSON?

JSON is a lightweight, plain-text, language-independent data format. Even though it has "JavaScript" in its name, almost all programming languages have built-in tools to read and write it.

JSON data maps incredibly closely to structures you already know in Python:

* **Objects `{}**`: Exactly like Python **dictionaries**. They store key-value pairs, but keys *must* be strings wrapped in double quotes.
* **Arrays `[]**`: Exactly like Python **lists**. They store ordered sequences of values.

### Data Type Mapping Differences

When data moves between Python and JSON, the types change slightly to match platform specifications:

| Python Data Type | JSON Equivalent Data Type | Key Difference / Note |
| --- | --- | --- |
| **`dict`** | `object` | JSON objects use curly braces `{}`. |
| **`list`**, `tuple` | `array` | JSON arrays use square brackets `[]`. |
| **`str`** | `string` | **Must** use double quotes (`"text"`), never single quotes. |
| **`True`** / **`False`** | `true` / `false` | JSON booleans are entirely lowercase. |
| **`None`** | `null` | Used for empty or missing data values. |

---

## 2. Encoding: Converting Python to JSON (Serialization)

The process of converting a Python object into a JSON format is called **Encoding** or **Serialization**. The `json` module provides two distinct functions depending on your target output destination:

* **`json.dumps()` (Dump String):** Converts a Python dictionary/list into a single JSON-formatted string. Use this when sending data over networks.
* **`json.dump()` (Dump File):** Writes a Python object directly onto an open text file on your hard drive. Use this for saving data or app settings.

```python
import json

python_data = {
    "name": "Bob",
    "items": [10, 20, 30],
    "is_vip": False,
    "notes": None
}

# 1. Serialize to a JSON String
json_string = json.dumps(python_data)
print(json_string)       # Output: {"name": "Bob", "items": [10, 20, 30], "is_vip": false, "notes": null}
print(type(json_string)) # Output: <class 'str'>

# 2. Serialize and save directly to a File
# Use the 'indent' parameter to add clean spacing and make the file beautiful to read!
with open("data_output.json", "w") as f:
    json.dump(python_data, f, indent=4)

```

---

## 3. Decoding: Converting JSON to Python (Parsing)

The process of translating JSON format back into native Python types is called **Decoding** or **Parsing**. Just like encoding, you choose your tool based on your data source:

* **`json.loads()` (Load String):** Parses a raw JSON string into a native Python dictionary or list.
* **`json.load()` (Load File):** Reads a `.json` file from your disk and parses it straight into native Python objects.

```python
import json

# 1. Parsing a JSON String
# CRITICAL: The JSON string itself can use single quotes outside, but internal keys MUST use double quotes!
json_input_string = '{"city": "London", "temperature": 15.5, "unit": true}'

python_dict = json.loads(json_input_string)
print(python_dict)               # Output: {'city': 'London', 'temperature': 15.5, 'unit': True}
print(type(python_dict))         # Output: <class 'dict'>
print(python_dict["temperature"]) # Accessible exactly like any normal dictionary key!

# 2. Parsing directly from a File
with open("data_output.json", "r") as f:
    loaded_data = json.load(f)

print(loaded_data)
print(type(loaded_data)) # Output: <class 'dict'>

```

---

## 4. Summary Memory Rule: The "s" Rule

It is easy to mix up these four functions when you are coding. Use this simple memory rule to keep them straight:

> If the function ends with an **"s"** (`dumps`, `loads`), it operates on a **S**tring.
> If it does **not** end with an "s" (`dump`, `load`), it operates on a **F**ile stream interface!