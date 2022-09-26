---
title: Read-2number-and-find-power-using-while-loop
categories: python
---

In this program we have Read 2 numbers from keyboard and finding power.

#include&lt;stdio.h&gt;
void main()
{
int i,x,y,power=1;

printf("Enter basen");
scanf("%d",&amp;x);

printf("Enter powern");
scanf("%d",&amp;y);

while( i &lt;= y )
{
power = power*x;
i = i+1;
}
printf(" x power y = %d where %d is x and %d is y",power,x,y);
}