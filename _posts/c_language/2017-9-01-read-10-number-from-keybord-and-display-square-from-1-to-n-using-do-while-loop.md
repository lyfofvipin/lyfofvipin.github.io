---
title: Read-10-number-from-keybord-and-display-square-from-1-to-N-using-do-while-loop
categories: c
tags: [c]
---

```
#include<stdio.h>;
void main()
{
    int i,N,r;
    printf("Enter a number:");
    scanf("%d",&N);
    i = 1;
    do
    {
        r = i*i;
        printf("Square of %d is %d.n",i,r); // or printf("Square of %d is %d.n",i,i*i);
        i++;
    }while( i <= N );
}
```
