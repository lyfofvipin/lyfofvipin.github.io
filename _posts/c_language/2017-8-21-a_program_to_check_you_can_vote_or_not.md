---
title: A program to check you can Vote or not
categories: c
tags: [c]
---

```
#include<stdio.h>;
void main()
{
    double age;
    printf("Enter your age nnt (ex: 18 or 17.9 or 45):");
    scanf("%lf",&age);
    if(age >= 18)
        printf("n yes you can Vote n");
    else
        printf("n sorry you can't vote n");
}
```


OUTPUT :
1.

```
Enter your age

(ex: 18 or 29 or 45):19

yes you can Vote
```

2.

```
Enter your age

(ex: 18 or 29 or 45):17

sorry you can't vote
```
