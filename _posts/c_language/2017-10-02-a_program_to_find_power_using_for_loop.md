---
title: A program to find power using for loop
categories: c
tags: [c]
---

In our this blog we will  code a C program to find lcm of four number

```
#include<stdio.h>;
void main()
{
	int number_1,number_2,number_3,number_4,i,max,lcm;
	printf("n enter number 1 :");
	scanf("%d",&number_1);
	printf("n enter number 2 :");
	scanf("%d",&number_2);
	printf("n enter number 3 :");
	scanf("%d",&number_3);
	printf("n enter number 4 :");
	scanf("%d",&number_4);
	max=number_1*number_2*number_3*number_4;
	for( i=1 ; i <= max ; i++ )
		{
			if( i%number_1 == 0 &&amp; i%number_2 == 0 &amp;&amp; i%number_3 == 0 &amp;&amp; i%number_4 == 0 )
			{	
				lcm=i;
				break;
			}
		}
        printf("   n  lcm is   :  %d ",lcm);
}
```
