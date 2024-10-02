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

## Updating Value Of An Array

We can use the index with the array name to update the value of an index.

In below example `arr[0] = 1000` we are updating value of index `0` with integer value `1000`.

Example:
```
package main

import "fmt"

func main(){

	arr := [10]int{ 1, 2, 9:3434 }

	fmt.Println(arr)

	arr[0] = 1000

	fmt.Println(arr)
}
```

Output:
```
go run Day14/udate_str.go 
[1 2 0 0 0 0 0 0 0 3434]
[1000 2 0 0 0 0 0 0 0 3434]
```

## Slicing and Splitting Of Arrays In Go

This is a nice and smooth way of cutting an array or getting sub arrays out of a single array.
Split mechanism is used to divide an array into a sub array of your choice.

To slice an array we use this syntax `array_name[index_from_where_to_split:index_until_split+1]`.

In above example `array_name` is the array you want to split.

`index_from_where_to_split` Is the integer value from where you want to cut the array.

`index_until_split+1` Is an integer till where you want to cut the array + 1 example if you want array to be cut till index `8` so you have to write `9`.

and `:` is used to septate these integers.

In below example we want to split array `arr` from index `3` to index `6` so we are using statement `arr[3:7]`.

Example:
```
package main

import "fmt"

func main(){

	arr := [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

	sli := a[3:7]

	fmt.Println(arr)
	fmt.Println(sli)

}
```

Output:
```
go run Day14/split.go 
[0 1 2 3 4 5 6 7 8 9]
[3 4 5 6]
```

**Now once you split an array you get a slice which is similar to array but not array it's a completely different data type name as Slice.**

For more on Slices you can see slice blog post in below URL: https://lyfofvipin.github.io/go

## 2D Array

A 1-D array is a collection of several elements that contain only one row of elements. The 2-D array is a collection of rows and columns where each row contains smiler number of columns. The requirement of 2-D array is removing the need of several 1-d array and it may be helpful to create mathematical data structure named as matrix and many more.

*NOTE: A Array of string act a 2D array.*

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

Here is a visual representation of the same:
<img class="img_center" src="statics/img/2darray.png" alt="If-Else">

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


## Taking input in Arrays

We take input in Arrays in the same way we take normal input here the difference is that we pass the index with the array name to `&` for storing the value.

Example:
```
package main

import "fmt"

func main(){

	var arr1 [5]int

	fmt.Println(arr1)

	fmt.Println( "Enter value for index 0.")
	fmt.Scanf( "%d", &arr1[0])

	fmt.Println( "Enter value for index 1.")
	fmt.Scanf( "%d", &arr1[1])

	fmt.Println( "Enter value for index 2.")
	fmt.Scanf( "%d", &arr1[2])

	fmt.Println( "Enter value for index 3.")
	fmt.Scanf( "%d", &arr1[3])

	fmt.Println( "Enter value for index 4.")
	fmt.Scanf( "%d", &arr1[4])


	fmt.Println(arr1)

	for i := 0 ; i < 5; i++ {
		fmt.Printf( "Enter value for index %d.\n", i)
		fmt.Scanf( "%d", &arr1[i])
	}

	fmt.Println(arr1)
}
```

Output:
```
go run Day13/input.go 
[0 0 0 0 0]
Enter value for index 0.
1
Enter value for index 1.
2
Enter value for index 2.
3
Enter value for index 3.
4
Enter value for index 4.
5
[1 2 3 4 5]
Enter value for index 0.
5
Enter value for index 1.
4
Enter value for index 2.
3
Enter value for index 3.
2
Enter value for index 4.
1
[5 4 3 2 1]
```



Doc was written in this livestream [[Learn Go Day 13]](https://www.youtube.com/watch?v=i7TRweKnyAQ) and [[Learn Go Day 14]](https://www.youtube.com/watch?v=-Vp6g79I8C8)
