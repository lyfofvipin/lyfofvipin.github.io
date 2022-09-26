---
title: A program to find power using for loop
categories: python
---

In our this blog we will  code a C program to find lcm of four number

here is the link  <span class="css-truncate css-truncate-target"><a id="37bd960bfab20dc67e2cf0abf7877b13-f1b85a1c1d6f284f0d02c5d3d2bfa965c7b0feec" class="js-navigation-open" title="lcm-for-loop.c" href="https://github.com/kumarvipinyadav/PROGRSMING/blob/master/lcm-for-loop.c">lcm-for-loop.c</a></span>
<pre>#include&lt;stdio.h&gt;
void main()
{
	int number_1,number_2,number_3,number_4,i,max,lcm;

	printf("n enter number 1 :");
	scanf("%d",&amp;number_1);

        printf("n enter number 2 :");
	scanf("%d",&amp;number_2);

        printf("n enter number 3 :");
	scanf("%d",&amp;number_3);

        printf("n enter number 4 :");
	scanf("%d",&amp;number_4);

	max=number_1*number_2*number_3*number_4;

	for( i=1 ; i &lt;= max ; i++ )
		{
if( i%number_1 == 0 &amp;&amp; i%number_2 == 0 &amp;&amp; i%number_3 == 0 &amp;&amp; i%number_4 == 0 )
				{	
                                        lcm=i;
					break;
				}

		}
         printf("   n  lcm is   :  %d ",lcm);
}
</pre>
&nbsp;