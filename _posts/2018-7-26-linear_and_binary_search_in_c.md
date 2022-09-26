---
title: Linear And Binary Search In C
categories: python
---

Let's discuss about function with arrays:-

When we pass an array to the function the target variable is the reference of passed array.
So that any operation on the reference variable will be performed It will directly affect
the original value of the variable.
Let's discuss with help of some example.

1. Let's take two array and print there sum using a function.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/sum-of-2-array-in-3rd-using-function.c"><mark>sum</mark>-of-2-array-in-3rd-using-function.c</a>

[code language="cpp"]
    int main()
    {
        int a[] = {1,2,3,4,5};
        int b[] = {1,2,3,4,5};
        int c[5],i;

    // Declaring function sum and telling it that we give 2 arrays as arguments
        void sum ( int [] , int [] , int []);

    // Calling sum function
        sum(a,b);

      for( i = 0 ; i &lt; 5 ; i++ )
          printf(&quot;%d  &quot;,c[i] );
      return 0;
    }
    // Here we have defining our function
    void sum( int x[] , int y[] , int z[] )
    {
        int i;

        for( i = 0 ; i &lt; 5 ; i++ )
            z[i] = x[i]+y[i];
    }
[/code]
Output:-
<pre>2  4  6  8  10
</pre>
In above program <code> x </code>,<code> y </code> and <code> z </code> are reference of <code> a </code> and <code> b </code>
and <code> c </code>
respectively. so as we change value of <code> z </code> in sum function same changes will take place
in <code> c </code> also.

2. Let's copy an array into other using function.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/array-copy-function.c">array-<mark>copy</mark>-function.c</a>

[code language="cpp"]
    int main()
    {
        int a[] = {1,2,3,4,5};
        int b[5],i;

    // Declaring function copy and telling it that we give 2 arrays as arguments
        void copy ( int [] , int []);

    // Calling copy function
        copy(a,b);
      for( i = 0 ; i &lt; 5 ; i++ )
          printf(&quot;%d  &quot;,b[i] );

        return 0;
    }
    // Here we have defining our function
    void copy( int x[] , int y[] )
    {
        int i;

        for( i = 0 ; i <span id="mce_SELREST_start" style="overflow:hidden;line-height:0;">&#65279;</span>&lt; 5 ; i++ )
            y[i] = x[i];
    }
[/code]
Output:-
<pre>1  2  3  4  5
</pre>
In above program we will take values from <code> x </code> and store them in <code> y </code> and,
as a result value will stored in <code> b </code>.
<h2>Linear search:-</h2>
<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/Linear-search.c"><mark>Lin</mark>ear-search.c</a>

The following code implements linear search (Searching algorithm) which is used to find whether,
a given number is present in an array and if it is present then at what location it occurs.
If you give duplicate value then it will return first occurrence of element.
<pre>    #include
    int main()
    {
        int a[5], i, c , b = -1;

        int search (int [],int);

            printf("Enter your array :n");
            for (i = 0; i &lt; 5; i++)
            {
                printf("Enter a number :");
	            scanf("%d",&amp;a[i]);
            }
	    printf("Enter a number u want to search :");
	    scanf("%d",&amp;c);

	    b = search (a,c);

    	if( b == -1 )
		    printf("Element is not present in array.n");
        else
    		printf("Element is present in array at %d.n",b);
        return 0;
    }
    int search (int a[] , int b )
    {
        int i;

        for (i = 0; i &lt; 5; i++)
    	{
		    if( b == a[i] )
        		return i;
    	}
    }
</pre>
Output:-
<pre>Enter your array :
Enter a number :23
Enter a number :45
Enter a number :56
Enter a number :34
Enter a number :23
Enter a number u want to search :34
Element is present in array at 3.
</pre>
In our this Linear search program we have taken an array as input and find a number in that.
we check each element and if any element match our entered value then we return it's index value,
and print it, else we return nothing It means there is not such kind of value exist.
<h2>Binary Search:-</h2>
<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/Binary-search.c"><mark>Bin</mark>ary-search.c</a>

This code implements binary search in C language.
It can only be used for sorted arrays, but it's fast as compared to linear search.
If you wish to use binary search on an array which isn't sorted, then you must sort it using some sorting technique say merge sort and then use the binary search algorithm to find the desired. Element in the list. If the element to be searched is found then its position is printed.
<pre>	#include
	int main()
	{
	  int a[5],i,b,c = -1;
	
	  int search (int [],int,int);
    printf("Enter your array : n");
   	for (i = 0; i &lt; 5; i++)
     	{
       	printf("Enter a number :");
	     	scanf("%d",&amp;a[i]);
     	}
		printf("Enter a number you want to search :");
		scanf("%d",&amp;b);
    i=i-1;
		c = search (a,b,i);

		if( c != -1 )
			printf("Element is present in array. n");
        	else
			printf("Element is not present in array. n");
  	}
	int search(int a[],int b,int h)
	{
    	int i,m,l;
			l=0;
			while ( l &lt;= h )  			{  				m = (l+h)/2;  				if( m == b )  				  return 1;  				else if( b &gt; m )
				  l = m+1;
				else if( b &lt; m )
				  h = m-1;
			}
		return 0;
	}
</pre>
Output:-
<pre>Enter your array : 
Enter a number :1
Enter a number :2
Enter a number :3
Enter a number :4
Enter a number :5
Enter a number you want to search :5
Element is present in array.
</pre>
In binary search we divide our array from middle and search is the element in mid of array if yes,
then we return 0 and loop will stop and if element is not on mid position of array then we check,
is our element less or greater then the mid then we find value between mid and the last position,
of array or in between first and mid position of array respectively.
and if mid position cross the last position and we can't find our element then we

return 0,
and stop loop.
<pre> NOTE : Data must be sorted If we use binary search for searching an item in a array.</pre>
We will read about sorting algorithms in next blog post.