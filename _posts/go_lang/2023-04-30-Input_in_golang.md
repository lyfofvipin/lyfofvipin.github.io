---
title: Input In Go Lang
categories: go
tags: [go]
---

# Why do we need input

In any application user input plays a vittle role any application react based on the input user is giving.
for example in most of the websites we give date of birth as input and based on that it will show awesome result.

# Input In Go Lang

In GO we basically have three methods to take input and to take a input.

`Scan`

`Scanln`

`Scanf`

We need to have a variable before we use the scan methods. Variable type should be based on the type of input you want from user.


If you are trying to take a number as a input than you should have a variable whose data type is integer and the symbol `&` is used to store the scanned value into that variable.
So `&a` means `a` is a variable name and whatever value user is giving it will be stored in variable `a`.

let's dig each of the same a little.

# Scan

*Scan* method in go lang allows user to enter all the values for all the variables mentioned in the Scan method either user is separating values via ` ` ( space ) or via new like `Enter` in the terminal.

Example:

```
package main

import ("fmt")

func main(){

	var i int
	var j int

	fmt.Printf("Input via Scan: ")
	fmt.Scan(&i, &j)
	fmt.Printf("Value of %d is %d.\n", i, j)

}
```
Output:

**Execution - 1**
```
go run Day11/scan.go ↵
Input via Scan: 3 5 ↵
Value of 3 is 5.
```

**Execution - 2**
```
go run Day11/scan.go ↵
Input via Scan: 3 ↵
5 ↵
Value of 3 is 5.
```

# Scanln

*Scanln* method in go lang allows user to enter all the values for all the variables mentioned in the Scan method but it will only use ` ` space as a separator.

Example:

```
package main

import ("fmt")

func main(){

	var i int
	var j int

	fmt.Printf("Input via Scan: ")
	fmt.Scanln(&i, &j)
	fmt.Printf("Value of %d is %d.\n", i, j)

}
```
Output:

**Execution - 1**
```
go run Day11/scanln.go ↵
Input via Scan: 3 5 ↵
Value of 3 is 5.
```

**Execution - 2**
```
go run Day11/scanln.go ↵
Input via Scan: 3 ↵
Value of 3 is 0.
```

# Scanf

*Scanf* method in go lang allows programers/users to fetch the input data based on the custom specifiers and in a custom format. 

But I mean by that is using Scanf function programmer can assigned the data type of the variables and it depends on the programmer that what separator the programmer want to use it can be using space (` `) it can be using new line (`Enter`) or using any other supported character similarly based on whatever the programmer has designed the user also has to response accordingly if programmer has set space (` `) as their separator than user has to input all the values separated with space (` `) programmer has set hyphen (`-`) as separator then user has two input all the values separated with hyphen (`-`).

**Example-1**:

```
package main

import ("fmt")

func main(){

	var i int
	var j int

	fmt.Printf("Input via Scan: ")
	fmt.Scanf("%d %d", &i, &j)
	fmt.Printf("Value of %d is %d.\n", i, j)

}
```
Output:

```
go run Day11/scanf.go ↵
Input via Scan: 34 456 ↵
Value of 34 is 456.
```

**Example-2**:

```
package main

import ("fmt")

func main(){

	var i int
	var j int

	fmt.Printf("Input via Scan: ")
	fmt.Scanf("%d\n%d", &i, &j)
	fmt.Printf("Value of %d is %d.\n", i, j)

}
```
Output:

```
go run Day11/scanf.go ↵
Input via Scan: 34 ↵
456 ↵
Value of 34 is 456.
```

**Example-1**:

```
package main

import ("fmt")

func main(){

	var i int
	var j int

	fmt.Printf("Input via Scan: ")
	fmt.Scanf("%d-%d", &i, &j)
	fmt.Printf("Value of %d is %d.\n", i, j)

}
```
Output:

```
go run Day11/scanf.go ↵
Input via Scan: 45-456 ↵
Value of 45 is 456.
```

**NOTE: If we are asking ony 1 value from the user then it doesn't matter which method we are using there are not much of a difference.
**


Doc was written in this livestream [[Learn Go Day 11]](https://www.youtube.com/watch?v=Y_wYnsHioxU)
