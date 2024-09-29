---
title: Arrays In Go Lang
categories: go
tags: [go]
---


## Array

An Array is a collection of several elements of similar data type, where we can store multiple values at a time and these values can be accessed with there index values.

Here is the visual representation of a Array of Integer type:

<img class="img_center" src="statics/img/array.png" alt="If-Else">

Above array is a collection of 5 integers `10, 20, 30, 40, 50` and has index values `0,1,2,3,4`.

## How to create array in Go

To create a array in Go we have to follow the syntax mentioned below.
we have to define the name of the variable then we use `[]` to define the length of the array we can leave it blank if you are initializing array value during the definition we can put value `...` it will automatically set the length of array based on the values you are passing during initialization, then we define the type of collection array will be for example it will be collection of integers, string, rune and it can be an another array.
Here are a few examples.

```
package main

import (
	"fmt"
)

func main (){

	var arr1 [5]int
	arr2 := [5]int{ 10, 20, 30, 40, 50 }

	var arr3 = [...]int{ 1, 2, 3, 4, 5 }
	arr4 := [...]int{ 10, 20, 30, 40, 50 }

	var arr5 = [...]string{ "A", "a", "b", "B", `c`, `C` }
	arr6 := [...]rune{ 'a', '4', '-', '+' }

	arr7 := [...]bool { true }
	arr8 := [...]bool { true, false }

	fmt.Println(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8 )

    // Here are some wrong examples
    // var arr [...]int
    // arr := [...]int
    // arr := [4]int
    // var arr [1]int = {1}
    // var arr = [1]int{ 1, 3}
}
```

Here are a few points to remember while working with arrays:

* You can access the values using the index which starts from 0.
* A array is a collection of same datatype a array can not have different data types.
* There are multiple ways of initializing array
* If you did not give any value during initializing it will be set to `[ ]` with string, 0 with int, false with bool and default Nil value of the collection datatype.
* You can use `...` in the `[]` to auto detect the length
* You can also use `:` to define the specific index value during initialization.

## Using `:` To Set Custom Values On Indexes During Initialization

`:` Can be used in a pair `index:value` where left value is the index on which you want to insert anything and on the right side we write the value we want to insert on the given index.

Example:

```
package main

import "fmt"

func main(){

	arr := [10]int{ 1, 2, 9:3434 }

	fmt.Println(arr)
}
```

Output:
```
go run Day13/using_colon.go 
[1 2 0 0 0 0 0 0 0 3434]
```

In the above example you can see that on `index 9` we have the `value 3434`.
A Array of string act a 2D array.

## 2D Array

A 1-D array is a collection of several elements that contain only one row of elements. The 2-D array is a collection of rows and columns where each row contains smiler number of columns. The requirement of 2-D array is removing the need of several 1-d array and it may be helpful to create mathematical data structure named as matrix and many more.

### How to define a 2D Array

It's similar to 1D array here we use two brackets `[][]` to set the number of raw and columns of the array.
Here the first one has the first bracket defines the number of raws and the second one has the number of columns.


Here are some example of 2D array of Integer type:
```
package main

import "fmt"

func main(){
	
	var arr1 [2][2]int

	var arr2 = [2][2]int{
		{ 1, 2 },
		{ 3, 4 },
	}

	var arr3 = [3][3]int{
		{ 1, 2, 3},
		{ 1, 2, 3},
		{ 1, 2, 3},
	}

	var arr4 = [4][5]int{
		{ 1, 2, 3, 4, 5},
		{ 1, 2, 3, 4, 5},
		{ 1, 2, 3, 4, 5},
		{ 1, 2, 3, 4, 5},
	}

	fmt.Println(arr1, arr2, arr3, arr4)
}
```

Output:
```
go run Day13/2Darray.go 
[[0 0] [0 0]] [[1 2] [3 4]] [[1 2 3] [1 2 3] [1 2 3]] [[1 2 3 4 5] [1 2 3 4 5] [1 2 3 4 5] [1 2 3 4 5]]
```

## Accessing Values in Array

We can use the index to fetch the value of an array.
Here are a few example for the same:

```
package main

import "fmt"

func main(){

	arr1 := [5]string{ "My", "Name", "Is", "Vipin", "Yadav" }

	fmt.Println(arr1[3])

	// To get the specific value from the string we can use it's index
	fmt.Printf( "%c\n", arr1[0][0] )

}
```

Output:
```
go run Day13/access_value.go 
Vipin
M
```

