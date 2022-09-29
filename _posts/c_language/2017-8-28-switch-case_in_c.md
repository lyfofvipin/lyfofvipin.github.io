---
title: SWITCH-case in C
categories: c
tags: [c]
---

The SWITCH-CASE is a multi way branch statement.

It accept an expression/variable and test it's value with written value in case
if it match to any case than it switch flow of program there and statements
written in that case will run.
and the break statement will transfer flow of programe out of switch.
if there will no break then hole switch will run till end.

NOTE :- IT ONLY TEST INTEGER AND CHARACTERS. IT DO NOT TEST FLOAT OR DOUBLE VALES.

syntex :
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

\ we can write case according to our recquirment.
}
```

or you can use pair of {} also.

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
\ we can write case according to our recquirment.
}
```
