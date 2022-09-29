---
title: A C-program to print fibonacci serese
categories: c
tags: [c]
---

In mathematics, the <b>Fibonacci numbers</b> are the numbers in the following integer sequence, called the <b>Fibonacci sequence</b>, and characterized by the fact that every number after the first two is the sum of the two preceding ones.

0,1,1,2,3,5,8.........

in programing it achieve by  adding first 2 number

For example:

by adding first two number `0 + 1`  we will get 1.

```
#include<stdio.h>;
void main()
{
   int  number1 , number2 , number3 , number4;
   printf( " Enter your number : n ");
   scanf( "%d" , &number1 );
   for( number2=0 , number3=1 , number4=0  ;  number1 >= 1 ;  number1-- )
   {
        printf("%dn",number2);
        number4=number2+number3;
        number2=number3;
        number3=number4;
   }
}
```

In above code number1 will accept number 1 from user and then using number2,number3 and number4 we will do our calculation and print Fibonacci sequence.
