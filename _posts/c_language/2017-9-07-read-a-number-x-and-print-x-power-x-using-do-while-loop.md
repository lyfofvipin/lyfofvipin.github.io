---
title: Read-a-number-x-and-print-x-power-x-using-do-while-loop
categories: c
tags: [c]
---

```
#include<stdio.h>;
void main()
{
    int i,x,Square;
    printf("Enter a number:");
    scanf("%d",&x);
    i = Square = 1;
    do
    {
        Square = Square * x;
        i++;
    }while( i <= x );
    printf("Power is %d.",Square);
}
```
