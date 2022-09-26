---
title: PRINTING SIN, COS, LOG AND E^X SERIES IN C
categories: python
---

Let's learn some series printing with help of loop and functions,
it is like summering what we have study till now
Let's start with a simple series.
<h2>Printing x+(x/2)+(x/3)+(x/4)+(x/5)...(x/n) series :-</h2>
<span class="css-truncate css-truncate-target"><a id="7fa1b6e73706547af4a60660de5fb97b-682167006ae0894008a74a14ab1e0ade830f28c6" class="js-navigation-open" title="Printing-simple-serese.c" href="https://github.com/vipin3699/PROGRSMMING/blob/master/Printing-simple-serese.c">Printing-simple-serese.c</a></span>
<pre>#include&lt;stdio.h&gt;
int main()
{ 
int n,x;
double result;

double series ( int ,int );

printf("Enter value of x : ");
scanf("%d",&amp;x);

printf("Enter value of n : ");
scanf("%d",&amp;n);

result = series(x,n);
printf("Result is : %.3lf",result);
return 0;
}
double series ( int x, int n )
{
int i;
double res = 0.0;
for ( i = 1 ; i &lt;= n ; i++ )
res = res + x/(double)i;
return res;
}</pre>
<h2></h2>
Now we will make a program to print value of sin(x) series

after asking values of x and n.
<h2>Printing sin(x) series:-
x-(x^3/3!)+(x^5/5!)-(x^7/7!)+(x^9/9!)+(x^11/11!)...</h2>
<span class="css-truncate css-truncate-target"><a id="f7e5a9a30a42242522345d655eb71b5f-df2d17752381c87bd9744d60314409c5b8c11dc5" class="js-navigation-open" title="Printing-sin(x)-serese.c" href="https://github.com/vipin3699/PROGRSMMING/blob/master/Printing-sin(x)-serese.c">Printing-sin(x)-serese.c</a></span>
<pre>#include&lt;stdio.h&gt;
int main()
{ 
int n,x;
double result;

double series ( int ,int );

printf("Enter value of x : ");
scanf("%d",&amp;x);

printf("Enter value of n : ");
scanf("%d",&amp;n);

result = series(x,n);
printf("Result is : %.3lf",result);
return 0;
}
double series ( int x, int n )
{
int i,pow,fact,number;

int factorial( int );
int power( int , int );
double res = 0.0;
for ( i = 1 ; i &lt;= n ; i++ )
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

int power ( int x , int n)
{
int i,pow = 1;

for ( i = 1 ; i &lt;= n ; i++ )
pow = pow*x;

return pow;
}

int factorial( int x)
{
int i,fact = 1;

for ( i = 1 ; i &lt;= x ; i++ )
fact = fact*i;

return fact;
}</pre>
<h2></h2>
Now we will make a program to print value of cos(x) series

after asking values of x and n.
<h2>Printing cos(x) series:-
1-(x^2/2!)+(x^4/4!)-(x^6/6!)+(x^6/6!)+(x^6/6!)-(x^8/8!)...</h2>
<span class="css-truncate css-truncate-target"><a id="cf5f58f5aab8bf69e3f1ca6eb5a87a77-088de2e2747acd67e3d72a0cc0ba8e7c4c3266d9" class="js-navigation-open" title="Printing-cos(x)-serese.c" href="https://github.com/vipin3699/PROGRSMMING/blob/master/Printing-cos(x)-serese.c">Printing-cos(x)-serese.c</a></span>
<pre>#include&lt;stdio.h&gt;
int main()
{ 
int n,x;
double result;

double series ( int ,int );

printf("Enter value of x : ");
scanf("%d",&amp;x);

printf("Enter value of n : ");
scanf("%d",&amp;n);

result = series(x,n);
printf("Result is : %.3lf",result);
return 0;
}
double series ( int x, int n )
{
int i,pow,fact,number;

int factorial( int );
int power( int , int );
double res = 0.0;
for ( i = 0 ; i &lt;= n ; i++ )
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

int power ( int x , int n)
{
int i,pow = 1;

for ( i = 1 ; i &lt;= n ; i++ )
pow = pow*x;

return pow;
}

int factorial( int x)
{
int i,fact = 1;

for ( i = 1 ; i &lt;= x ; i++ )
fact = fact*i;

return fact;
}</pre>
Now we will make a program to print value of log(1+x) series

after asking values of x and n.
<h2>Printing log(1+x) series.
x-(x^2/2!)+(x^3/3!)-(x^4/4!)+(x^5/5!)+(x^6/6!)-(x^7/7!)...</h2>
<span class="css-truncate css-truncate-target"><a id="0740505411cf8ddb8dfbc14dfd9ded60-2e938e4c589b8ecd8ebc16ead6c8631a51cd3cb0" class="js-navigation-open" title="Printing log(1+x) serese.c" href="https://github.com/vipin3699/PROGRSMMING/blob/master/Printing%20log(1%2Bx)%20serese.c">Printing log(1+x) serese.c</a></span>
<pre>#include&lt;stdio.h&gt;
int main()
{ 
int n,x;
double result;

double series ( int ,int );
printf("Enter value of x : ");
scanf("%d",&amp;x);

printf("Enter value of n : ");
scanf("%d",&amp;n);

result = series(x,n);
printf("Result is : %.3lf",result);
return 0;
}
double series ( int x, int n )
{
int i,pow;

int power( int ,int );

double res = 0.0;
for ( i = 1 ; i &lt;= n ; i++ )
{
pow = power(x,i);

if ( i%2 != 0 )
res = res + pow/(double)i;
else
res = res - pow/(double)i;
}
return res;
}

int power ( int x , int n)
{
int i,pow = 1;

for ( i = 1 ; i &lt;= n ; i++ )
pow = pow*x;

return pow;
}</pre>
Now we will make a program to print value of e^x series

after asking values of x and n.
<h2>Printing e^x series.
1+x+(x^2/2!)+(x^3/3!)+(x^4/4!)+(x^5/5!)+(x^6/6!)...</h2>
<span class="css-truncate css-truncate-target"><a id="1b7a87c320e7a76bc13df1dacc4c22b7-6c89f7545e46c502b8a1f90a731135beff520a9a" class="js-navigation-open" title="Printing e^x series.c" href="https://github.com/vipin3699/PROGRSMMING/blob/master/Printing%20e%5Ex%20series.c">Printing e^x series.c</a></span>
<pre>#include&lt;stdio.h&gt;
int main()
{ 
int n,x;
double result;

double

 ( int ,int );
printf("Enter value of x : ");
scanf("%d",&amp;x);

printf("Enter value of n : ");
scanf("%d",&amp;n);

result = series(x,n);
printf("Result is : %.3lf",result);
return 0;
}
double series ( int x, int n )
{
int i,pow,fact;

int power( int ,int );

int factorial( int );

double res = 0.0;
for ( i = 0 ; i &lt;= n ; i++ )
{
pow = power(x,i);
fact = factorial(i);
res = res + pow/(double)fact;
}
return res;
}

int power ( int x , int n)
{
int i,pow = 1;

for ( i = 1 ; i &lt;= n ; i++ )
pow = pow*x;

return pow;
}

int factorial( int x)
{
int i,fact = 1;

for ( i = 1 ; i &lt;= x ; i++ )
fact = fact*i;

return fact;
}</pre>