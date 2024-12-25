---
title: while loop in C
categories: c
tags: [c]
---

# WHILE LOOP :

This is a pre tested loop where condition is tested and if it is true then,
statements will execute and so on.

syntax :

```
while ( condition )
    statement_1;
```

```
while ( condition )
{
    statement_1;
    statement_2;
    statement_3;
    statement_......;
}
```

Example To Understand For Loop:

```
#include<stdio.h>
void main()
{
    int i;
    i=1;

    while ( i <= 10 )
    {
        printf("Now i is %d so according to condition %d <= 10 which is true ",i,i);
        printf("so loop will execute it's statements");
        i = i+1;
    }
    printf("Now i is %d so according to condition %d <= 10 which is not true ",i,i);
    printf("so loop will stop and it's other statements will run");

}
```

Output:
```
Now i is 1 so according to condition 1 <= 10 which is true so loop will execute it's statements
Now i is 2 so according to condition 2 <= 10 which is true so loop will execute it's statements
Now i is 3 so according to condition 3 <= 10 which is true so loop will execute it's statements
Now i is 4 so according to condition 4 <= 10 which is true so loop will execute it's statements
Now i is 5 so according to condition 5 <= 10 which is true so loop will execute it's statements
Now i is 6 so according to condition 6 <= 10 which is true so loop will execute it's statements
Now i is 7 so according to condition 7 <= 10 which is true so loop will execute it's statements
Now i is 8 so according to condition 8 <= 10 which is true so loop will execute it's statements
Now i is 9 so according to condition 9 <= 10 which is true so loop will execute it's statements
Now i is 10 so according to condition 10 <= 10 which is true so loop will execute it's statements
Now i is 11 so according to condition 11 <= 10 which is not true so loop will stop and it's other statements will run
```
