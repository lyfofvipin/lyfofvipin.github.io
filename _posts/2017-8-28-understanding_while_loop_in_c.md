---
title: understanding while loop in C
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int i;
i=1;

while ( i &lt;= 10 )
{
printf("Now i is %d so accarding to condiction %d &lt;= 10 which is true ",i,i);
printf("so loop will execute it's statementsn");
i = i+1;
}
printf("Now i is %d so accarding to condiction %d &lt;= 10 which is not true ",i,i);
printf("so loop will stop and it's other statements will run");

}

/*
Now i is 1 so accarding to condiction 1 &lt;= 10 which is true so loop will execute it's statements
Now i is 2 so accarding to condiction 2 &lt;= 10 which is true so loop will execute it's statements
Now i is 3 so accarding to condiction 3 &lt;= 10 which is true so loop will execute it's statements
Now i is 4 so accarding to condiction 4 &lt;= 10 which is true so loop will execute it's statements
Now i is 5 so accarding to condiction 5 &lt;= 10 which is true so loop will execute it's statements
Now i is 6 so accarding to condiction 6 &lt;= 10 which is true so loop will execute it's statements
Now i is 7 so accarding to condiction 7 &lt;= 10 which is true so loop will execute it's statements
Now i is 8 so accarding to condiction 8 &lt;= 10 which is true so loop will execute it's statements
Now i is 9 so accarding to condiction 9 &lt;= 10 which is true so loop will execute it's statements
Now i is 10 so accarding to condiction 10 &lt;= 10 which is true so loop will execute it's statements
Now i is 11 so accarding to condiction 11 &lt;= 10 which is not true so loop will stop and it's other statements will run
*/