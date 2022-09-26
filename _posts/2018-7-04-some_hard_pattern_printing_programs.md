---
title: Some Hard Pattern Printing Programs
categories: python
---

<h4>Here are some hard pattern printing programs,
and hare is the github link of my this file <span class="css-truncate css-truncate-target"><a id="29797c0f89abdab82138fd902b78532b-7ff033965a168c33759ac99dc45e2d54e726840e" class="js-navigation-open" title="Some-Hard-Pattern-Printing-Programs.c" href="https://github.com/vipin3699/PROGRSMMING/blob/master/Some-Hard-Pattern-Printing-Programs.c">Some-Hard-Pattern-Printing-Programs.c</a></span></h4>
<h2>Printing :-
*
***
*****
*******
*********</h2>
Here value is 5 given by keyboard.
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,j,n;
	printf("Enter a number :n");
	scanf("%d",&amp;n);
       for (i=1;i&lt;=n;i++)
	  {

		  for(j=1;j&lt;= 2*i-1 ;j++)
		    {
		      printf("*");
		    }
		  printf("n");
	  }
}

Output:-

    Enter a number :
    5
    *
    ***
    *****
    *******
    *********
</pre>
<h2>Printing :-
*
+++
*****
+++++++
*********</h2>
Here value is 5 given by keyboard.
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&amp;n);
	for(i=1;i&lt;=n;i++)
		{
			for(j=1;j&lt;=2*i-1;j++)
				{
				if(i%2!=0)
				printf("*");
			else
				printf("+");
		}

			printf("n");
		}
}

Output:-

    Eenter a number :
    5
    *
    +++
    *****
    +++++++
    *********
</pre>
<h2>Printing :-</h2>
<pre>*********
 *******
  *****
   ***
    *
</pre>
Here value is 5 given by keyboard.
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,j,n;
	printf("Enter a number :n");
	scanf("%d",&amp;n);
	for(i=n;i&gt;=1;i--)
		{
			for (j=n;j&gt;i;j--)
			  printf(" ");

			for(j=1;j&lt;=2*i-1;j++)
				printf("*");

			printf("n");
		}
}

Output:-

    Enter a number :
    5
    *********
     *******
      *****
       ***
        *
</pre>
<h2>Printing :-</h2>
<pre>123454321
1234 4321
123   321
12     21
1       1
</pre>
Here value is 5 given by keyboard.
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,j,n;
	printf("Enter a number :n");
	scanf("%d",&amp;n);
	for(i=1;i&lt;=n;i++)
		{

		        for(j=1;j&lt;=n-i+1;j++)
			   printf("%d",j);

			for(j=2;j&lt;2*i-1;j++)  		           printf(" ");  			for(j=n-i+1;j&gt;=1;j--)
			{
				if(j!=n)
	         		   printf("%d",j);
			}
			printf("n");
		}
}

Output:-

    Enter a number :
    5
    123454321
    1234 4321
    123   321
    12     21
    1       1

</pre>
Printing :-
<pre>*********
**** ****
***   ***
**     **
*       *
</pre>
Here value is 5 given by keyboard.
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,j,n;
	printf("Enter a number :n");
	scanf("%d",&amp;n);
	for(i=1;i&lt;=n;i++)
		{

			for(j=1;j&lt;=n-i+1;j++)
			   printf("*");

			for(j=2;j&lt;2*i-1;j++)  		           printf(" ");  			for(j=n-i+1;j&gt;=1j--)
			{
				if(j!=n)
			   printf("*");
			}
			printf("n");
		}
}

Output:-

    Enter a number :
    5
    *********
    **** ****
    ***   ***
    **     **
    *       *
</pre>