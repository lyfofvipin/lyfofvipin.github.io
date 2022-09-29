---
title: A program to check you pass or fail
categories: c
tags: [c]
---

```
#include<stdio.h>;
void main()
{
    int number_of_subject,total_mark;
    double mark,Prsantag;

    printf("Enter the number of subject you have :");
    scanf("%d",&number_of_subject);

    total_mark = 100 * number_of_subject;

    printf("Enter how much mark you got from %d:",total_mark);
    scanf("%lf",&mark);

    Prsantag = (mark/total_mark)*100;

    if(Prsantag >;= 33)
        printf("Party time you have pass your exam you got %2.2lf %:",Prsantag);
    else
        printf("You have to work hard you fail in your exam you got only %2.2lf %",Prsantag);

}
```

OUTPUT :
1.

```
Enter the number of subject you have :5
Enter how much mark you got from 500:456
Party time you have pass your exam you got 91.20 %:
```

2.

```
Enter the number of subject you have :5
Enter how much mark you got from 500:123
You have to work hard you fail in your exam you got only 24.60 %
```

In this program we use %2.2lf  this 2.2 is allow to print upto 2 digit only.
