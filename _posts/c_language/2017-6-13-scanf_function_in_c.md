---
title: Scanf Function In C Language
categories: c
tags: [c]
---

# Scanf

Scanf is a built in function from stdio.h This function is used to read data from keyboard at program runtime. The data will be stored in specified variable.

Syntax:

`scanf("format specifier", &var_name)`  Here `&` ( also known as address of operator ) help us to write things on the memory address of the variable.


Examples:

```
#include<stdio.h>

void main()
{
    char var_name3;
    printf("Enter a Character: ");
    scanf("%c",&var_name3);
    printf("You Enter %c .\n", var_name3);

    int var_name;
    printf("Enter a Number: ");
    scanf("%d",&var_name);
    printf("You Enter %d .\n", var_name);

    float var_name2;
    printf("Enter a Float Value: ");
    scanf("%f",&var_name2);
    printf("You Enter %f .\n", var_name2);
}
```

Output:
```
[vipikuma@kvy c_classes]$ gcc input.c ; ./a.out 
Enter a Character: $ 
You Enter $ .
Enter a Number: 45
You Enter 45 .
Enter a Float Value: 65.8
You Enter 65.800003 .
```