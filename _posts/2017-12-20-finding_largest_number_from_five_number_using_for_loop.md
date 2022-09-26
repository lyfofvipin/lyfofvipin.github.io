---
title: Finding largest number from five number using for loop
categories: python
---

In our this blog we are going to find the largest number from five number.

<span class="css-truncate css-truncate-target"><a id="1f78a319bf553a41549fd043ccc54a14-115c29c1761af2999b37d2b99db4c1391d2be656" class="js-navigation-open" title="large-for-loop.c" href="https://github.com/kumarvipinyadav/PROGRSMING/blob/master/large-for-loop.c">large-for-loop.c</a></span>

<hr />

<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,number,max;

	printf("nenter a number : ");
        scanf("%d",&amp;number);
                  // because we need something in max 
                  // else there will be a garbage value
                  // in max.
        max=number;

	for( i = 1 ; i &lt;= 5 ; i++ )   
   {                
                   printf("nenter a number : "); 
                   scanf("%d",&amp;number); 	                                  if( number &gt; max) 
                        // it compair each value and store large
                       // one in max .
	       max = number;
  }
	printf("  n largest number is :  %d",max);

}

</pre>
&nbsp;