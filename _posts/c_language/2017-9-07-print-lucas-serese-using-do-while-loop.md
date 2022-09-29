---
title: Print-lucas-serese-using-do-while-loop
categories: c
tags: [c]
---


Let me tell you what a lucas serese it's a serese in which numbers are to be arange in a sequence the sequence is given below

1 3 4 7 11 18 29 ...............

and we have to print this serese till N.
where user will give value of N


```
#include<stdio.h>;
void main()
{
    int sum,first,second,Number;

    printf("Enter a number : ");
    scanf(" %d",&Number);

    sum = 0 , second = 3 , first = 1;

    do
    {
        printf( " %d ",first );
        sum = first + second ;
        first = second ;
        second = sum ;
        Number--;
    }
    while ( Number >;= 1 );
}
```
