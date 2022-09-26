---
title: Printing-N-to-1-using-for-loop
categories: python
---

<p style="text-align:left;">IN this blog we do a simple program on for loop .</p>
<span class="css-truncate css-truncate-target"><a id="dd3fc41b9d5ca7037ba9c5ce206b0a4f-373e58f430315ac858d1efc91f5773e62242a1b5" class="js-navigation-open" title="printing-N-to-1-using-for-loop.c" href="https://github.com/kumarvipinyadav/PROGRSMING/blob/master/printing-N-to-1-using-for-loop.c">printing-N-to-1-using-for-loop.c</a></span>

&nbsp;

#include&lt;stdio.h&gt;
void main()
{
int i,N ;

printf("Enter a number : ");
scanf("%d",&amp;N);

for ( i = N ; i &gt;= 1 ; i-- ) // or for( ; N &gt;= 1 ; N--)
printf( " %d n ",i );
}

// I hope now you will able to understend for loop in C.