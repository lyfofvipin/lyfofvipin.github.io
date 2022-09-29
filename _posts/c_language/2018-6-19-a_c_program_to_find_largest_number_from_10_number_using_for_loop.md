---
title: A C program to find largest number from 10 number using for loop
categories: c
tags: [c]
---

Here is a program in C language to find the largest number from 10 numbers,

this code ask you for entering 10 number 1 by one and finally print the largest number among them.

```
#include<stdio.h>;
void main()
{
	int i,a,max;
	printf("enter a numbern");
        scanf("%d",&a);
	max=a;
	for(i=1;i<=10;i++) 	
        { 	
             printf("enter a numbern"); 
             scanf("%d",&a);
 		if(a>;max)
		max=a;
	}
	printf("%d",max);
}
```
