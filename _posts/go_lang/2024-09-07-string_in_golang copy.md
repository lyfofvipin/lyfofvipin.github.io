---
title: Strings In Go Lang
categories: go
tags: [go]
---


When we say advanced data type it means that we are learning about the another data types that exist in GO lang but required some extra knowledge to understand.


## String

A string is a set of characters it can be of a single character or can be of a multiple characters.
In golang we write sting inside \`\` ( back quote ) or "" ( double quote) for example `string1` and `"s"` are two different strings in go lang `''` is not used with strings It's a separate data type that can hold a single character for more checkout this post [Variables and Data Types](https://lyfofvipin.github.io/variables_and_data_types).

Here is the visual representation of a String:

<img class="img_center" src="statics/img/string.png" alt="If-Else">

In a string we have index value of each character (we can call them rune also as they are a single character ) and we can access them using there index value for example `0` has `V` it can be written as `string_name[index_value]`.

Here is an example for the same:

```
var1 := "test string"   // True
var2 := 'test string'   // Error
var3 := `test string`   // True
```

### Output with String

```
package main

import ("fmt")

func main(){

	name := "Vipin"

	fmt.Println(name)
	
	fmt.Println("Vipin Kumar")
	
	fmt.Printf("%s", "New String")
}
```

### Input with String

```
package main

import "fmt"

func main() {

	var name string

	fmt.Printf("Enter Your Name: ")
	fmt.Scan(&name)

	fmt.Printf("Hello %s!\n", name)
}
```



There is a inbuilt function in Go to find the length of a sting we will study about functions and modules soon for now let's see how `len()` works.

So `len()` function in GO lang gives you the length of the sting.

For Example:
```
package main

import ("fmt")

func main() {

	test_str := "vipin"

	fmt.Println( len(test_str) )

	fmt.Println( len("Vipin Kumar") )
}
```

Output:

```
go run Day12/len.go 
5
11
```

There is 1 more method we will be using `DecodeRuneInString` it's from library `unicode/utf8` this method covert a `rune` into a `string`.

Example:
```

```

### Looping Over A String

Here are 2 most common ways to loop on a string one using the `range` and another is using normal for loop.

### For Loop Without Range On Strings

We can get the length of the string usine `len` function then we can use for loop to iterate from `0` to `length - 1` because string indexing starts from `0`.
let's say we have a string of length 5 so it's index values are `0,1,2,3,4`.


Example:
```
package main

import "fmt"

func main() {
	
	name := "Vipin Kumar"

	length := len(name)

	for iterator := 0 ; iterator < length ; iterator += 1 {

		fmt.Printf( "Index Value %d has character %c.\n", iterator, name[iterator] )

	}

}
```

Output:

```
go run Day12/forwithoutrange.go 
Index Value 0 has character V.
Index Value 1 has character i.
Index Value 2 has character p.
Index Value 3 has character i.
Index Value 4 has character n.
Index Value 5 has character  .
Index Value 6 has character K.
Index Value 7 has character u.
Index Value 8 has character m.
Index Value 9 has character a.
Index Value 10 has character r.
```

### For Loop With Range On Strings

We can get the length of the string usine `len` function then we can use for loop to iterate from `0` to `length - 1` because string indexing starts from `0`.
let's say we have a string of length 5 so it's index values are `0,1,2,3,4`.


Example:
```
package main

import "fmt"

func main() {
	
	name := "Vipin Kumar"

	for str := range name {

		fmt.Printf( "Index %d has value %c.\n", str, name[str]  )

	}

}
```

Output:

```
go run Day12/forwithoutrange.go 
Index Value 0 has character V.
Index Value 1 has character i.
Index Value 2 has character p.
Index Value 3 has character i.
Index Value 4 has character n.
Index Value 5 has character  .
Index Value 6 has character K.
Index Value 7 has character u.
Index Value 8 has character m.
Index Value 9 has character a.
Index Value 10 has character r.
```

**Strings In Go Lang are immutable it means that you can not update the value of a string after initialization.**

Doc was written in this livestream [[Learn Go Day 12]](https://www.youtube.com/watch?v=eE2Ouv6Bxvk) and [[Learn Go Day 14]](https://www.youtube.com/watch?v=-Vp6g79I8C8)
