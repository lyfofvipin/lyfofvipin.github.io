---
title: A C programme to check leap year
categories: python
---

<pre>#include
void main()
{
int Year;
printf("Enter a Year :n");
scanf("%d",&amp;Year);
if ( Year%4==0 &amp;&amp; Year%100 != 0 || Year%400==0)   
               // here we use 400 because 
              // A senturey year is a leap year if it 
             //devide by 400
printf("yes it is leap Year.");
else
printf("No it is Not an leap Year.");
}
</pre>
OUTPUT :
1.

Enter a Year :
2004
yes it is leap Year.

2.

Enter a Year :
1700
No it is Not an leap Year.

if you dont know what is a leap year than<a href="https://en.wikipedia.org/wiki/Leap_year">click here</a>