---
title: Ternary Operator In C
categories: c
tags: [c]
---


## Ternary Operator (conditional operator)

The ternary operator in C is a shorthand way to express a simple if-else statement. It's called "ternary" because it involves three operands.

syntax :

`condition ? expression_if_true : expression_if_false;`

Here C compiler will evaluate the condition and if it is true then `expression_1` will run
and if condition will not true then `expression_2` will run.

## Advantages

### Conciseness

It makes the code more compact, especially for simple conditional assignments.

### Readability

In some cases, it can improve readability by expressing simple logic in a single line.

Examples:

A program to check if you can vote or not based on your age.

```
#include<stdio.h>

void main(){

    int age, Overall_status;

    printf("Enter your Age: ");

    scanf("%d", &age);

    printf( "%d\n", age >= 18 );

    age >= 18 ? printf("Yes You Can Vote!\n") : printf("Nope You Can Not Vote!\n");

}
```

Output:
```
cc tern.c ; ./a.out 
Enter your Age: 26
1
Yes You Can Vote!
```

A program to check if given year is leap year or not.

```
#include<stdio.h>

void main(){

    int year;

    printf("Enter a year: ");

    scanf("%d", &year);

    year % 4 == 0 ? printf("Yes It's a Leap Year.\n") : printf("No It's not a leap year\n");

}
```

Output:
```
cc tern.c ; ./a.out 
Enter a year: 1999
No It's not a leap year
```

Program to check it integer is positive or negative.

```
#include<stdio.h>

void main(){

    int num;

    printf("Enter A number: ");
    scanf("%d", &num);

    ( num > 0 ) ? printf("Num is +ve.\n") : printf("Num is -ve.\n");
}
```

Output:
```
cc tern.c ; ./a.out 
Enter A number: 23
Num is +ve.
[vipikuma@kvy c_classes]$ cc tern.c ; ./a.out 
Enter A number: -90
Num is -ve.
```