---
date: '2017-09-01'
tags:
- c
title: Printing-N-to-1-using-while-loop
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
