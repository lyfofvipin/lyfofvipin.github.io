---
title: SWITCH Case in C
categories: c
tags: [c]
---


The SWITCH-CASE is a multi way branch statement.

The switch statement in C provides a way to execute different blocks of code based on the value of a single variable or expression. It's an alternative to a long chain of if-else if statements, especially when comparing a variable against multiple constant values.

It accept an expression/variable and test it's value with written value in case.

if it match to any case than it switch flow of program there and statements written in that case will run and the break statement will transfer flow of program out of switch.

If there will no break then hole switch will run till end.

NOTE :- IT ONLY TEST INTEGER AND CHARACTERS. IT DO NOT TEST FLOAT OR DOUBLE VALES.

syntax :
```
switch (var)
{
case value_1 :
statement_1;
statement_2;
statement_3...;
break;

case value_2 :
statement_1;
statement_2;
statement_3...;
break;

case value_3 :
statement_1;
statement_2;
statement_3...;
break;

\ we can write case according to our requirement.
}
```

or you can use pair of `{}` also.

```
switch (var)
{
case value_1 :
{
    statement_1;
    statement_2;
    statement_3...;
    break;
}
case value_2 :
{
    statement_1;
    statement_2;
    statement_3...;
    break;
}
case value_3 :
{
    statement_1;
    statement_2;
    statement_3...;
    break;
}
\ we can write case according to our requirement.
}
```
