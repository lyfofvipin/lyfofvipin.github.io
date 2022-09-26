---
title: Increment-Decrement-operator
categories: python
---

Before we move forward we will take knowledge of some more operator .

They are those kind of operator who increse or decrese the value of a variable
by 1.these are unary operators and can only applied with variables.

EX:
1.
int a = 5;
a++;
printf( " n %d n ",a ); // Output: 6

2.
int n = 5;
n--;
printf( " n %d n ",n ); // Output: 4

These operator has two forms:

1. prefix: In this case operator plased before variable.The expression return
changed value.it solved before all operator .
[ ++variable --variable ]

2. postfix: In this case operator plased after variable.The expression return
unchanged value.it solved after all operator .
[ variable++ variable-- ]

EX. for prefix :
1.
int n = 5,p;
p = ++n;
printf( " n %d n %d n ",p,n ); // Output: 6 6

2.
int n = 5,p;
p = ++n*2;
printf( " n %d n %d n ",p,n ); // Output: 12 6

3.
int n = 5;
printf( " n %d n ",++n ); // Output: 6

&nbsp;

EX. for postfix :
1.
int n = 5,p;
p = n++;
printf( " n %d n %d n ",p,n ); // Output: 5 6

2.
int n = 5,p;
p = n++*2;
printf( " n %d n %d n ",p,n ); // Output: 10 6

3.
int n = 5;
printf( " n %d n ",n++ ); // Output: 5

&nbsp;

Now some examples for you --&gt;

1.
int n = 3,p;
p = n++ + n++ + n++ + n++ ;
printf( " n %d n ",p,n ); // Output: 12 7

2.
int n = 3,p;
p = ++n + n++ + ++n + n++ ;
printf( " n %d n ",p,n ); // Output: 20 7

3.
int n = 3,p;
p = ++n + ++n + ++n + ++n ;
printf( " n %d n ",p,n ); // Output: 28 7

NOTE :-&gt; you will get wrong output of all three quection's in gcc or in code::block compiler .because of there undefined nature so don't worry about that the written answer are correct.

NOW some importent points  :
r = p++ + Q;               /* ok */
r = p+++Q;                /* ok */
r = p++++Q;             /* error */
r = p++ + +Q;          /* ok */
r = p+++++Q;         /* error */
r = p++*++Q; /* ok */