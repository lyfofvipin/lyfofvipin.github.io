---
title: A program to check odd and even number.
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int number;

printf("Enter a number :");
scanf("%d",&amp;number);

&nbsp;

if ( number%2 == 0 )
printf("n Entered number is even n");
else
printf("n Entered number is odd  n");
}

NOTE :-&gt; You can see we use (  ==  ) in if this is equal operator if we use it once (ex: number=50) it

assigned the value 50 to number but if we use (  ==  ) it compare the value of number with 50.
OUTPUT :
1.

Enter a number : 50
Entered number is even

2.

Enter a number : 5
Entered number is odd