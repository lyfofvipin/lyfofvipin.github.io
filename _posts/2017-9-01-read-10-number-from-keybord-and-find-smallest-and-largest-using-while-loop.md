---
title: Read-10-number-from-keybord-and-find-smallest-and-largest-using-while-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int i,N,largest,smallest;

i = 1;

printf("Enter a numbern");
scanf("%d",&amp;N);

largest = smallest = N;

while( i &lt;= 9 )
{
printf("Enter a numbern");
scanf("%d",&amp;N);

if( N &gt; largest )
largest = N;
if( N &lt; smallest )
smallest = N;
i = i+1;
}
printf("largest Number is = %d n and smallest Number = %d",largest,smallest);
}