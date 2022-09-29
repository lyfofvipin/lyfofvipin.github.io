---
title: Read-a-number-and-print-its-factoreal-using-while-loop
categories: c
tags: [c]
---


```
#include<stdio.h>;
void main()
{
    int i,Number,factorial;
    i = factorial = 1;
    printf("Enter your Numbern");
    scanf("%d",&Number);
    while( i <= Number )
    {
        factorial = factorial*i;
        i = i+1;
    }
    printf("Factorial of the number is %d",factorial);
}
```
