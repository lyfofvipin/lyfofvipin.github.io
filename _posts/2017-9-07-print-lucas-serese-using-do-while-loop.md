---
title: Print-lucas-serese-using-do-while-loop
categories: python
---

/*
Let me tell you what a lucas serese it's a serese in which numbers are to be arange in a secquence the secquence is given below

1 3 4 7 11 18 29 ...............

and we have to print this serese till N.
where user will give value of N
*/

#include&lt;stdio.h&gt;
void main()
{
int sum,first,second,Number;

printf("Enter a number : ");
scanf(" %d",&amp;Number);

sum = 0 , second = 3 , first = 1;

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