---
title: Program to check Alphabat is of lower case.
categories: c
tags: [c]
---

```
#include<stdio.h>;
void main()
{
    char alfa;

    printf("Enter a Alphabet :");
    scanf("%c",&alfa);

    if( alfa >;= 97 &&amp; alfa <= 122)
    printf("Yes the alphabet is of lower case");
    else
    printf("No the alphabet is of lower case");

}
```

OUTPUT :
1.

```
Enter a Alphabets:a
Yes the alphabet is of lower case
```

2.

```
Enter a Alphabets:A
No the alphabet is of lower case
```

Here 97 is ASCII value of 'a' and 122 is ASCII value of `z`
hence the number between these two value is a lower case.