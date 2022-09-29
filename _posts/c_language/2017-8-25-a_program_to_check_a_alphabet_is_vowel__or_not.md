---
title: A program to check a alphabet is vowel  or not
categories: c
tags: [c]
---


```
#include<stdio.h>;
void main()
{
    char alpha;

    printf("Enter a Alphabet:");
    scanf("%c",&alpha);

    if( alpha == 'a' ||alpha == 'e' ||alpha == 'i' ||alpha == 'o' ||alpha == 'u' )
        printf("Yes Enterd Alphabet is an vowel .");
    else
        printf("No Enterd Alphabet is Not an vowel .");

}
```

OUTPUT :
1.

```
Enter a Alphabet:u
Yes Enterd Alphabet is an vowel .
```

2.

```
Enter a Alphabet:d
No Enterd Alphabet is Not an vowel .
``
