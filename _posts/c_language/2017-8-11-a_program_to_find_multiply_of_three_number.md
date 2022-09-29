---
title: A program to find multiply of three number
categories: c
tags: [c]
---

```
#include<stdio.h>;
main()
{
    int a,b,c,mun;
    printf(“enter first number”);
    scanf(“%d”,&a);
    printf(“enter second number”);
    scanf(“%d”,&b);
    printf(“enter third number”);
    scanf(“%d”,&c);
    mun=a*b*c;
    printf(“the multiply is %d”,mun);
}
```

or


```
#include<stdio.h>;
main()
{
    int a,b,a,mun;
    printf(“enter all three  numbers number n “);
    scanf(“%d%d%d”,&a,&amp;b,&amp;c);

    mun=a*b*c;
    printf(“the multiply is %d”,mun);
}
```

or

```
#include<stdio.h>;
main()
{
    int a,b;
    printf(“enter all three number n “);
    scanf(“%d%d%d”,&a,&amp;b,&amp;c);
    printf(“the multiply is %d”,a*b*c);
}
