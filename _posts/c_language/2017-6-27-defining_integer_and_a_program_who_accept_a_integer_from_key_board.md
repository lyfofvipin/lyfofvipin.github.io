---
title: Defining integer and a program who accept a integer from key board
categories: c
tags: [c]
---

# Let us start learning using of data types

## Simple C program which accept a integer.

```
#include<stdio.h>;
#include<conio.h>;

void main()
{
    clrscr();
    int a;
    printf(" enter a number n ");
    scanf("%d",&a);
    getch();
}
```

As you can see we use another keyword of c name `int`.
Have you remember that why we use `int` ?
Because we are using an integer in a program.

# How to define a variable in C

Simply we write the keyword for the data type of variable and write the name of variable as we have done in a program.

`int a;` hear we defining a variable name `a`.

Haven't I tell you about `scanf()` function till now .

## Now you will learn use of scanf() function.

It is a function which we use while taking input from user it has a specific format

First of all we have to write `scanf("")` with invited coma ("") and in invited comma

Then We have to use

`%d` for integer

`%c` for character

`%f` for float

`%lf` for double

As you can see we are using an integer program that is why we use %d

And then we use a (,) affter invited comma `scanf("%d",)` and then we use this symbol (&)

`scanf("%d",&)`

This symbol will locate our variable into the memory of computer or simply we can say provide address to our variable.

`scanf("%d",&a)` HEAR a IS THE NAME OF VAREABLE GIVEN BY US.

now I will tell complit function again

in Starting we write scanf() then use invited commas then we use symbol (&) and then use comma and then write the name of our variable which we define above.