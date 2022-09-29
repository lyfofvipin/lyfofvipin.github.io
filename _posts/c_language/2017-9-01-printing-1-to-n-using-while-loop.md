---
title: Printing-1-to-N-using-while-loop
categories: c
tags: [c]
---

```
#include<stdio.h>;
void main()
{
    int N,i;

    printf("Enter value of N :");
    scanf("%d",&N);
    i=1;
    while( i <= N )
    {
        printf("%dn",i);
        i = i+1;
    }
}
```
