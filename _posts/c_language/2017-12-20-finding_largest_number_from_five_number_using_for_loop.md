---
title: Finding largest number from five number using for loop
categories: c
tags: [c]
---

## In our this blog we are going to find the largest number from five number.

<hr />

```
#include<stdio.h>
void main()
{
	int i,number,max;
	printf("nenter a number : ");
        scanf("%d",&number);
                  // because we need something in max 
                  // else there will be a garbage value
                  // in max.
        max=number;
	for( i = 1 ; i <= 5 ; i++ )   
        {                
                printf("nenter a number : ");
                scanf("%d",&number);
                if( number >; max)
                // it compair each value and store large
                // one in max .
                max = number;
        }
	printf("  n largest number is :  %d",max);

}
```
