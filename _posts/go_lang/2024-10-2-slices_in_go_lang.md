---
title: Slices In Go Lang
categories: go
tags: [go]
---


## Slices

Slice is a data structure that identify the portion of an array by determining it's starting index and length of the portion even during the definition we will be using similar syntax without the length, In GO language slices are similar to array it's just the length of slice is flexible it can be changed. In Slice also we can only store similar type of elements.


## Difference Between Slice And Array
Slices are more flexible than array. In array we can not add any element and resize it but in Slice we can add or remove any element and resized it.

## How to create slice in Go

To create a slice in Go we have to follow the syntax mentioned below.
we have to define the name of the variable then we use `[]`, then we define the type of collection slice will be for example it will be collection of integers, string, rune and it can be an another slice.

Here are a few examples.

```
package main

import (
	"fmt"
)

func main (){

	var sli1 []int
	sli2 := []int{ 10, 20, 30, 40, 50 }

	var sli3 = []string{ "A", "a", "b", "B", `c`, `C` }
	sli4 := []rune{ 'a', '4', '-', '+' }

	sli5 := []bool { true }
	sli6 := []bool { true, false }

	fmt.Println(sli1, sli2, sli3, sli4, sli5, sli6 )

}
```

## Creating Slice With/From Array

```
package main
 
import "fmt"
 
func main() {
    array := [5]int{ 11, 12, 13, 14, 15 }
    slice1 := array[2:5]
    slice2 := array[1:4]
 
    fmt.Println("Array: ", array)
    fmt.Println("Slice: ", slice1)
    fmt.Println("Slice: ", slice2)
}
```

Output:
```
go run Day14/slice.go 
Array:  [11 12 13 14 15]
Slice:  [13 14 15]
Slice:  [12 13 14]
```

## Updating Values Of Slices

We can use the index with the slice name to update the value of an index.
In below example `sli[0] = 1000` we are updating value of index `0` with integer value `1000`.

Example:
```
package main

import "fmt"

func main(){

	sli := []int{ 1, 2, 9:3434 }

	fmt.Println(sli)

	sli[0] = 1000

	fmt.Println(sli)
}
```

Output:
```
go run Day14/update_sli.go 
[1 2 0 0 0 0 0 0 0 3434]
[1000 2 0 0 0 0 0 0 0 3434]
```

## Adding Values to slice or Using Append function on Slice

To add values in a slice we have to use the `append` function in Go lang.
this function take two arguments minimum *first one is the slice* and *all other argument are the element you want to add* for example `append( []int, int )` here append function is accepting an slice of integer and a integer it will append elements at the end of the slice.

This function can concatenate slices too in this case it take *two slice* as argument with the `...` operator for example `append( slice1, slice2... )`.

One more thing to notice about append function is that it returns a new slice instead of adding the element in the same slice so we have to store our new slice somewhere if we want to use the same somewhere.

Examples:

```
package main

import "fmt"

func main(){

	sli := []int{ 1 }

	fmt.Println(sli)
	fmt.Println( append( sli, 34 ) )

}
```
Output:
```
go run Day14/append.go 
[1]
[1 34]
```

Another Example:

```
package main

import "fmt"

func main(){

	sli1 := []int{ 1, 2, 3, 4 }
	sli2 := []int{ 10, 20, 30, 40 }

	fmt.Println(sli1, sli2)
	fmt.Println( append( sli1, sli2... ) )

}
```

Output:

```
go run Day14/append_all.go 
[1 2 3 4] [10 20 30 40]
[1 2 3 4 10 20 30 40]
```

Another example where we are storing the new slice in a variable.


```
package main

import "fmt"

func main(){

	sli1 := []int{ 1, 2, 3, 4 }
	sli2 := []int{ 10, 20, 30, 40 }

	fmt.Println( sli1, sli2 )
	sli1 = append( sli1, sli2... )
	fmt.Println( sli1, sli2 )

}
```

Output:

```
go run Day14/store_new_var.go 
[1 2 3 4] [10 20 30 40]
[1 2 3 4 10 20 30 40] [10 20 30 40]
```


Doc was written in this livestream [[Learn Go Day 14]](https://www.youtube.com/watch?v=-Vp6g79I8C8)
