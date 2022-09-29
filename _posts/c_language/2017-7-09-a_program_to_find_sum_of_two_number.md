---
title: A program to find sum of two number
categories: c
tags: [c]
---

```
#include<stdio.h>;
#include<conio.h>;
void main()
{
    int a,b,sum;
    printf("enter first number");
    scanf("%d",&a);
    printf("enter secand number");
    scanf("%d",&b);
    sum=a+b;
    printf("the sum is %d",sum);
    getch();
}
```

or

```
#include<stdio.h>;
#include<conio.h>;
void main()
{
    int a,b,sum;
    printf("enter both number  number n ");
    scanf("%d%d",&a,&amp;b);

    sum=a+b;
    printf("the sum is %d",sum);
    getch();
}
```

or

```
#include<stdio.h>;
#include<conio.h>;
void main()
{
    int a,b;
    printf("enter both number  number n ");
    scanf("%d%d",&a,&amp;b);
    printf("the sum is %d",a+b);
    getch();
}
```
