---
title: Read-a-number-x-and-print-x-power-x-using-do-while-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int i,x,Square;

printf("Enter a number:");
scanf("%d",&amp;x);

i = Square = 1;

do
{
Square = Square * x;
i++;
}while( i &lt;= x );

printf("Power is %d.",Square);
}