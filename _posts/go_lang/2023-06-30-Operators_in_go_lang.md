---
title: Operators In Go Lang
categories: go
tags: [go]
---

# What Are Operators And Why We Need Them

Operators are used to perform any operations on the variables or on different values for example performing mathematical operations like `-`, `+`, `%` etc.. on integers.

Here is a list of type of operators in GO:


### Arithmetic operators

Arithmetic operators are you to perform any mathematical operation

Like

`+` adding

`-` subtracting

`*` multiply

`/` divide

`%` finding remainder.{10%3=1(remainder)}


```
package main

import ("fmt")

func main(){

	i := 12
	j := 4

	fmt.Println("Arithmetic Operators: ")

	fmt.Println( i - j )
	fmt.Println( i + j )
	fmt.Println( i / j )
	fmt.Println( i % j )
	fmt.Println( i * j )

}
```

### Relational operators

From it's come in the name of operator this operator show any
relation between two operands.

`<` less then

`>` greater then

`==` equal to

`<=` less than equal to

`>=` greater than equal to

`!=` no equal to

```
package main

import ("fmt")

func main(){

	i := 12
	j := 4

	fmt.Println("Relational Operators: ")

	fmt.Println( i < j )
	fmt.Println( i > j )
	fmt.Println( i == j )
	fmt.Println( i <= j )
	fmt.Println( i >= j )
	fmt.Println( i >= j )

}

```

### Logical operator

We have three kind of logical operator in GO.
logical operator works on simple principle wither values are true or false.
NOTE : We can only use these operators with boolean values.

`&&` and operator

`||` or operator

`!` not operator


```
package main

import ("fmt")

func main(){

	i := 1
	j:= 2

	fmt.Println( i == 1 || j == 2 )
	fmt.Println( true || true )
	fmt.Println( true && true )
	fmt.Println( false && true )

}
```

### Assignment Operators

Assignment Operators are used to assign a value to any variable.

`=`     equal to

`-=`	not equal to 

`+=`    add and equal to

`/=`   divide and equal to

`*=`   multiply and equal to

`%=`   reminder and equal to


```
package main

import ("fmt")

func main(){

	i := 1

	i = 9
	fmt.Println(i)

	i += 9
	fmt.Println(i)

	i -= 9
	fmt.Println(i)

	i /= 9
	fmt.Println(i)

}
```

### Address operators

`&` This operator is used to get the address of the variable.
`*` This operator provides you the value located at any address.

```
package main

import ("fmt")

func main(){

	i := 9

	j := &i

	fmt.Println( j )

	fmt.Println( *j )

}
```

Output:
```
go run Day11/addr.go 
0xc0000180d8
9
```

### Bitwise operators

`|`  OR operator

`&`  AND operator 


```
package main

import ("fmt")

func main(){

	fmt.Println( 0 | 0 )
	fmt.Println( 45 | 0 )

}

```

There are a few more but we don't use them that frequently so skipping the same for now.


Doc was written in this livestream [[Learn Go Day 11]](https://www.youtube.com/watch?v=Y_wYnsHioxU)