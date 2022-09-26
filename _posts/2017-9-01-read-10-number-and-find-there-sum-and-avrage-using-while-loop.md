---
title: Read-10-number-and-find-there-sum-and-avrage-using-while-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int N,i,sum;
float avg;

avg = sum = 0;

i=1;
while( i &lt;= 10 )
{
printf("Enter value of N :");
scanf("%d",&amp;N);

sum = sum + N;
}
avg = avg / 10;

printf("The sum of number is %d and the avrage is %f",sum,avg);
}