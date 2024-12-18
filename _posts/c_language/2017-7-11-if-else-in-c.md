---
title: If Else In C
categories: c
tags: [c]
---

# If Else In C

In C programming, the `if-else` statement is used to make decisions in the code. It allows you to execute a block of code based on whether a condition is `true` or `false`.

<img class="img_center" src="statics/img/if_else.png" alt="If-Else">


Syntax:

```
if ( condition ) {

    // Code to execute if the condition is true

}

else {

    // Code to execute if the condition is false

}
```

`condition`: This is an expression that evaluates to either true (non-zero) or false (zero).

`if` block: This block of code runs if the condition is true.

<img class="img_center" src="statics/img/if_only.png" alt="If-Else">

Syntax:
```
if ( condition ) {

    // Code to execute if the condition is true

}
```

`else` block: This block of code runs if the condition is false.

## How it works:
The condition is evaluated.

If the condition is true (non-zero), the code inside the if block is executed.

If the condition is false (zero), the code inside the else block is executed.


* We can use only `if` statements without an `else` statement.

* But We can not use only `else` statements without an `if` statement.


Examples:

A program to check if you can vote or not based on your age.

```
#include<stdio.h>

void main(){

    int age;

    printf("Enter your age: ");
    scanf("%d", &age);

    if ( age >= 18 ) {

        printf("Okay sir you can vote.\n");
        printf("Be vise while choosing your leader.\n");

    }
    else {

        printf("Nope you can vote.\n");
        printf("you should be atleast 18 year old.\n");

    }
}
```

Output:

```
cc if_else.c ; ./a.out 
Enter your age: 36
Okay sir you can vote.
Be vise while choosing your leader.
```

A program to check if given year is leap year or not.

```
#include<stdio.h>

void main(){

    int year;

    printf("Enter a Year: ");
    scanf("%d", &year);

    if ( year % 4 == 0 ) {
        printf("This is leap year.\n");
        printf("Work one more extra day.\n");
    }
    else
    {
        printf("This is not a leap year.\n");
    }
}
```

Output:

```
cc if_else.c ; ./a.out 
Enter a Year: 2020          
This is leap year.
Work one more extra day.
```