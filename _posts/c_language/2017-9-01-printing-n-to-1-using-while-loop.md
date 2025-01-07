---
title: Printing-N-to-1-using-while-loop
categories: c
tags: [c]
---


```
#include<stdio.h>
void main()
{
    int N,i;

    printf("Enter value of N :");
    scanf("%d",&N);
    i=N;
    while( i >;= 1 )
    {
        printf("%dn",i);
        i = i-1;
    }
}
```
