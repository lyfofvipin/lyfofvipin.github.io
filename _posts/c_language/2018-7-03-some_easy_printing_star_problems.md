---
title: Some Easy Printing Star Problems
categories: c
tags: [c]
---

<h2>Printing:-
*
**
***
****
*****</h2>

## Here n is 5 taken from keyboard.

```
#include<stdio.h>;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&n);
       for (i=1;i<=n;i++)
	  {

		  for(j=1;j<=i ;j++)
		    {
		      printf("*");
		    }
		  printf("n");
	  }
}
```

Output :

```
Enter a number : 
5
*
**
***
****
*****
```

<h2>Printing:-
*
* *
* * *
* * * *
* * * * *</h2>

## Here n is 5 taken from keyboard.

```
#include<stdio.h>;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&n);
       for (i=1;i<=n;i++)
	  {

		  for(j=1;j<=i ;j++)
		    {
		      printf("* ");
		    }
		  printf("n");
	  }
}
```

Output :- 
```
Enter a number : 
5
* 
* * 
* * * 
* * * * 
* * * * * 
```

<h2>Printing :-
*****
****
***
**
*</h2>

<h2>Here n is 5 taken from keyboard.</h2>

```
#include<stdio.h>;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&n);
       for ( i = n ; i >;= 1 ; i-- )
	  {

		  for(j = 1 ; j <= i ; j++ )
		    {
		      printf("*");
		    }
		  printf("n");
	  }
}
```

Output:-
```
Enter a number : 
5
*****
****
***
**
*

```

<h2>Printing:-
*
++
***
++++
*****</h2>

## Here n is 5 taken from keyboard.

```
#include<stdio.h>;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&n);
       for ( i = 1 ; i <= n ; i++ )
	  {

		  for(j = 1 ; j <= i ; j++ )
		    {
			if ( i%2 != 0 )
		      	    printf("*");
			else
			     printf("+");
		    }
		  printf("n");
	  }
}
```

Output:-
```
Enter a number : 
5
*
++
***
++++
*****
```

<h2>Printing:-
*
* *
* * *
* * * *
* * * * *</h2>

## Here n is 5 taken from keyboard.

```
#include<stdio.h>;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&n);
       for ( i = 1 ; i <= n ; i++ )
 	  {
 		for (j = n-i ; j >;= 1 ; j--)
			printf(" ");

		 for(j = 1 ; j <= i ; j++ )
		      	printf("* ");

		  printf("n");
	  }
}
```

Output:-
````
Enter a number : 
5
	* 
   * * 
  * * * 
 * * * * 
* * * * * 
```
