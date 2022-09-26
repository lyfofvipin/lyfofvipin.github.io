---
title: Jump Statements In C
categories: python
---

<h1>Jump Statements In C :-</h1>
Before moving on function problems let's read about jump statements.

Jump Statements are the Statements those shift the control of execution.
IN c language we have 5 jump Statements.
<h4>1. Break
2. Continue
3. Exit
4. Goto
5. Return</h4>
Let's read about return statement first.
<h2>Return:-</h2>
A function may or may not return a value. A return statement returns a value to the calling function,
and assigns to the variable in the left side of the calling function.
If a function does not return a value, the return type in the function definition and declaration,
is specified as void.
<h2>Break Statements :-</h2>
The break statement is a jump instruction and can be used inside a switch construct, for loop, while loop and do-while loop.

The execution of break statement causes immediate exit from
concern construct and control is transfers to the statement following the loop.
In the loop construct the execution of break statement terminate loop and further execution the program
is reserved with the statement following the body of the loop. The following program illustrates the use of break statement.

This program illustrates the use of break statement.

It will print number if it is positive else it print,
Entered number is Negative hence breaking the program.
<pre>#include&lt;stdio.h&gt;
int main()
{
    int n = 1;
    printf("Enter a number : n");
    scanf("%d",&amp;n);
    if ( n &lt; 0 )
      {
         printf("Entered number is Negative hence breaking the program.");
         break;
      }
     else
 
    printf("Entered number is %d.",n);
    return 0;
}

Output :-

Enter a number :
-10
Entered number is Negative hence breaking the program.</pre>
<h2>Continue:-</h2>
Continue statement can be used only inside for loop, while loop and do-while.
execution of these statement does not cause an exit from the loop but it suspend
the execution of loop for that iteration and transfer flow of control back to loop
for next iteration.

The following program illustrates the use of Continue statement.

It will read 10 positive number and display there sum.
<pre>#include&lt;stdio.h&gt;
int main()
{
 int a,i,sum;

 for ( i = 1 , sum = 0 ; i &lt;= 10 ; i++ )
   {
       printf("Enter a number n");
       scanf("%d",&amp;a);
       if(a&lt;0)
        {
          i--;
          printf("Please enter a positive number");
          continue;
        }
      else
      sum=sum+a;
   }
    printf("%d n",sum);
    return 0;
}

Output:-

  Enter a numbers : 
  12
  34
  57
  -898
  Please enter a positive number : 46
  345
  546
  56
  345
  3
  -645
  Please enter a positive number : 2234
  3678</pre>
<h2>Exit:-</h2>
exit is an inbuilt function from stdlib.h  header file. This function is used to terminate the program.
This function require an integer argument, If it is zero then program will terminate with successful status,

if it is non-zero then program will terminate with unsuccessful status.

Try to understand this program.
<pre>#include&lt;stdio.h&gt;
#include&lt;stdlib.h&gt;
int main()
{
  int a,i,sum;

   for ( i = 1 , sum = 0 ; i &lt;= 10 ; i++ )
  {
      printf("Enter a positive number n");
      scanf("%d",&amp;a);
      if(a&lt;0)
        exit(0);
      else
        sum=sum+a;
 }
   printf("%d",sum);
   return 0;
}

Output:-

Enter a positive number 
12
Enter a positive number 
23
Enter a positive number 
34
Enter a positive number 
45
Enter a positive number 
-78</pre>
<h2>Goto :-</h2>
In C programming goto statement is used for alterating the normal sequence of program execution
by transfering control to some other part of program.Syntex of goto statement
goto lable;
......
.......
........
lable:
statements;

In this Syntex lable is an identifire when the control of program reaches to goto statement, the
control of the program will jump to the lable: and execut the code below lable.

Example :-
<pre>#include&lt;stdio.h&gt;
int main()
{
    int i=0;
     Vipin: // the lable
    printf("%d n",i);
       i++;
    if(i&lt;=10)
    goto Vipin; 
     // It will flow controle back to Vipin
  return 0;
}

Output :-
 1
 2
 3
 4
 5
 6
 7 
 8
 9
 10</pre>
<pre>NOTE :- We genrealy avoid Goto statement in programming.</pre>
<h2>Reason to avoid goto statement :-</h2>
Thought goto statement give power to jump to any part of the program complex and
tangled. In modern programming, goto statement is considerd a harmful construct and a bad
programming practic.

The goto statement can be replaced in most of C program with the use of break and continue
statements, in fact any program in C programming can be written without goto.
It does not have any predefined work.