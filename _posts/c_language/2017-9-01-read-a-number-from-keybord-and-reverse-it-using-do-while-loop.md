---
title: Read-a-number-from-keybord-and-reverse-it-using-do-while-loop
categories: c
tags: [c]
---


```
#include<stdio.h>;
void main()
{
    int Number,rev;
    printf(" Enter a number ");
    scanf("%d",&Number);
    rev = 0;
    do
    {
        rev = rev *10 + Number % 10 ;
        Number = Number / 10;
    }while( Number != 0 );
    printf(" Reverce of Number is %d.",rev);
}
```
