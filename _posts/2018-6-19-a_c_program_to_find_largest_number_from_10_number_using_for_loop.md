---
title: A C program to find largest number from 10 number using for loop
categories: python
---

Here is a program in C language to find the largest number from 10 numbers,

this code ask you for entering 10 number 1 by one and finally print the largest number among them.

you can get code from here <span class="css-truncate css-truncate-target"><a id="1f78a319bf553a41549fd043ccc54a14-27033e160bbbca30de8fcd43bc2d4c5327bc6fa0" class="js-navigation-open" title="large-for-loop.c" href="https://github.com/kumarvipinyadav/PROGRSMING/blob/master/large-for-loop.c">large-for-loop.c</a></span>
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,a,max;
	printf("enter a numbern");
        scanf("%d",&amp;a);
	max=a;
	for(i=1;i&lt;=10;i++) 	
        { 	
             printf("enter a numbern"); 
             scanf("%d",&amp;a);
 		if(a&gt;max)
		max=a;
	}
	printf("%d",max);
}
</pre>
&nbsp;