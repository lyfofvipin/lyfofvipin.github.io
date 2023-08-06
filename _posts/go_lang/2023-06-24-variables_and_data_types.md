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

How can we define a variable:
We need to have a name to which we will be assigning a value I am using `system` and the value I will be putting is this variable is `vipin's system` and we use the keyword `var` to define a variable in go lang.

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
	var system = "vipin's system"
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
and in [[Learn Go Day 06]](https://www.youtube.com/watch?v=BtkTn1kjOiE)

