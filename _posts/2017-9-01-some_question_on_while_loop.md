---
title: Some question on while loop
categories: python
---

Find outputs :

1.

#include&lt;stdio.h&gt;
void main()
{
int i = 1;
while ( i &lt;= 10 )
{
printf("value of i is %d.n",i);
i = i+1;
}
}
/*
OUTPUT :

value of i is 1.
value of i is 2.
value of i is 3.
value of i is 4.
value of i is 5.
value of i is 6.
value of i is 7.
value of i is 8.
value of i is 9.
value of i is 10.
*/

2.

#include&lt;stdio.h&gt;
void main()
{
int i = 10;
while ( i &gt;= 1 )
{
printf("value of i is %d.n",i);
i = i-1;
}
}

/*
OUTPUT :

value of i is 10.
value of i is 9.
value of i is 8.
value of i is 7.
value of i is 6.
value of i is 5.
value of i is 4.
value of i is 3.
value of i is 2.
value of i is 1.
*/

3.

#include&lt;stdio.h&gt;
void main()
{
int i = 1;
while ( i &lt;= 10 )
{
printf("value of i is %d.n",i+1);
i = i+1;
}
}

/*
OUTPUT :

value of i is 2.
value of i is 3.
value of i is 4.
value of i is 5.
value of i is 6.
value of i is 7.
value of i is 8.
value of i is 9.
value of i is 10.
value of i is 11.
*/

4.

#include&lt;stdio.h&gt;
void main()
{
int i = 1;
while ( i &lt;= 10 )
{
printf("value of i is %d.n",i*i);
i = i+1;
}
}

/*
OUTPUT :

value of i is 1.
value of i is 4.
value of i is 9.
value of i is 16.
value of i is 25.
value of i is 36.
value of i is 49.
value of i is 64.
value of i is 81.
value of i is 100.
*/

5.

#include&lt;stdio.h&gt;
void main()
{
int i = 1;
while ( i &lt;= 10 )
{
printf("value of i is %d.n",i);
i = i + 2;
}
}

/*
OUTPUT :

value of i is 1.
value of i is 3.
value of i is 5.
value of i is 7.
value of i is 9.
*/

6.
#include&lt;stdio.h&gt;
void main()
{
int i = 1;
while ( i &lt;= 10 )
{
if( i%2 == 0)
printf("value of i is %d.n",i);
i = i + 1;
}
}

/*
OUTPUT :
value of i is 2.
value of i is 4.
value of i is 6.
value of i is 8.
value of i is 10.
*/

7.

#include&lt;stdio.h&gt;
void main()
{
char i = 'a';
while ( i &lt;= 'h' )
{
printf("value of i is %d.n",i); //keep %d in mind
i = i + 1;
}
}
/*
OUTPUT :
value of i is 97.
value of i is 98.
value of i is 99.
value of i is 100.
value of i is 101.
value of i is 102.
value of i is 103.
value of i is 104.
*/

8.

#include&lt;stdio.h&gt;
void main()
{
char i = 'a';
while ( i &lt;= 'h' )
{
printf("value of i is %c.n",i);
i = i + 1;
}
}

/*
OUTPUT :
value of i is a.
value of i is b.
value of i is c.
value of i is d.
value of i is e.
value of i is f.
value of i is g.
value of i is h.
*/

&nbsp;

I think we know while loop very well now.