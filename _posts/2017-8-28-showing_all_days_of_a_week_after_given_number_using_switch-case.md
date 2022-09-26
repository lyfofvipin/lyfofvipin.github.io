---
title: showing all days of a week after given number using switch-case
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int number;
printf("Enter a Nummber : ");
scanf("%d",&amp;number);

switch(number)
{
case 1:
printf("nnnnn SUNDAY nnnn");

case 2:
printf("nnnnn MONDAY nnnn");

case 3:
printf("nnnnn TUESDAY nnnn");

case 4:
printf("nnnnn WEDNESDAY nnnn");

case 5:
printf("nnnnn THURSDAY nnnn");

case 6:
printf("nnnnn FRIEDAY nnnn");

case 7:
printf("nnnnn SATURDAY nnnn");

default:
printf("nnn Invalid Number nnn");
}
}