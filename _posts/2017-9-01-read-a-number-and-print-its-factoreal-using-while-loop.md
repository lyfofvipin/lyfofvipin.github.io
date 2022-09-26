---
title: Read-a-number-and-print-its-factoreal-using-while-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int i,Number,factorial;

i = factorial = 1;

printf("Enter your Numbern");
scanf("%d",&amp;Number);

while( i &lt;= Number )
{
factorial = factorial*i;
i = i+1;
}
printf("Factorial of the number is %d",factorial);
}