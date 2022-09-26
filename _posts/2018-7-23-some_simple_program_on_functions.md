---
title: Some Simple Program on Functions
categories: python
---

<div>

Let's discuss some very simple example on Functions
By solving these problem you can able to solve simple problem based on functions
later we will discuss about functions with Array, Strings and with Pointers.
<h2>Factorial function :-</h2>
Finding Factorial of a number using function.
<pre>#include&lt;stdio.h&gt;
int main()
{
   int factorial( int );
   int n , facto; 
     // we can't access these variables in function but we can 
     //create variable there with same name
   printf("Enter a number : ");
   scanf("%d",&amp;n);

   facto = factorial(n);

   printf("Factorial is %d. n",facto);
   return 0;
 }

int factorial( int a )
 {
    int i,fact;
    for ( i = 1 , fact = 1 ; i &lt;= a ; i ++ )
    fact = fact * i ;
    return fact;
 }

Output :-

  Enter a number : 5
  Factorial is 120.</pre>
Now we can find factorial of any number just by calling factorial function.
<h2>A Uppercase converter function:-</h2>
This function will accept a lower case latter and converter it into Uppercase latter.
<pre>#include&lt;stdio.h&gt;
int main()
{
   char alpha_converter( char );
   char n; 
 
   printf("Enter a alphabet : ");
   scanf("%c",&amp;n);

   n = alpha_converter(n);

   printf("Latter is converted it's %c now . n",n);
   return 0;
}

char alpha_converter( char x )
{
   // ASCII value of lower case latter
   if ( x &gt;= 97 &amp;&amp; x &lt;= 122)
   // Converting latter if it is lower case
   return x-32;
   else
   // returning latter if it's already upper case
   // we can return only 1 variable from a function
   return x;
 }

Output :-

  Enter a alphabet : d
  Latter is converted it's D now .</pre>
<h2>Prime function:-</h2>
This function will return 1 give number is Prime else return 0.
<pre>#include&lt;stdio.h&gt;
int main()
{
   int Prime( int );
   int n ;
   printf("Enter a number you want to check : ");
   scanf("%d",&amp;n);

     //here i call my function and if it return 1 means 
    //true and if will execute

   if (Prime(n))
     printf("Yes entered number is Prime");
   else
     printf("No entered number is Not Prime");
 
   return 0;
}

int Prime( int a )
 {
    int i ;
      // here i write (int)a/2 because a number can't 
     //divided number greater then it's half
 for ( i = 2 ; i &lt;= (int)a/2 ; i++ )
  {
    if ( a%i == 0)
       // if condition is true it mean It's Not Prime so return 0
     return 0;
 }
    // and if loop will over and can't return 0 
    //means it's a prime number hence return 1
 return 1;
}

Output:-

  Enter a number you want to check : 98
  No entered number is Not Prime</pre>
</div>