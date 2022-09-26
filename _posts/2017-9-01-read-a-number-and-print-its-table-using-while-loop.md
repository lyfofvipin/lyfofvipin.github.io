---
title: Read-a-number-and-print-its-table-using-while-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int N,i;

printf("Enter value of N :");
scanf("%d",&amp;N);
i=1;
while( i &lt;= 10 )
{
printf("%dn",N*i);
i = i+1;
}
}