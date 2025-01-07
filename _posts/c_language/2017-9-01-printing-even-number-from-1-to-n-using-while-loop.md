---
title: Printing-even-number-from-1-to-N-using-while-loop
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
    while( i <= N )
    {
        if( i%2 == 0 )
        printf("%dn",i);
        i = i+1;
    }
}
```