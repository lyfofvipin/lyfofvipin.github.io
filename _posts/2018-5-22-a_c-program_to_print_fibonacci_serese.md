---
title: A C-program to print fibonacci serese
categories: python
---

In mathematics, the <b>Fibonacci numbers</b> are the numbers in the following integer secquence, called the <b>Fibonacci sequence</b>, and characterized by the fact that every number after the first two is the sum of the two preceding ones.

0,1,1,2,3,5,8.........

in programing it achive by  adding first 2 number

for example :

by adding first two number ( 0 + 1 )  we will get 1.

&nbsp;

<span class="css-truncate css-truncate-target"><a id="c657f808d0f0f039d18dc823bec5aea5-3f602b7ae9ff985b121fce3e29670e6c5a6bd18b" class="js-navigation-open" title="fibonacci-series-for-loop.c" href="https://github.com/kumarvipinyadav/PROGRSMING/blob/master/fibonacci-series-for-loop.c">fibonacci-series-for-loop.c</a></span>

&nbsp;
<pre>#include&lt;stdio.h&gt;
void main()
{
   int  number1 , number2 , number3 , number4;

   printf( " Enter your number : n ");

   scanf( "%d" , &amp;number1 );

   for( number2=0 , number3=1 , number4=0  ;  number1 &gt;= 1 ;  number1-- )
{
        printf("%dn",number2);
		number4=number2+number3;
                number2=number3;
		number3=number4;
		}
}
</pre>
In above code number1 will accept number 1 from user and then using number2,number3 and number4 we will do our calculation and print Fibonacci secquence.