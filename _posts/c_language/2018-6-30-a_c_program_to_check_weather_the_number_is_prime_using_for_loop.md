---
title: A C program to check weather the number is prime using for loop
categories: c
tags: [c]
---

Here is the file of code
```
#include<stdio.h>;
void main()
{
	int i,n,temp=0;
               printf("Enter a number : n");
               scanf("%d",&n);

	    for (i=2;i<n-1;i++)
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
```
