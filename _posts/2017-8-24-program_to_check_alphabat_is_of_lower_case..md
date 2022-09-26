---
title: Program to check Alphabat is of lower case.
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
char alfa;

printf("Enter a Alphabet :");
scanf("%c",&amp;alfa);

if( alfa &gt;= 97 &amp;&amp; alfa &lt;= 122)
printf("Yes the alphabet is of lower case");
else
printf("No the alphabet is of lower case");

}
OUTPUT :
1.

Enter a Alphabets:a
Yes the alphabet is of lower case

2.

Enter a Alphabets:A
No the alphabet is of lower case

Here 97 is ASCII value of 'a' and 122 is ASCII value of 'z'

hence the number between these two value is a lower case.