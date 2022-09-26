---
title: OR operator
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int Number;

printf("Enter a Number:");
scanf("%d",&amp;Number);

if(Number%3 == 0 || Number %6 == 0)
printf("Enterd Number is either Multiple of 3 or 6 :");
else
printf("No the enterd Number is Not Multiple of 3 as well as 6 :");

}
OUTPUT :
1.

Enter a Number:21
Enterd Number is either Multiple of 3 or 6 :

2.

Enter a Number:22
No the enterd Number is Not Multiple of 3 as well as 6 :

as you can see in this code in OUTPUT 1    21 is multiple of 3 so If will run

but in output 2   22 is nither multiple of 3 and 6 so else will run.