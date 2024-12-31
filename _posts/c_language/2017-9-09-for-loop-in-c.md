---
title: FOR LOOP In C
categories: c
tags: [c]
---

The for loop in C is a control flow statement that allows you to repeatedly execute a block of code a specific number of times. It's commonly used when the number of iterations is known beforehand or can be determined by a certain condition.

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

## Flow Of Control In For Loop :

In this loop first of all the `initialization` part will execute it will execute once then or `conditional` part will execute after initialization it check every time and if it,s true then loop
will execute after checking the condition the flow of loop will move forwarded now the body of loop will execute after running hole body of loop.

The expression will execute after executing body of loop and
after it again the condition will check and loop will flow continually until condition become false.


## Few More Tips:

*Empty for loop*: You can have an empty loop body if the task is to simply perform an action without needing to do anything inside the loop.

for (int i = 0; i < 10; i++);

*Infinite for loop*: If the condition is always true, you can create an infinite loop. For example:

for (;;) {
    // Infinite loop - will run forever
}

Now ready for a lots of question on for loop.

