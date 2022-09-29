---
title: Read-a-number-and-check-it-is-prime-or-not-using-do-while
categories: c
tags: [c]
---

```
#include<stdio.h>;
void main()
{
    int Number,i,flag;
    printf("Enter a Number :");
    scanf("%d",&Number);
    i = 2; // because every number is divesible by 1 ;
    flag = 1; // we can give any value to flag.
    do
    {
        if ( Number % i == 0 )
        flag = 0; // if number divide by any number from 1 to number-1 then flag become 0.
        i++;
    }while( i < Number ); // because each number is divesible by itself so we move from 2 to Number-1.
    if( flag == 0 || Number == 1 )
        printf("Enterd number is not an prime number");
    else
        printf("yes enterd number is an prime number");
}
```
