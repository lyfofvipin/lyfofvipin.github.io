---
title: Print-fibonacci-serese-using-do-while-loop
categories: python
---

/*
Let me tell you what a fibonacci serese it's a serese in which numbers are to be arange in a secquence the secquence is given below

0 1 1 2 3 5 8 ...............

and we have to print this serese till N.
where user will give value of N
*/

#include&lt;stdio.h&gt;
void main()
{
int sum,first,second,Number;

printf("Enter a number : ");
scanf(" %d",&amp;Number);

sum = 0 , second = 1 , first = 0;

do
{
printf( " %d ",first );
sum = first + second ;
first = second ;
second = sum ;
Number--;
}
while ( Number &gt;= 1 );
}