---
title: Program to check a character is Alphabet  or Not
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
char character;

printf("Enter a character:");
scanf("%c",&amp;character);

if( character &gt;= 65 &amp;&amp; character &lt;= 90 || character &gt;= 97 &amp;&amp; character &lt;= 122 )
printf("Yes Enterd chracter is an Alphabet .");
else
printf("No Enterd chracter is an Alphabet .");

}

OUTPUT :
1.

Enter a character:5
No Enterd character is an Alphabet .

2.

Enter a character:d
Yes Enterd character is an Alphabet .

3.

Enter a character:Z
Yes Enterd character is an Alphabet .

As you can saw we use AND and OR operator
and perform a lotes of operaction.