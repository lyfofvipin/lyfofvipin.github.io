---
title: Some Programs On Nesting Of For Loops
categories: python
---

Here are some programs on nesting of for loops.
<h2>
Printing
1
1,2
1,2,3
1,2,3,4
1,2,3,4,5 ...n</h2>
where value of n is 5 taken from keyboard by me
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
		      printf("%d",j);
		    }
		  printf("n");
	  }
}
</pre>
<h2>Printing
1
2,2
3,3,3
4,4,4,4
5,5,5,5,5 ...n</h2>
where value of n is 5 taken from keyboard by me
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
		      printf("%d",i);
		    }
		  printf("n");
	  }
}
</pre>
<h2>Printing
5
4,5
3,4,5
2,3,4,5
1,2,3,4,5</h2>
where value of n is 5 taken from keyboard by me
<pre>#include&lt;stdio.h&gt;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&amp;n);
       for ( i = n ; i &gt;= 1 ; i-- )
	  {

		  for( j = i ; j &lt;= n ; j++ )
		    {
		      printf("%d",j);
		    }
		  printf("n");
	  }
}
</pre>
&nbsp;