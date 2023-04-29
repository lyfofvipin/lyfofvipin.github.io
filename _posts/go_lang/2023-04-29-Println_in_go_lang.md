---
title: Println In Go Lang
categories: go
tags: [go]
---

Doc was written in this livestream [[Learn Go Day 03 - 02]](https://www.youtube.com/watch?v=0bD7EcF8DJ0)

## Println

It's a method provided by the package/library "fmt" that is used to display things on the console.

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

