---
title: Read-a-number-and-print-its-table-using-while-loop
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
    i=1;
    while( i <= 10 )
    {
        printf("%dn",N*i);
        i = i+1;
    }
}
```
