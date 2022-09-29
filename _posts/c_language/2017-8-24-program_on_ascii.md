---
title: Program on ASCII
categories: c
tags: [c]
---

```
#include<stdio.h>;
void main()
{
    char test;
    printf("Enter a character :");
    scanf("%c",&test);
    printf("The ASCII value of %c is = %d :",test,test);
}
```

OUTPUT :
1.

```
Enter a character :x
The ASCII value of x is = 120 :
```

2.

```
Enter a character :%
The ASCII value of % is = 37 :
```

```
In this code we take a char and print that using %d,
it will not change value of test.
```
