---
title: Println In Go Lang
categories: go
tags: [go]
---

## Adding Comments

A comment is a statement of a program/library that will not get executed by the compiler during the execution.

### Single Line Comment

A Single line comment can be written with the help of `//`.

Example:
```
package main

import ("fmt")

func main(){

	// This is a comment
	fmt.Println("Vipin")
	// This is also an comment
	//  This os also an comment
	fmt.Println("Kumar")
}
```
Output:
```
$ go run Day04/single_line_comments.go 
Vipin
Kumar
```

### Multiline Comment
Anything written inside `/*` and `*/` will be a comment but here you can write as many comments you want.

Example:

```
package main

import ("fmt")

func main(){

	/*
		this is a multiline test comment
		line 2
		line 3
	*/

	fmt.Println("Vipin Kumar")
}
```
Output:
```
$ go run Day04/multi_line_comment.go 
Vipin Kumar
```


## Println

It's a method provided by the package/library "fmt" that is used to display things on the console.


## Printf

It's a method provided by the package/library "fmt" that is used to display things on the console it is little different then the Println.


### Difference Between `Println` and `Printf`.
* Printf Supports Format specifiers But Println doesn't ( Will be learning about `Format specifiers` in next blog post )

* Println add an newline in the end but Printf doesn't

### Printing Simple Strings.

```
package main

import ("fmt")

func main(){
	fmt.Println("Hello Vipin.")
	fmt.Println("This is another line.")
}
```
Output:
```
$ go run Day03/println_in_go.go 
Hello Vipin.
This is another line.
```

```
package main

import ("fmt")

func main(){
	fmt.Printf("Hello World!\n")
}
```
Output:
```
$ go run Day07/printf_in_go.go 
Hello World!
```

### Printing Using Escape Sequence In Go Lang

A escape sequence is used to show some affect on the console output.
Following is a list of supported Escape Sequences [Go Doc](https://go.dev/ref/spec#Rune_literals)

```
\n   line feed or newline
\b   backspace
\a   alert or bell
\f   form feed
\r   carriage return
\t   horizontal tab
\v   vertical tab
\\   backslash
\'   single quote  (valid escape only within rune literals)
\"   double quote  (valid escape only within string literals)
```

#### *New Line* `\n`
This character is used to redirect output in a new line.

```
package main

import ("fmt")

func main(){
	fmt.Println("Escape Sequence.")
	fmt.Println("01 Line1")
	fmt.Println("02 Line1")
	fmt.Println("03 Line1")
	fmt.Println("04 Line1")
	fmt.Println("Escape Sequence.")
	fmt.Println("01 Line1\n02 Line1\n03 Line1\n04 Line1")
}
```

Output:
```
$ go run Day03/new_line_sequence.go 
Before Sequence.
01 Line1
02 Line1
03 Line1
04 Line1
After Sequence.
01 Line1
02 Line1
03 Line1
04 Line1
```


#### *backspace* `\b`

This sequence can remove the characters from the console.
* Adding the same as first element of string will not impact anything
* Adding the same as last element of string will not impact anything
* You can not remove the last element of the string with the same

Example 1:
```
package main

import ("fmt")

func main(){
	fmt.Println("This is a\b string.")
}
```
Output:
```
$ go run Day04/bacspace_sequence.go 
This is  string.
```

Example 2:
```
package main

import ("fmt")

func main(){
	fmt.Println("\bThis is a string.")
}

```
Output:
```
$ go run Day04/bacspace_sequence.go 
This is a string.
```

Example 3:
```
package main

import ("fmt")

func main(){
	fmt.Println("This is a string.\b")
}

```
Output:
```
$ go run Day04/bacspace_sequence.go 
This is a string.
```

### Alert or Bell `\a`

This sequence will generate a bell sound once per execution adding the same multiple time will not going to create multiple voices.

Example:
```
package main

import ("fmt")

func main(){
	fmt.Println("This is a \a string.")
}
```
Output:
```
$ go run Day04/alert_bell_alert.go 
This is a  string.
```

### Vertical Tag Character `\v`

Vertical Sequence redirects the output in the line but the output in next line starts from where it displayed the string in the first line.

Example:
```
package main

import ("fmt")

func main(){
	fmt.Println("Test string.\vThis should go vertical.")
}
```
Output:
```
$ go run Day04/vertical_sequence.go 
Test string.
            This should go vertical.
```

### Horizontal Tab `\t`

Horizontal tab sequence will add a tab in the console output.

Example:
```
package main

import ("fmt")

func main(){
	fmt.Println("Test string.\t\tThis should go vertical.")
}
```
Output:
```
$ go run Day04/horizontal.go 
Test string.		This should go vertical.
```

### Carriage Return `\r`

Anything written before this sequence will not be visible on the console.

Example:
```
package main

import ("fmt")

func main(){
	fmt.Println("Test string.\rThis should be visible on the console.")
}
```
Output:
```
$ go run Day04/carriage.go 
This should be visible on the console.
```

### Form Feed `\f`

This will add a spacial type of pointer that represents end of a page.
We can not see the same in console.

Example:
```
package main

import ("fmt")

func main(){
	fmt.Println("This is page 1.\fThis is page 2.")
}

```
Output:
```
go run Day04/form_feed.go 
This is page 1.
               This is page 2.
```

### backslash `\`, single quote `'`, double quote `"`

backslash `\\` sequence is used to display `\` in the console.
single quote `\'` sequence is used to display `'` in the console ( Only supported in rune )
double quote `\"` sequence is used to display `"` in the console ( Only supported in String )

Example:
```
package main

import ("fmt")

func main(){
	
	// Example for backslash
	fmt.Println("You can chose either a\\b\\c.")
	
	// Example for single quote
	fmt.Println('A')
	fmt.Println('\'')

	// Example for single quote
	fmt.Println("It's vipin and \"I am good\"")

}
```

Output:
Here `65` is ASCII value for `A` and `39` is ASCII value for `'` as per 
```
$ go run Day04/backslash_single_double_quote.go 
You can chose either a\b\c.
65
39
It's vipin and "I am good"
```

Doc was written in this livestream [[Learn Go Day 03 - 02]](https://www.youtube.com/watch?v=0bD7EcF8DJ0), and in [[Learn Go Day 04]](https://www.youtube.com/watch?v=9QpYtv1SBwE) and in and in [[Learn Go Day 07]](https://www.youtube.com/watch?v=XcSXBAfQJ2w), [[Learn Go Day 07]](https://www.youtube.com/watch?v=kkNJRjr76Is)
