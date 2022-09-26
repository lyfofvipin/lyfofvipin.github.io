---
title: Read-10-number-from-keybord-and-count-odd-and-even-number-using-while-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int i,N,odd,even;

odd = even = 0, i = 1;

while( i &lt;= 10 )
{
printf("Enter a numbern");
scanf("%d",&amp;N);
if( N%2 == 0 )
even = even+1;
else
odd = odd+1;
i = i+1;
}
printf("number of Odd numbers are = %d n and number of Even Numbers are = %d",odd,even);
}