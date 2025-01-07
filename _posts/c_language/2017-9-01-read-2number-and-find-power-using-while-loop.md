---
title: Read-2number-and-find-power-using-while-loop
categories: c
tags: [c]
---

In this program we have Read 2 numbers from keyboard and finding power.

```
#include<stdio.h>
void main()
{
    int i,x,y,power=1;

    printf("Enter basen");
    scanf("%d",&x);

    printf("Enter powern");
    scanf("%d",&y);

    while( i <= y )
    {
        power = power*x;
        i = i+1;
    }
    printf(" x power y = %d where %d is x and %d is y",power,x,y);
}
```
