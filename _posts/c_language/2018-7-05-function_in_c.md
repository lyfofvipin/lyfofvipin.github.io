---
title: Function In C
categories: c
tags: [c]
---

<h1>Modular programming:</h1>
Modular programming is programming concept. This concept allow us to divide a large solution
into several small modules. Each module is devloped independently and act is a solution of small problem.
<h2>Need/Advantages of modular programming :</h2>
1. A module developed once and reuse several times in a program.
2. Due to readability, A problem will have less no of instruction.
3. A problem has less numbers of instruction has less number of errors.
4. program is easily maintainable .
5. program is easily extendable.

In C language to apply modular programming we use function or structures.
<h2>Function:-</h2>
A function is an individual unit of small set of instruction to solve a specific task.
Function may be inbuilt or user Define.

User define function:-
If a function not exist in language, it can be devloped by the user.
The development of a function has 3 steps.
1. Function declaration ( Prototype )
2. Function calling
3. Function definition
<h2>Function declaration:-</h2>
Function declaration is a statement that declare a user define function, It describe the name of function,
and return type of a function. The definition of a function must be placed out of other function
in C language.

e.g.

<img class="alignnone size-full wp-image-574" src="https://vipin711.files.wordpress.com/2019/09/c03ee-screenshot-from-2018-07-04-15-37-55-e1530699043725.png" alt="Function" width="368" height="310" />
<h3>Argument :-</h3>
Argument can be value or variable which given to a function during it's calling.
<h2>Function calling :-</h2>
This is a statement where we call a function by using it's name. During calling a function we have
to pass all the Argument to the function.we can call a function several times.
<h2>Function Definition:-</h2>
Function Definition is the body of function (set of instruction). this body will execute when we call
a function.The defection begin from header row. This header row contain return type,name of function and Argument variable of a function. A function definition may/may not return a value.

Defection of a function can not be placed within another function. Definition must be placed in globle scope of program.
<h2>A simple Function who calculate average of 4 integers :</h2>

```
#include<stdio.h>
void main()
{
    int A,B,C;
    float res;
       // here we are declaring a function
    float average ( int , int , int , int );
    A = 12, B = 23 , C = 34;
       //now i am calling my function
    res = average(A, B, C, 45 );
       // see how to pass Arguments
    printf("Result is %.2f n",res);
       // here %.2f will allow 2 values printing after decimel
}
      // now i am defining my function
      // here you have to give names to argument 
      // here you can give names to argument what ever you want
   float average ( int num1 , int num2 , int num3 , int num4 )
     // here value of A copy in num1
     // here value of B copy in num2
     // here value of C copy in num3
     // here value of 45 copy in num4
{
     float z;
     z = num1 + num2 + num3 + num4 ;
     z = z/4;
     return z;
        // we use return keyword to return a value back to main 
       //function
}
```
