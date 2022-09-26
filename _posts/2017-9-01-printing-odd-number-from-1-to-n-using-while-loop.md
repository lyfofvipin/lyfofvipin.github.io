---
title: Printing-odd-number-from-1-to-N-using-while-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int N,i;

printf("Enter value of N :");
scanf("%d",&amp;N);
i=1;
while( i &lt;= N )
{
if( i%2 != 0 )
printf("%dn",i);
i = i+1;
}
}