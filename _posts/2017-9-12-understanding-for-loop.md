---
title: Understanding-for-loop
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int i ;

for ( i = 1 ; i &lt;= 10 ; i++ )
printf( " Now the value of i is %d .n ",i );

/* OR
i = 1 ;
for( ; i &lt;= 10 ; )
{
printf("Now the value of i is %d.n ",i);
i++;
}
*/
}
/* Here i = 1 is initialization
and i &lt;= 10 is condinitiona; part and
i++ is expression part.
they run accroding to there flow as we explaine in last blog.
*/