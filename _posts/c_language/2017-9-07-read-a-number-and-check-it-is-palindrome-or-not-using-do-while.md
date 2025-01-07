---
title: Read-a-number-and-check-it-is-palindrome-or-not-using-do-while
categories: c
tags: [c]
---


If you know what is a palindrome then you can directly move to code else read a few line given below a number is said to be palindrome if it's reverse is same as number.

e.g. ->
1234 is a number and reverse of number is 4321 hence it is not a palindrome.
6776 is a number and it's reverse is 6776 both the nuber and reverse are equale hence we can say this number is a palindrome.

```
#include<stdio.h>
void main()
{
    int Number,reverse,i;

    printf("Enter a Number :");
    scanf("%d",&Number);
    i = Number;
    reverse = 0;
    do
    {
        reverse = reverse * 10 + i % 10;
        i = i / 10 ;
    }while ( i != 0 );
    if ( Number == reverse )
        printf("Enterd number is an palindrome");
    else
        printf("Enterd number is not an palindrome");
}
```
