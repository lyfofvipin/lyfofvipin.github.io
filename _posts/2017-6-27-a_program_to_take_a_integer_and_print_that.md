---
title: A program to take a integer and print that
categories: python
---

Now we will start how to take a number and print in a program .

&nbsp;

#include&lt;stdio.h&gt;

#include&lt;conio.h&gt;

&nbsp;

void main()

{

clrscr();

int a;

printf(" enter a number n ");

scanf("%d",&amp;a);

printf(" entered number is %d n ",a);

getch();

}

As you can see we again use %d in our program in function printf("%d",a) ;

One more time you will notice that we does not use the symbol (&amp;) hear because here the function will automatically find the location of a and print the number on the screen.