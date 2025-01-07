---
title: Read-10-number-from-keybord-and-display-largest-number-using-while-loop
categories: c
tags: [c]
---

```
#include<stdio.h>
void main()
{
    int i,N,large;
    i = 1;
    printf("Enter a numbern");
    scanf("%d",&N);
    large = N;
    while( i <= 9 )
    {
        printf("Enter a numbern");
        scanf("%d",&N);
        if( N >; large )
        large = N;
        i = i+1;
    }
    printf("The largest number is %d",large);
}
```
