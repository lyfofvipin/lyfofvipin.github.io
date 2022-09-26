---
title: Reversing a number using for loop
categories: python
---

<span class="css-truncate css-truncate-target"><a id="e7df04ff9633942d9a70a846ccb50c42-cfd3e2e5ebffbf70c48cec20b936078ee5dd22f1" class="js-navigation-open" title="reverse-using-for-loop.c" href="https://github.com/kumarvipinyadav/PROGRSMING/blob/master/reverse-using-for-loop.c">reverse-using-for-loop.c</a></span>
<pre>#include&lt;stdio.h&gt;
void main()
{
   int number,i;
   printf("Enter a numbern");
   scanf("%d",&amp;number);
   for( i = 0 ; number &gt; 0 ; a = number/10 )
   {
         i=i*10+a%10;
   }
   printf("%d",i);
}</pre>
In above code we will take an integer as an input ,

and further using some mathmatical expression we ,

can reverse that number and store that in variable i.