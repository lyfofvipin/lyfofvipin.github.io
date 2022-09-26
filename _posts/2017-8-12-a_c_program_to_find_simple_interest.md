---
title: A C program to find Simple Interest
categories: python
---

We are going to use double Data Type in this program .

#include&lt;stdio.h&gt;
main()
{
double principal,rate,time,simple_interest;
printf("Enter value of Principal : n");
scanf("%lf",&amp;principal);

printf("Enter value of Rate : n");
scanf("%lf",&amp;rate);

printf("Enter value of Time in month : n");
scanf("%lf",&amp;time);

simple_interest = (principal*rate*time)/100;

printf("The simple Interest is : %lf",simple_interest);

}

or

#include&lt;stdio.h&gt;
void main()
{
double principal,rate,time,simple_interest;
printf("Enter value of Principal : n");
scanf("%lf",&amp;principal);

printf("Enter value of Rate : n");
scanf("%lf",&amp;rate);

printf("Enter value of Time in month : n");
scanf("%lf",&amp;time);

printf("The simple Interest is : %lf",(principal*rate*time)/100);

}

or

#include&lt;stdio.h&gt;
void main()
{
double principal,rate,time,simple_interest;
printf("Enter value of Principal,Rate,and Time in month : n");
scanf("%lf%lf%lf",&amp;principal,&amp;rate,&amp;time);

printf("The simple is : %lf",(principal*rate*time)/100);

}