---
title: Read-10-number-from-keybord-and-display-largest-number-using-while-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int i,N,large;

i = 1;

printf("Enter a numbern");
scanf("%d",&amp;N);

large = N;

while( i &lt;= 9 )
{
printf("Enter a numbern");
scanf("%d",&amp;N);
if( N &gt; large )
large = N;
i = i+1;
}
printf("The largest number is %d",large);
}