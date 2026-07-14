---
date: '2017-12-24'
tags:
- c
title: Reversing a number using for loop
---
```
#include<stdio.h>
void main()
{
   int number,i;
   printf("Enter a numbern");
   scanf("%d",&number);
   for( i = 0 ; number >; 0 ; a = number/10 )
   {
         i=i*10+a%10;
   }
   printf("%d",i);
}
```

In above code we will take an integer as an input, and further using some mathematical expression we, can reverse that number and store that in variable `i`.
