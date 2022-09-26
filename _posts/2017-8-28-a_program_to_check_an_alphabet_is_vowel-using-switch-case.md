---
title: A program to check an alphabet is vowel-using-switch-case
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
char alfa;

printf("Enter an Alphabet : ");
scanf("%c",&amp;alfa);

switch( alfa ) //switching a chracter
{

case 'a' :
case 'e' :
case 'i' :
case 'o' :
case 'u' :
printf("Yes Enterd Alphabet is a vowel");
break;
default :
printf("No Enterd Alphabet is Not vowel");
}
}