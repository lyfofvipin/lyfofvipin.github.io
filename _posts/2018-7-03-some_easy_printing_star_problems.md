---
title: Some Easy Printing Star Problems
categories: python
---

<h2>Printing:-
*
**
***
****
*****</h2>
Here n is 5 taken from keyboard.
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&amp;n);
       for (i=1;i&lt;=n;i++)
	  {

		  for(j=1;j&lt;=i ;j++)
		    {
		      printf("*");
		    }
		  printf("n");
	  }
}
Output :
    Enter a number : 
    5
    *
    **
    ***
    ****
    *****
</pre>
<h2>Printing:-
*
* *
* * *
* * * *
* * * * *</h2>
Here n is 5 taken from keyboard.
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&amp;n);
       for (i=1;i&lt;=n;i++)
	  {

		  for(j=1;j&lt;=i ;j++)
		    {
		      printf("* ");
		    }
		  printf("n");
	  }
}
Output :- 
    Enter a number : 
    5
    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
</pre>
<h2>Printing :-
*****
****
***
**
*</h2>
<h2>Here n is 5 taken from keyboard.</h2>
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&amp;n);
       for ( i = n ; i &gt;= 1 ; i-- )
	  {

		  for(j = 1 ; j &lt;= i ; j++ )
		    {
		      printf("*");
		    }
		  printf("n");
	  }
}

Output:-
    Enter a number : 
    5
    *****
    ****
    ***
    **
    *
</pre>
<h2>Printing:-</h2>
*
++
***
++++
*****

Here n is 5 taken from keyboard.
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&amp;n);
       for ( i = 1 ; i &lt;= n ; i++ )
	  {

		  for(j = 1 ; j &lt;= i ; j++ )
		    {
			if ( i%2 != 0 )
		      	    printf("*");
			else
			     printf("+");
		    }
		  printf("n");
	  }
}

Output:-
    Enter a number : 
    5
    *
    ++
    ***
    ++++
    *****
</pre>
<h2>Printing:-</h2>
*
* *
* * *
* * * *
* * * * *

Here n is 5 taken from keyboard.
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&amp;n);
       for ( i = 1 ; i &lt;= n ; i++ )
 	  {
 		for (j = n-i ; j &gt;= 1 ; j--)
			printf(" ");

		 for(j = 1 ; j &lt;= i ; j++ )
		      	printf("* ");

		  printf("n");
	  }
}

Output:-
    Enter a number : 
    5
        * 
       * * 
      * * * 
     * * * * 
    * * * * * 
</pre>
&nbsp;

To download file click here <span class="css-truncate css-truncate-target"><a id="fe22c3bb10bd32c71a94ff8ab82658b1-adb538d688fbc1ebe8f2b8904780e7185c032a34" class="js-navigation-open" title="Some-Easy-Printing-Star-Problems.c" href="https://github.com/vipin3699/PROGRSMMING/blob/master/Some-Easy-Printing-Star-Problems.c">Some-Easy-Printing-Star-Problems.c</a></span>