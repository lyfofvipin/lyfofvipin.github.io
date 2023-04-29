---
title: Getting Started With Go lang
categories: go
tags: [go]
---

Doc was written in this livestream [[Learn Go Day 03 - 01]](https://www.youtube.com/watch?v=8xfxvhxJfZE) and in [[Learn Go Day 03 - 02]](https://www.youtube.com/watch?v=0bD7EcF8DJ0)


## Intro

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

`import ("fmt")` : Here we are importing a package name `fmt` ( Make sure you use `"` while writing the package name ).

`func main(){` : We are saying that start the program execution from here ( Opening a block for main function ).
**NOTE: `{` should be after the ending bracket of the function `)` or you will get an error.**

`fmt.Println("Hello world")` : Here we are using the `fmt` library and using the `Println` method from the same that will display something on the console (Terminal).

`}` : We are closing the block of main function.

Execution:

```
$ go run Day02/hello.go 
Hello world
```

## Keywords

These are words reserved by the language itself and can not be used as variables/identifier.

```
break     default      func    interface  select
case      defer        go      map        struct
chan      else         goto    package    switch
const     fallthrough  if      range      type
continue  for          import  return     var
```

## Character Set

A Character set denotes any alphabet, numeric or spacial symbols that is supported by the language.

Alphabets: `A,B,C ...to... Z`  `a,b,c ...to... z`

Digits: `0,1,2,3,4,5,6,7,8,9`

Spacial Symbols: `~`,\`,`!`,`@`,`#`,`%`,`^`,`&`,*,`(`,`)`,`_`,`-`,`=`,`+`,`|`,`\`,`/`,`{`,`}`,`;`,`:`,`,`,`"`,`'`,`<`,`>`,`.`,`?`,`/`
NOTE: `$` is not supported as a operator in GO language
