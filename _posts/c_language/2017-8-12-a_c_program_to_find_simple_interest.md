---
title: A C program to find Simple Interest
categories: c
tags: [c]
---

We are going to use double Data Type in this program .


```
#include<stdio.h>;
main()
{
    double principal,rate,time,simple_interest;
    printf("Enter value of Principal : n");
    scanf("%lf",&principal);
    printf("Enter value of Rate : n");
    scanf("%lf",&rate);
    printf("Enter value of Time in month : n");
    scanf("%lf",&time);
    simple_interest = (principal*rate*time)/100;
    printf("The simple Interest is : %lf",simple_interest);

}
```

or


```
#include<stdio.h>;
void main()
{
    double principal,rate,time,simple_interest;
    printf("Enter value of Principal : n");
    scanf("%lf",&principal);

    printf("Enter value of Rate : n");
    scanf("%lf",&rate);

    printf("Enter value of Time in month : n");
    scanf("%lf",&time);

    printf("The simple Interest is : %lf",(principal*rate*time)/100);

}
```

or

```
#include<stdio.h>;
void main()
{
    double principal,rate,time,simple_interest;
    printf("Enter value of Principal,Rate,and Time in month : n");
    scanf("%lf%lf%lf",&principal,&amp;rate,&amp;time);

    printf("The simple is : %lf",(principal*rate*time)/100);

}
```
