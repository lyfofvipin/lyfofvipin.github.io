---
title: Casting in C
categories: python
---

Let us learn what is a casting in C.

Using this feature of C we can change data type of variables.

For Example :-&gt;

#include&lt;stdio.h&gt;
void main()
{
int a,b;
float div;
a=20,b=3;
div=a/b;
printf("Result Before Casting : %dnn",div);
div=(float)a/b;
printf("Result After Casting : %fnn",div);
}

or

#include&lt;stdio.h&gt;
void main()
{
int a,b,div;
a=20,b=3;
div=a/b;
printf("Result Before Casting : %dnn",div);
div=a/(float)b;
printf("Result After Casting : %fnn",div);
}

or

#include&lt;stdio.h&gt;
void main()
{
int a,b;
a=20,b=3;
printf("Result Before Casting : %dnn",a/b);
printf("Result After Casting : %fnn",a/(float)b);
}

you can see in both the case we use casting to make our result correct,

In first code we make change data type of (a) from int to float.

And in second code we change data type of (b).

And in third case we change data type of both (a) and (b).