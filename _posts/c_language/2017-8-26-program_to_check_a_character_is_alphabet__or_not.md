---
title: Program to check a character is Alphabet  or Not
categories: c
tags: [c]
---

```
#include<stdio.h>;
void main()
{
    char character;

    printf("Enter a character:");
    scanf("%c",&character);

    if( character >;= 65 &; character <= 90 || character &gt;= 97 && character lt= 122 )
        printf("Yes Enterd chracter is an Alphabet .");
    else
        printf("No Enterd chracter is an Alphabet .");
}
```

OUTPUT :
1.

```
Enter a character:5
No Enterd character is an Alphabet .
```

2.

```
Enter a character:d
Yes Enterd character is an Alphabet .
```

3.

```
Enter a character:Z
Yes Enterd character is an Alphabet .
```

As you can saw we use AND and OR operator
and perform a lot's of operation.
