---
title: Sorting In C
categories: python
---

Hope you have haired about sorting , Arrange elements of an array either in ascending or descending,
order is called sorting.
we have a lot's of sorting algorithm but here we will discuss about
1. Selection Sort
2. Bubble Sort
<h2>Selection Sort:-</h2>
Selection sort works by finding the smallest unsorted item in the list and swapping it with the item in
the current position.
<h3>The algorithm work works as follows:</h3>
1. set first position as current position.
2. Find the minimum value in the list.
3. Swap it with the value in current position.
4. Set next position as current position.
5. Respect Steps 2-4 until you reach end of list.
<p style="text-align:justify;"><img class="alignnone size-full wp-image-602" src="https://vipin711.files.wordpress.com/2019/09/f0791-screenshot-from-2018-07-26-23-09-38.png" alt="ascending order selection sory" width="1366" height="768" /></p>
Here we will make a program for arranging elements in ascending order.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/selection-sort-in-asssanding.c"><mark>sele</mark>ction-sort-in-ascending.c</a>
<pre>#include&lt;stdio.h&gt;
int main()
{
  int A[5] = {5,2,1,4,3};
  int i;

  void Short( int [] );

  Short(A);

  for( i = 0 ; i &lt; 5 ; i++ )
      printf("%d  ",A[i]);

  return 0;
}

void Short( int a[] )
{
  int i,j,pos,min,temp;

  for( j = 0 ; j &lt; 4 ; j++)
  {
		pos = j;
		
    for( i = j ; i &lt; 5 ; i++ )        {          if ( a[pos] &gt; a[i] )
          pos = i;
      }
      temp = a[j];
      a[j] = a[pos];
      a[pos] = temp;
  }
}
</pre>
Output :-
<pre>1  2  3  4  5
</pre>
and here is a program for arranging elements of array in descending order using Selection Sort.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/selection-sort-in-disanding.c"><mark>sele</mark>ction-sort-in-discending.c</a>
<pre>#include&lt;stdio.h&gt;
int main()
{
  int A[5] = {5,2,1,4,3};
  int i;

  void Short( int [] );

  Short(A);

  for( i = 0 ; i &lt; 5 ; i++ )
      printf("%d  ",A[i]);

  return 0;
}

void Short( int a[] )
{
  int i,j,pos,min,temp;

  for( j = 0 ; j &lt; 4 ; j++)
  {
		pos = j;

    for( i = j ; i &lt; 5 ; i++ )
      {
        if ( a[pos] &lt; a[i] )
          pos = i;
      }
	temp = a[j];
      a[j] = a[pos];
      a[pos] = temp;
  }
}
</pre>
Output:-
<pre>5  4  3  2  1
</pre>
<h2>Bubble Sort:-</h2>
Bubble sort works by comparing two continuous items in the array.
It's algorithm is very simple just compare adjacent element and Swap them.

<img class="alignnone size-full wp-image-603" src="https://vipin711.files.wordpress.com/2019/09/f0324-screenshot-from-2018-07-26-23-55-32.png" alt="ascending bubble sort" width="1366" height="768" />

Let's code a program for arranging elements of array in ascending order.
<pre>#include&lt;stdio.h&gt;
int main()
{
  int A[5] = {5,2,1,4,3};
  int i;

  void Short( int [] );

  Short(A);

  for( i = 0 ; i &lt; 5 ; i++ )
      printf("%d  ",A[i]);

  return 0;
}

void Short( int a[] )
{
  int i,j,temp;
  for ( j = 0 ; j &lt; 5 ; j++ )
   {
	for ( i = 0 ; i &lt; 4 ; i ++ )
  	{ 
 		if ( a[i] &gt; a[i+1] )
			{
				temp = a[i];
				a[i] = a[i+1];
				a[i+1] = temp;
			}
	}
   }
}
</pre>
Output:-
<pre>1  2  3  4  5
</pre>
Let's code a program for arranging elements of array in descending order.
<pre>#include&lt;stdio.h&gt;
int main()
{
  int A[5] = {5,2,1,4,3};
  int i;

  void Short( int [] );

  Short(A);

  for( i = 0 ; i &lt; 5 ; i++ )
      printf("%d  ",A[i]);

  return 0;
}

void Short( int a[] )
{
  int i,j,temp;
	for ( j = 0 ; j &lt; 5 ; j++ )
	{
		for ( i = 0 ; i &lt; 4 ; i ++ )
		{
		 if ( a[i] &lt; a[i+1] )
			{
				temp = a[i];
				a[i] = a[i+1];					a[i+1] = temp;
			}
	        }
       }
}
</pre>
Output:-
<pre>5  4  3  2  1
</pre>
We will start reading about string in our next blog.