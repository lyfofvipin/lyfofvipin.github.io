---
title: Variables and Data Types
categories: go
tags: [go]
---

# Data Type
Data Types is a way to find the type of values in programming languages.
There can be multiple type of data for example.

## Integers
Any non-decimal numeric value is referred as an Integer.

Examples:

`3` --> `Yes`

`0` --> `Yes`

`-3243` --> `Yes`

`-2` --> `Yes`

`1.5` --> `No`

`-4.5` --> `No`

`4.0` --> `No`

There can be multiple type of integers in GO language based on the computer architecture:
This can help in implementing specific type of application for specific architecture.
Let's say if you are building a application for only 32 bit architecture then you can use `int32`.
But if you only specify `int` then it will auto detect the architecture and compile the code based on that.


```
uint8       unsigned  8-bit integers (0 to 255)
uint16      unsigned 16-bit integers (0 to 65535)
uint32      unsigned 32-bit integers (0 to 4294967295)
uint64      unsigned 64-bit integers (0 to 18446744073709551615)
int8        signed  8-bit integers (-128 to 127)
int16       signed 16-bit integers (-32768 to 32767)
int32       signed 32-bit integers (-2147483648 to 2147483647)
int64       signed 64-bit integers (-9223372036854775808 to 9223372036854775807)
```

## Float
Any decimal numeric value is referred as an Float.

Examples:

`1.0` --> `Yes`

`-435.6` --> `Yes`

`0.0` --> `Yes`

`34.5` --> `Yes`

`43`  --> `No`

There can be multiple type of floats in GO language based on the computer architecture:
This can help in implementing specific type of application for specific architecture.
Let's say if you are building a application for only 32 bit architecture then you can use `float32`.
But if you only specify `float` then it will auto detect the architecture and compile the code based on that.

```
float32     IEEE-754 32-bit floating-point numbers
float64     IEEE-754 64-bit floating-point numbers
complex64   complex numbers with float32 real and imaginary parts
complex128  complex numbers with float64 real and imaginary parts
```

## Boolean
This data type only has 2 values.
`true` and `false` This data type can be very helpful while working with the conditions in loops and if-else statements ( will be reading the same soon ).

## String
Any values written inside \`\` ( back quote ) or "" ( double quote) is refereed as a string.

Examples:

"Vipin" --> `Yes`

\`test\` --> `Yes`

\`122343\` --> `Yes`

"&*$#(chartest" --> `Yes`

"test space" --> `Yes`

\`true\`  --> `Yes`

true  --> `No`

2323242 --> `No`

## Rune

Any single character written inside `''` is referred as a rune.

Examples:

`'4'` --> `Yes`

`'a'` --> `Yes`

`'$'` --> `Yes`

`'%'` --> `Yes`

`'23'` --> `No`

`'t%'` --> `No`

If you try to display a rune type value It will display the [ASCII](https://en.wikipedia.org/wiki/ASCII)) ( A numeric representation of characters for electronic communication ) value for the same.


There are other Data Type like `Array`, `slice` and `map` which we will be covering later as we need some understanding of these basic data types first.

A simple program to understand these data types.

```

```

# Variable
A variable is a placeholder of some value,
Each variable name has some data type.