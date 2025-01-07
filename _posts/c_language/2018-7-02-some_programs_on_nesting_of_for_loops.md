---
title: Some Programs On Nesting Of For Loops
categories: c
tags: [c]
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
```
#include<stdio.h>
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&n);
       for (i=1;i<=n;i++)
	  {

		  for(j=1;j<=i ;j++)
		    {
		      printf("%d",j);
		    }
		  printf("n");
	  }
}
```

<h2>Printing
1
2,2
3,3,3
4,4,4,4
5,5,5,5,5 ...n</h2>

where value of n is 5 taken from keyboard by me

```
#include<stdio.h>
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&n);
       for (i=1;i<=n;i++)
	  {

		  for(j=1;j<=i ;j++)
		    {
		      printf("%d",i);
		    }
		  printf("n");
	  }
}
```

<h2>Printing
5
4,5
3,4,5
2,3,4,5
1,2,3,4,5</h2>

where value of n is 5 taken from keyboard by me

```
#include<stdio.h>
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&n);
       for ( i = n ; i >;= 1 ; i-- )
	  {

		  for( j = i ; j <= n ; j++ )
		    {
		      printf("%d",j);
		    }
		  printf("n");
	  }
}
```
