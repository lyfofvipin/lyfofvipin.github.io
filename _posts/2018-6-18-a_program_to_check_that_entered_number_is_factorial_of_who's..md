---
title: A program to check that entered number is factorial of who's.
categories: python
---

This is a program written in C language.

this code will take a input from the user and display that the entered number is factorial of who's.
<pre>#include&lt;stdio.h&gt;
void main()
{
	int n,i,j;
	printf("enter a number");
	scanf("%d",&amp;n);
          // we have taken input from user in variable n.
        j=1;
	for(i=1;i&lt;=n;i++)
{
	j=j*i;
	if( j == n )
		{
                        // if j is equal to n than n become -1 
			n = -1;
           		break;
		}
}
	if(n==-1) 
		printf("%d",i);
	else
		printf("invalid numbern");
}
</pre>
in above program, if you enter a number it will tell you about the number who's

factorial is the entered number is.