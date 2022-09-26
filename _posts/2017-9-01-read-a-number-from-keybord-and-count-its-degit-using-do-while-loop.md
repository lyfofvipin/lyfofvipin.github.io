---
title: Read-a-number-from-keybord-and-count-its-degit-using-do-while-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int Number,counter;

printf(" Enter a number ");
scanf("%d",&amp;Number);

counter = 0;

do
{
counter++;
Number = Number / 10;

}while( Number != 0 );

printf(" Number of degits are %d.",counter);
}