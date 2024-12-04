---
title: Variable and data type  in C
categories: c
tags: [c]
---

# Using variables

C variable is nothing but it is just a name is given to any data type or to any storage area that our program can use.

## Rules To Create Variables in C

The name of a variable can be composed of letters, digits and the underscores.

* A variable names can not have any character then underscore `_`.
* A variable names can not start with an numeric value
* Variable names in go are case sensitive ( variable name `system` and `System` are not same ).
* A variable name can not be defined twice.
* It should not be a keyword of c.
* You can not redefine or redeclare a variable in C

*NOTE: Name of variable should be of your choice.*

Find Correct Names:

`void`

`1var`

`_test`

`test-var`


A data type is nothing it is just the type of data we are using like if integer character decimal number and Many other kind of data.

## Let us discuss different data types in C

### *PRIMARY DATA TYPE*

### *SECONDARY DATA TYPE*

### PRIMARY DATA TYPE

#### Integer

It is Kind of data type which tell that a integer is being used in a program
in easy language we can say that a number is use in our program.

#### Character data type

It is a kind of data type which tell that a character
even that is symbol for a letter or an alphabet is used in our program.

#### Double data type

This data type tell us that a decimal number is being used a program for printing for taking a decimal number from user
the same work is being done by float data type but
float data type round off our number and double data type does not round orf number.

#### Float data type

It is also act as double data type it also tell that it is a molecule your program
but it round off that decimal number.

#### Void data type

This is a data type has no value we use it to set any null or no value to a variable.


### SECONDARY DATA TYPE

This data type use while we learn modular programming
in c they form using primary data types.


## How to define variables in C

To define variables in C language we have to first mention the type of data like `int`, `float` etc..

Then we mention variable name and setting value during the definition is optional but we can do that.

Example:

`int var_name;`

`float var_name;`

`int var_name = 45;`


## Format specifiers

Format specifiers helps us in printing multiple data types in a single statement.
They specifies type of data we are using in the statement.

### integers

`%d` specifier is used to display integers with decimal base

`%o` specifier is used to display integers with octal base

`%x` specifier is used to display integers with hexa base


### characters

`%c` specifier is used to display characters example `"a"`, `"("`, `"#"` etc...

### float

`%f` specifier is used to display float till 6 decimal places.

`%g` specifier is used to display float till user given decimal places ( It will round off the value ).

`%e` specifier is used to display float in scientific users.


## Flags For Format Specifiers

We can use flags with format specifiers to settle our output in a pretty manner.

Example:

`printf("%4d", 34)`

`printf("%.4d", 34)`

`printf("%10.4f", 34.45)`

`printf("%.4f", 34.45)`
