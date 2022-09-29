---
title: FOR-LOOP-IN-C
categories: c
tags: [c]
---

This loop is called controlled loop in C. it generally divided in three parts initialization ,condition and expression [increment/decrement,etc.] all three parts are optional.
If you don't give condition to for loop it become true and run infinite times.

SYNTAX :

1. 
```
for( initialization ; condition ; expression )
statement ;
```

2. 
```
for( initialization ; condition ; expression )
{
    statement_1 ;
    statement_2 ;
    statement_3 ;
    statement_......;
}
```

NOTE : remember the `;` semicolon after each part.

`initialization` : In this part we can store values in variable those will used by loop statement.
or we can say we can do our initialization here in this part.
This part of for loop execute first and once only.

`condition` : you use a lots of condition in while or do-while loop this is same in this part we can write our condition.
This place in for loop is check each time during execution. if condition become false then loop stop executing.

`expression` : In this part of loop we can write any expression which execute after running body of loop. amd execute each time
loop will execute.

## FLOW-OF-CONTROL-IN-FOR-LOOP :

In this loop first of all the initialization part will execute it will execute once then
or conditional part will execute after initialization it check every time and if it,s true then loop
will execute after checking the condition the flow of loop will move forwarde
now the body of loop will execute after running hole body of loop
The expression will execute after executing body of loop and
after it again the condition will check and loop will flow continually until condition become false.

Now ready for a lots of question on for loop.
