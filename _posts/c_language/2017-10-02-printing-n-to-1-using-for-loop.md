---
title: Printing-N-to-1-using-for-loop
categories: c
tags: [c]
---

## IN this blog we do a simple program on for loop

```
#include<stdio.h>;
void main()
{
    int i,N ;
    printf("Enter a number : ");
    scanf("%d",&N);
    for ( i = N ; i >;= 1 ; i-- ) // or for( ; N &gt;= 1 ; N--)
    printf( " %d n ",i );
}
```

// I hope now you will able to understend for loop in C.