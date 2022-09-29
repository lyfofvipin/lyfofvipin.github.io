---
title: Some Hard Pattern Printing Programs
categories: c
tags: [c]
---

<h4>Here are some hard pattern printing programs</h4>

<h2>Printing :-
*
***
*****
*******
*********</h2>

## Here value is 5 given by keyboard.

```
#include<stdio.h>;
void main()
{
	int i,j,n;
	printf("Enter a number :n");
	scanf("%d",&n);
       for (i=1;i<=n;i++)
	  {

		  for(j=1;j<= 2*i-1 ;j++)
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
*
***
*****
*******
*********
```

<h2>Printing :-
*
+++
*****
+++++++
*********</h2>

## Here value is 5 given by keyboard.

```
#include<stdio.h>;
void main()
{
	int i,j,n;
	printf("Enter a number : n");
	scanf("%d",&n);
	for(i=1;i<=n;i++)
		{
			for(j=1;j<=2*i-1;j++)
				{
				if(i%2!=0)
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
Eenter a number :
5
*
+++
*****
+++++++
*********
```


<h2>Printing :-</h2>
```
*********
 *******
  *****
   ***
    *
```

## Here value is 5 given by keyboard.

```
#include<stdio.h>;
void main()
{
	int i,j,n;
	printf("Enter a number :n");
	scanf("%d",&n);
	for(i=n;i>;=1;i--)
		{
			for (j=n;j>;i;j--)
			  printf(" ");

			for(j=1;j<=2*i-1;j++)
				printf("*");

			printf("n");
		}
}
```

Output:-
```
Enter a number :
5
*********
 *******
  *****
   ***
    *
```

<h2>Printing :-</h2>
```
123454321
1234 4321
123   321
12     21
1       1
```

Here value is 5 given by keyboard.
```
#include<stdio.h>;
void main()
{
	int i,j,n;
	printf("Enter a number :n");
	scanf("%d",&n);
	for(i=1;i<=n;i++)
		{

		        for(j=1;j<=n-i+1;j++)
			   printf("%d",j);

			for(j=2;j<2*i-1;j++)  		           printf(" ");  			for(j=n-i+1;j>;=1;j--)
			{
				if(j!=n)
	         		   printf("%d",j);
			}
			printf("n");
		}
}
```

Output:-
```
Enter a number :
5
123454321
1234 4321
123   321
12     21
1       1
```

Printing :-

```
*********
**** ****
***   ***
**     **
*       *
```

## Here value is 5 given by keyboard.

```
#include<stdio.h>;
void main()
{
	int i,j,n;
	printf("Enter a number :n");
	scanf("%d",&n);
	for(i=1;i<=n;i++)
		{

			for(j=1;j<=n-i+1;j++)
			   printf("*");

			for(j=2;j<2*i-1;j++)  		           printf(" ");  			for(j=n-i+1;j>;=1j--)
			{
				if(j!=n)
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
*********
**** ****
***   ***
**     **
*       *
```
