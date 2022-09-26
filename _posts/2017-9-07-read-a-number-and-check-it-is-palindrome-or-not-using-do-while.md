---
title: Read-a-number-and-check-it-is-palindrome-or-not-using-do-while
categories: python
---

/*
If you know what is a palindrome then you can directly move to code else read a few line given beloww
a number is said to be palindrome if it's reverse is same as number.
e.g. - &gt;
1234 is a number and reverse of number is 4321 hence it is not a palindrome.
6776 is a number and it's reverse is 6776 both the nuber and reverse are equale hence we can say this number is a palindrome.
*/
#include&lt;stdio.h&gt;
void main()
{
int Number,reverse,i;

printf("Enter a Number :");
scanf("%d",&amp;Number);

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