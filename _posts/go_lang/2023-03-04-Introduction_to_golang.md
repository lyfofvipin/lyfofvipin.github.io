---
title: Getting Started With Go lang
categories: go
tags: [go]
---

Go is developed by Google in 2007.

It's a complier based language.

Structure of a Go program

`hello.go`
```
package main

import ("fmt")

func main(){
	fmt.Println("Hello world")
}
```

`package main` : By this line we are trying to say that the file is an executable file not a library.

`import ("fmt")` : Here we are trying to import a package name `fmt`.

`func main(){` : We are saying that start the program execution from here ( Opening a block for main function ).
**NOTE: `{` should be after the ending bracket of the function `)` or you will get an error.**

`fmt.Println("Hello world")` : Here we are using the `fmt` library and using the `Println` method from the same.

`}` : We are closing the block of main function.
