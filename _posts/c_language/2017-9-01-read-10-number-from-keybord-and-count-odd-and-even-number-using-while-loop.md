---
title: Read-10-number-from-keybord-and-count-odd-and-even-number-using-while-loop
categories: c
tags: [c]
---

```
#include<stdio.h>;
void main()
{
    int i,N,odd,even;
    odd = even = 0, i = 1;
    while( i <= 10 )
    {
        printf("Enter a numbern");
        scanf("%d",&N);
        if( N%2 == 0 )
        even = even+1;
        else
        odd = odd+1;
        i = i+1;
    }
    printf("number of Odd numbers are = %d n and number of Even Numbers are = %d",odd,even);
}
```
