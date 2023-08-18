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
package main

import ("fmt")

func main(){

	// Displaying integer 
	fmt.Println(34435)
	fmt.Println(0)
	fmt.Println(-34)

	// Displaying float 
	fmt.Println(-45.654)
	fmt.Println(5.0)
	fmt.Println(0.0)

	// Displaying string 
	fmt.Println(`sdfgsdf3478347^$%$%`)
	fmt.Println("asfdsdf$#%$654")

	// Displaying rune
	fmt.Println('a') // a ASCII value 97
	fmt.Println('%') // % ASCII value 37
	fmt.Println('4') // 4 ASCII value 52
	fmt.Println(')') // ) ASCII value 41

	// Displaying boolean
	fmt.Println(true)
	fmt.Println(false)
}
```

Output:
```
[vipikuma@kvy learn_golang]$ go run Day05/data_type.go 
34435
0
-34
-45.654
5
0
sdfgsdf3478347^$%$%
asfdsdf$#%$654
97
37
52
41
true
false
```

### Format specifiers

Format specifiers helps us in printing multiple data types in a single statement.
They specifies type of data we are using in the statement.

### %d

This specifier is used to display integers.

### %s

This specifier is used to display strings without `"`.

### %q

This specifier is used to display strings with `"`.

### %f

This specifier is used to display float ( Decimal Values ).

### %t

This specifier is used to display boolean values.

### %T

This specifier is used to display the type of the data/variable.

### %v

This specifier is used to display any kind of data. For example it can do work of `%d`, `%s`, `%f` ,`%t` etc.....

### Examples of Format specifiers
```
package main

import ("fmt")

func main(){
	fmt.Printf("This is an int value %d.\n", 7)
	fmt.Printf("This is an float value %f.\n", 45.6)
	fmt.Printf("This is an string value without quote %s.\n", "Vipin")
	fmt.Printf("This is an string value with quote %q.\n", "vipin")
	fmt.Printf("This is an boolean value %t.\n", false)
	fmt.Printf("Type of first value %T, second value %T.\n", 7, "Vipin")
	fmt.Printf("Print int  %v, print str %v print float.\n", 7, "Vipin", 45.6)
}
```
Output:
```
[vipikuma@kvy learn_golang]$ go run Day07/formatspecifiers.go 
This is an int value 7.
This is an float value 45.6.
This is an string value without quote Vipin.
This is an string value with quote "vipin".
This is an boolean value false.
Type of first value int, second value string.
Print int  7, print str Vipin print float.
```

Display ony 2 digit after decimal in float value.
```
package main

import ("fmt")

func main(){
	fmt.Printf("It will use space of 10 characters in terminal %10f.\n", 4.5)
	fmt.Printf("It will display only 2 number after decimal %.2f.\n", 4.5455)
}
```
Output:
```
[vipikuma@kvy learn_golang]$ go run Day07/float_specifiers.go 
It will use space of 10 characters in terminal __4.500000. (__4.500000 = 10 character)
It will display only 2 number after decimal 4.55.
```


These are a few more specifier GO lang supports.

```
%b	base 2
%c	the character represented by the corresponding Unicode code point
%o	base 8
%O	base 8 with 0o prefix
%x	base 16, with lower-case letters for a-f
%X	base 16, with upper-case letters for A-F
%U	Unicode format: U+1234; same as "U+%04X"
%e	scientific notation, e.g. -1.234456e+78
%E	scientific notation, e.g. -1.234456E+78
%f	decimal point but no exponent, e.g. 123.456
%F	synonym for %f
%g	%e for large exponents, %f otherwise. Precision is discussed below.
%G	%E for large exponents, %F otherwise
%p	address of 0th element in base 16 notation, with leading 0x
```

# Variable
A variable is a placeholder of some value,
Each variable name has some data type.

## How to define a variable:

Using `var` keyword:
We need to have a name to which we will be assigning a value I am using `system` and the value I will be putting is this variable is `vipin's system` and we use the keyword `var` to define a variable in go lang.

## Short variable declarations
you can use `:=` to define a variable in go lang ex: `system := "vipin's system"`.
Here also we are defining a variable name `system` with value `vipin's system`.

NOTE: In case of Short variable declarations you must assign a value to the variable.

There are a few rules to define variable names in GO lang:

* A variable names can not have any character then underscore `_`.
* It should not be a keyword of GO language.
* A variable names can not start with an numeric value
* Variable names in go are case sensitive ( variable name `system` and `System` are not same ).
* A variable name can not be defined twice.


Here are a few more examples on how to defining variables:
```
package main

import ("fmt")

func main(){
	var system string
	system = "vipin's system"
	fmt.Println(system)
}
```

```
package main

import ("fmt")

func main(){
	var system = "vipin's system"
	var System = "vipin's system"
	fmt.Println(system)
	fmt.Println(System)
}
```

```
package main

import ("fmt")

func main(){
	var a = 545
	fmt.Println(a)
}
```

```
package main

import ("fmt")

func main(){
	var b = 'a'
	fmt.Println(b)
}
```

```
package main

import ("fmt")

func main(){
	var c = true
	fmt.Println(c)
}
```

A few examples of defining wrong variable names in GO lang:
```
package main

import ("fmt")

func main(){

	var import = "wrong variable name because it's a keyword of the go lang"
	fmt.Println(import)

	var 1wrong_variable_name = "wrong variable name because it's starting from a numeric value"
	fmt.Println(1wrong_variable_name)

	var wrong-variable_name = "wrong variable name as it has `-` in it"
	fmt.Println(wrong-variable_name)

	var variable_name = "This is a right variable name to understand the concept of case sensitive"
	fmt.Println(variable_name)

	var variable_name = "wrong variable name as variable_name is already defined"
	fmt.Println(variable_name)
}
```

NOTE: If a Variable name is defined and not used GO will through an error something like this.
```
# command-line-arguments
<your_file_name>.go:<line:number>: <your variable name> declared but not used
```

```
package main

import ("fmt")

func main(){

	var name="vipin"
}

```
Output:
```
# command-line-arguments
Day06/wrong_variable_name.go:3:9: imported and not used: "fmt"
Day06/wrong_variable_name.go:7:6: name declared but not used
```


Doc was written in this livestream [[Learn Go Day 05]](https://www.youtube.com/watch?v=LRRA33vWtlo)
and in [[Learn Go Day 06]](https://www.youtube.com/watch?v=BtkTn1kjOiE) and in and in [[Learn Go Day 07]](https://www.youtube.com/watch?v=kkNJRjr76Is)

