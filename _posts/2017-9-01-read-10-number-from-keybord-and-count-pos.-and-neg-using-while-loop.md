---
title: Read-10-number-from-keybord-and-count-pos.-and-neg-using-while-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int N,i,pos,neg;
neg=pos=0; // if we not give zero than
// there would be some gurbage value in these

i = 1;

while( i &lt;= 10 )
{
printf("Enter a number N :");
scanf("%d",&amp;N);

if( N &gt; 0)
pos = pos+1;
else
neg = neg+1;

i = i+1;
}
printf("Positive Number are %d,and Negetive Number are %d.",pos,neg);
}