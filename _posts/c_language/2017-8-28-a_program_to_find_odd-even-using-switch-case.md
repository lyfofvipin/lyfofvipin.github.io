---
title: A program to find Odd-even-using-switch-case
categories: c
tags: [c]
---

```
#include<stdio.h>;
void main()
{
int number;
printf("Enter Your Number :");
scanf("%d",&number);

switch ( number%2 ) // we gave expression to switch which have to switch
    {
    case 0 : // if 0 come then flow comes to this case
    printf("Enterd Number is EVEN");
    break; // IT is also a jump statement who break switch
    // and return flow of control out of switch.
    case 1 :
    printf("Enterd Number is ODD");
    break; // here no need to use break because
    // switch is over after this case.
    }
}
```
