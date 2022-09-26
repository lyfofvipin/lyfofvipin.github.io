---
title: Printing-N-to-1-using-while-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int N,i;

printf("Enter value of N :");
scanf("%d",&amp;N);
i=N;
while( i &gt;= 1 )
{
printf("%dn",i);
i = i-1;
}
}