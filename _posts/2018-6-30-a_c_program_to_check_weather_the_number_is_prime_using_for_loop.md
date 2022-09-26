---
title: A C program to check weather the number is prime using for loop
categories: python
---

our this program will ask for a integer from user and print that entered number is Prime or not. <a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/kumarvipinyadav/PROGRSMING/blob/master/prime-using-for-loop.c"><mark>prime</mark>-using-for-loop.c</a>

Here is the file of code
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,n,temp=0;
               printf("Enter a number : n");
               scanf("%d",&amp;n);

	    for (i=2;i&lt;n-1;i++)
	      {
                 if ( n%i==0 )
	           {
		          temp=1;
			   break;
		   }
	      }
	if(temp==1||n==1)
            printf("Enterd number is a  prime number n");
	else
            printf("primen");
}
</pre>