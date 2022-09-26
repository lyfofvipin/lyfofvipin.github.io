---
title: Defining integer and a program who accept a integer from key board
categories: python
---

Let us start learning using of data types=====&gt;

&nbsp;

Simple C program which accept a integer--

&nbsp;

#include&lt;stdio.h&gt;

#include&lt;conio.h&gt;

void main()

{

clrscr();

int a;

printf(" enter a number n ");

scanf("%d",&amp;a);

getch();

}

&nbsp;

As you can see we use another keyword of c name int.

&nbsp;

Have you remember that why we use int ?

&nbsp;

Because we are using an integer in a program.

&nbsp;

How to define a variable in C---&gt;

&nbsp;

Simply we write the keyword for the data type of variable and write the name of variable as we have done in a program.

&nbsp;

int a; =====&gt; hear we defin a variable name a;

&nbsp;

Haven't I tell you about scanf() function till now .

&nbsp;

Now you will learn use of scanf() function---&gt;

&nbsp;

It is a function which we use while taking input from user it has a specific format

First of all we have to write scanf("") with invited coma ("") and in invited comma

THen We have to use

&nbsp;

%d for integer

%c for character

%f for float

%lf for double

&nbsp;

As you can see we are using an integer program that is why we use %d

And then we use a (,) affter invited comma (scanf("%d",)) and then we use this symbol (&amp;)

scanf("%d",&amp;)

This symbol will locate our variable into the memory of computer or simply we can say provide address to our variable.

&nbsp;

scanf("%d",&amp;a) HEAR a IS THE NAME OF VAREABLE GIVEN BY US.

&nbsp;

now I will tell complit function again

&nbsp;

in Starting we write scanf() then use invited commas then we use symbol (&amp;) and then use comma and then write the name of our variable which we define above.