---
title: Calculating your telephone bill
categories: python
---

/*
NOTE :- If we want to make a few line as comment
then we can write those statemennts within
/*
this pair of combinaction of .
*/

/*
calls &lt;= 100 charges 2/- per call
calls &lt;= 300 charges 3.5/- per call
calls &lt;= 500 charges 4.5/- per call
calls &gt; 500 charges 5/- per call
*/

#include&lt;stdio.h&gt;
void main()
{
int calls;
float amount;

printf("Enter Number of calls :");
scanf("%d",&amp;calls);

printf("Number of calls is %d and nyou have to pay ",calls);

if ( calls &lt;= 100 )
amount = calls*2;
else if ( calls &lt;= 300 )
{
amount = 100*2;
calls = calls-100;
amount = amount + calls*3.5;
// or amount = 100*2 + (call-100)*2;
}
else if ( calls &lt;= 500 )
{
amount = 100*2;
amount = amount + 200*3.5;
calls = calls-300;
amount = amount + calls*4.5;
// or amount = 100*2 + 200*2 + (calls-300)*4.5;
}
else if ( calls &gt; 500 ) // or else
{
amount = 100*2;
amount = amount + 200*3.5;
amount = amount + 200*4.5;
calls = calls-500;
amount = amount + calls*5;
// or amount = 100*2 + 200*3.5 + 200*4.5 + (calls-500)*5;
}
printf(" %.2f Rs.",amount);
}
/*
OUTPUT

1.

Enter Number of calls :100
Number of calls is 100 and
you have to pay 200.00 Rs.

2.

Enter Number of calls :2345
Number of calls is 2345 and
you have to pay 11025.00 Rs.

*/

SO WE ARE ENDING NESTING IF-ELSE HERE YOU CAN PRECTICE MORE QUECTION ON IT AT HOME.