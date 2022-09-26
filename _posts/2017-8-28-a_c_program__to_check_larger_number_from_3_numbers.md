---
title: A C program  to Check larger number from 3 numbers
categories: python
---

// One more thing if you use (//) than everything written become a comment
// that will not execute.
<pre>#include&lt;stdio,h&gt;
 void main()
{
    int number_1,number_2,number_3;

   printf("Enter 3 number : n");
   scanf("%d%d%d",&amp;number_1,&amp;number_2,&amp;number_3);

   // We have taken input.

   if( number_1 &gt;= number_2 )
     // We have check from number_1 and number_2 which is large.
     // if number_1 is large than if will run.
   {
     if( number_1 &gt;= number_3 )
     printf(" The large number is %d.",number_1);
   else
    printf(" The large number is %d.",number_3);

}
   // We have checked number_2 which is larger than number_1 so.
  else
{

     if( number_2 &gt;= number_3 )
     printf(" The large number is %d.",number_2);
   else
     printf(" The large number is %d.",number_3);
}
}

or

#include&lt;stdio.h&gt;
void main()
{
     int number_1,number_2,number_3;

     printf("Enter 3 number : n");
     scanf("%d%d%d",&amp;number_1,&amp;number_2,&amp;number_3);

     // We have taken input.

     if( number_1 &gt;= number_2 &amp;&amp; number_1 &gt;= number_3 )
     printf(" The large number is %d.",number_1);
 
      if( number_2 &gt;= number_1 &amp;&amp; number_2 &gt;= number_3 )
        printf(" The large number is %d.",number_2);

        if( number_3 &gt;= number_1 &amp;&amp; number_3 &gt;= number_2 )
        printf(" The large number is %d.",number_3);

}
</pre>
Output
1.

Enter 3 number :
12
15
46
The large number is 46.

2.

Enter 3 number :
34
56
32
The large number is 56.

3.

Enter 3 number :
78
65
12
The large number is 78.