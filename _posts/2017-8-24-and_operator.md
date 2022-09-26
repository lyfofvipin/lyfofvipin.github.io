---
title: AND operator
categories: python
---

OUR this program will help in understanding AND operator.

#include&lt;stdio.h&gt;
void main()
{
int Number;

printf("Enter a Number:");
scanf("%d",&amp;Number);

if(Number%3 == 0 &amp;&amp; Number %6 == 0)
printf("Yes the enterd Number is Multiple of 3 and 6 :");
else
printf("No the enterd Number is Not Multiple of 3 and 6 :");

}
OUTPUT :
1.

Enter a Number:9
No the enterd Number is Not Multiple of 3 and 6 :

2.

Enter a Number:18
Yes the enterd Number is Multiple of 3 and 6 :

as you can see if both expression are true than our condiction become true.

in output  1     9 is multiple of 3 but not of 6 so ELSE run.

but in 2           18 is multiple of 3 as well as 6 hence If run.