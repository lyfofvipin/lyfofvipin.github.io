---
title: PRINTING SIN, COS, LOG AND E^X SERIES IN C
categories: c
tags: [c]
---

Let's learn some series printing with help of loop and functions,
it is like summering what we have study till now
Let's start with a simple series.

<h2>Printing x+(x/2)+(x/3)+(x/4)+(x/5)...(x/n) series :-</h2>

```
#include<stdio.h>
int main()
{ 
    int n,x;
    double result;
    double series ( int ,int );
    printf("Enter value of x : ");
    scanf("%d",&x);
    printf("Enter value of n : ");
    scanf("%d",&n);
    result = series(x,n);
    printf("Result is : %.3lf",result);
    return 0;
}
```

```
double series ( int x, int n )
{
    int i;
    double res = 0.0;
    for ( i = 1 ; i <= n ; i++ )
    res = res + x/(double)i;
    return res;
}
```

## Now we will make a program to print value of sin(x) series after asking values of x and n.

<h2>Printing sin(x) series:-
x-(x^3/3!)+(x^5/5!)-(x^7/7!)+(x^9/9!)+(x^11/11!)...</h2>

```
#include<stdio.h>
int main()
{ 
    int n,x;
    double result;

    double series ( int ,int );

    printf("Enter value of x : ");
    scanf("%d",&x);

    printf("Enter value of n : ");
    scanf("%d",&n);

    result = series(x,n);
    printf("Result is : %.3lf",result);
    return 0;
}
```

```
double series ( int x, int n )
{
    int i,pow,fact,number;

    int factorial( int );
    int power( int , int );
    double res = 0.0;
    for ( i = 1 ; i <= n ; i++ )
    {
        number = 2*i - 1 ; // To bring even number every time
        pow = power(x,number);
        fact = factorial(number);
        if ( i%2 != 0 )
        res = res + pow/(double)fact;
        else
        res = res - pow/(double)fact;
    }
    return res;
}
```

```
int power ( int x , int n)
{
    int i,pow = 1;
    for ( i = 1 ; i <= n ; i++ )
    pow = pow*x;
    return pow;
}
```

```
int factorial( int x)
{
    int i,fact = 1;
    for ( i = 1 ; i <= x ; i++ )
    fact = fact*i;
    return fact;
}
```

## Now we will make a program to print value of cos(x) series after asking values of x and n

<h2>Printing cos(x) series:-
1-(x^2/2!)+(x^4/4!)-(x^6/6!)+(x^6/6!)+(x^6/6!)-(x^8/8!)...</h2>


```
#include<stdio.h>
int main()
{ 
    int n,x;
    double result;
    double series ( int ,int );
    printf("Enter value of x : ");
    scanf("%d",&x);
    printf("Enter value of n : ");
    scanf("%d",&n);
    result = series(x,n);
    printf("Result is : %.3lf",result);
    return 0;
}
```

```
double series ( int x, int n )
{
    int i,pow,fact,number;
    int factorial( int );
    int power( int , int );
    double res = 0.0;
    for ( i = 0 ; i <= n ; i++ )
    {
        number = 2*i ; // To bring odd number every time
        pow = power(x,number);
        fact = factorial(number);
        if ( i%2 != 0 )
        res = res + pow/(double)fact;
        else
        res = res - pow/(double)fact;
    }
    return res;
}
```

```
int power ( int x , int n)
{
    int i,pow = 1;
    for ( i = 1 ; i <= n ; i++ )
    pow = pow*x;
    return pow;
}
```

```
int factorial( int x)
{
    int i,fact = 1;
    for ( i = 1 ; i <= x ; i++ )
    fact = fact*i;
    return fact;
}
```

## Now we will make a program to print value of log(1+x) series after asking values of x and n.

<h2>Printing log(1+x) series.
x-(x^2/2!)+(x^3/3!)-(x^4/4!)+(x^5/5!)+(x^6/6!)-(x^7/7!)...</h2>

```
#include<stdio.h>
int main()
{ 
    int n,x;
    double result;
    double series ( int ,int );
    printf("Enter value of x : ");
    scanf("%d",&x);
    printf("Enter value of n : ");
    scanf("%d",&n);
    result = series(x,n);
    printf("Result is : %.3lf",result);
    return 0;
}
```

```
double series ( int x, int n )
{
    int i,pow;
    int power( int ,int );
    double res = 0.0;
    for ( i = 1 ; i <= n ; i++ )
    {
        pow = power(x,i);
        if ( i%2 != 0 )
        res = res + pow/(double)i;
        else
        res = res - pow/(double)i;
    }
    return res;
}
```

```
int power ( int x , int n)
{
    int i,pow = 1;
    for ( i = 1 ; i <= n ; i++ )
    pow = pow*x;
    return pow;
}
```

## Now we will make a program to print value of e^x series after asking values of x and n

```
#include<stdio.h>
int main()
{ 
    int n,x;
    double result;
    double ( int ,int );
    printf("Enter value of x : ");
    scanf("%d",&x);
    printf("Enter value of n : ");
    scanf("%d",&n);
    result = series(x,n);
    printf("Result is : %.3lf",result);
    return 0;
}
```

```
double series ( int x, int n )
{
    int i,pow,fact;
    int power( int ,int );
    int factorial( int );
    double res = 0.0;
    for ( i = 0 ; i <= n ; i++ )
    {
        pow = power(x,i);
        fact = factorial(i);
        res = res + pow/(double)fact;
    }
    return res;
}
```

```
int power ( int x , int n)
{
    int i,pow = 1;
    for ( i = 1 ; i <= n ; i++ )
    pow = pow*x;
    return pow;
}
```

```
int factorial( int x)
{
int i,fact = 1;
for ( i = 1 ; i <= x ; i++ )
fact = fact*i;
return fact;
}
```
