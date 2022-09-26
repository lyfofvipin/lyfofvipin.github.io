---
title: week days name using switch-case
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int number;
printf("Enter a Nummber : ");
scanf("%d",&amp;number);

switch(number) // switching a number
{
case 1:
printf("nnnnn SUNDAY nnnn");
break;
case 2:
printf("nnnnn MONDAY nnnn");
break;
case 3:
printf("nnnnn TUESDAY nnnn");
break;
case 4:
printf("nnnnn WEDNESDAY nnnn");
break;
case 5:
printf("nnnnn THURSDAY nnnn");
break;
case 6:
printf("nnnnn FRIEDAY nnnn");
break;
case 7:
printf("nnnnn SATURDAY nnnn");
break; // here break is compusury if we not use break
// then default will also run.
default:
printf("nnn Invalid Number nnn");
// IF VALUE DOES NOT
// MATCH TO ANY CASE THEN DEFAULT
// WILL RUN.
}
}

// PASTE THE OUTPUT IN COMMENT BOX.