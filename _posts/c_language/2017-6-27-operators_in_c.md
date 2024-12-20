---
title: operators in C
categories: c
tags: [c]
---

# And now we will discuss about operators in C.

An operator is a symbol which specify the kind of operation we want to do on the value.


## Generally We classify operators in 3 catagories

1 Unary operator

2 Binary operator

3 Ternary operator or conditional operator

### Unary operator

Unary operators are used only single operands

For example `()`, `[]` , `{}`, `&` etc.


### Binary operator

Binary operator need two operands
For example addition ,subtraction, multiplication etc.

### Ternary operator

This operator need three operands to work one is condition
and two are expression. We will deeply study while we make some programs on it.

## Concept Of True ( 1 ) and False ( 0 ) Values

* Any non 0 value is a True ( 1 ) value ( 1, 4, 5, -5, -6 )
* Any non empty array or string are also True ( 1 ) value ( [ 1, 2, 3 ], "Test" )
* Any empty array or string are also False ( 0 ) value ( [], "" )
* `0` is considered as a False ( 0 ) Value

## Here are type of operators

### Arithmetic operators

Arithmetic operators are you to perform any mathematical operation

Like

`+` adding

`-` subtracting

`*` multiply

`/` divide

`%` finding remainder.{10%3=1(remainder)}

there all are arithmetic operator type of binary operator.


### Assignment operator

List of the same:

`=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `|=`, `^=`, `<<=`, `>>=`

Example:
```
A = 5
B = A

A += 1 // A = A + 1
```

### Relational operators

From it's come in the name of operator this operator show any
relation between two operands.

`<` less then

`>` greater then

`==` equal to

`<=` less than equal to

`>=` greater than equal to

`!=` no equal to

They are also binary operator

### Logical operator

We have three kind of logical operator in C.

`&&` and operator

```
A   |   B   |   A&&B |
----+-------+--------+
0   |   0   |    0   |
0   |   1   |    0   |
1   |   0   |    0   |
1   |   1   |    1   |
```

`||` or operator

```
A   |   B   |   A||B |
----+-------+--------+
0   |   0   |    0   |
0   |   1   |    1   |
1   |   0   |    1   |
1   |   1   |    1   |
```

`!` not operater

### Increment / Decrement

`--` and `++`

This operator can be used in 2 way:

### *Prefix*

`++var_name`

`--var_name`


### *Postfix*

`var_name++`

`var_name--`


Examples:

```
int var1 = 6, var2 = 5, var3;

var3 = var1+++var2; // or var1++ + var2;
printf("New Value: %d\n", var3);

// var3 = var1++++var2; // Error

var3 = var1++ + +var2;
printf("New Value: %d\n", var3);

var3 = var1++ + ++var2;
printf("New Value: %d\n", var3);

// var3 = var1+++++var2; Error

var3 = var1++*++var2;
printf("New Value: %d\n", var3);
```

### BIT wise Operator:

In C Language we have 6 bit-wise operators. These operators perform operations on the bit not on byte.

`&`  : BIT wise AND

A table to understand the same:

```
A   |   B   |   A&B |
----+-------+-------+
0   |   0   |   0   |
0   |   1   |   0   |
1   |   0   |   0   |
1   |   1   |   1   |
```

Example:
```
#include<stdio.h>

void main()
{
    int A = 0, B = 0, C;

    printf("A : %d B: %d\n", A, B);
    C = A & B;
    printf("Output of A&B : %d.\n", C);
    
    A = 12; B = 0;
    C = A & B;
    printf("A : %d B: %d\n", A, B);
    printf("Output of A&B : %d.\n", C);

    A = 0; B = 34;
    C = A & B;
    printf("A : %d B: %d\n", A, B);
    printf("Output of A&B : %d.\n", C);

    A = 5; B = 9;
    C = A & B;
    printf("A : %d B: %d\n", A, B);
    printf("Output of A&B : %d.\n", C);
}
```

Output:
```
[vipikuma@kvy c_classes]$ gcc operator.c ; ./a.out 
A : 0 B: 0
Output of A&B : 0.
A : 12 B: 0
Output of A&B : 0.
A : 0 B: 34
Output of A&B : 0.
A : 5 B: 9
Output of A&B : 1.
```

`|`  : BIT wise OR

A table to understand the same:

```
A   |   B   |   A|B |
----+-------+-------+
0   |   0   |   0   |
0   |   1   |   1   |
1   |   0   |   1   |
1   |   1   |   1   |
```

Example:
```
#include<stdio.h>

void main()
{
    int A = 0, B = 0, C;

    printf("A : %d B: %d\n", A, B);
    C = A | B;
    printf("Output of A|B : %d.\n", C);
    
    A = 12; B = 0;
    C = A | B;
    printf("A : %d B: %d\n", A, B);
    printf("Output of A|B : %d.\n", C);

    A = 0; B = 34;
    C = A | B;
    printf("A : %d B: %d\n", A, B);
    printf("Output of A|B : %d.\n", C);

    A = 5; B = 9;
    C = A | B;
    printf("A : %d B: %d\n", A, B);
    printf("Output of A|B : %d.\n", C);
}
```

Output:
```
[vipikuma@kvy c_classes]$ gcc operator.c ; ./a.out 
A : 0 B: 0
Output of A|B : 0.
A : 12 B: 0
Output of A|B : 12.
A : 0 B: 34
Output of A|B : 34.
A : 5 B: 9
Output of A|B : 13.
```

`^`  : BIT wise XOR

A table to understand the same:

```
A   |   B   |   A^B |
----+-------+-------+
0   |   0   |   0   |
0   |   1   |   1   |
1   |   0   |   1   |
1   |   1   |   0   |
```

Example:
```
#include<stdio.h>

void main()
{
    int A = 0, B = 0, C;

    printf("A : %d B: %d\n", A, B);
    C = A ^ B;
    printf("Output of A^B : %d.\n", C);
    
    A = 12; B = 0;
    C = A ^ B;
    printf("A : %d B: %d\n", A, B);
    printf("Output of A^B : %d.\n", C);

    A = 0; B = 34;
    C = A ^ B;
    printf("A : %d B: %d\n", A, B);
    printf("Output of A^B : %d.\n", C);

    A = 5; B = 9;
    C = A ^ B;
    printf("A : %d B: %d\n", A, B);
    printf("Output of A^B : %d.\n", C);
}
```

Output:
```
[vipikuma@kvy c_classes]$ gcc operator.c ; ./a.out 
A : 0 B: 0
Output of A^B : 0.
A : 12 B: 0
Output of A^B : 12.
A : 0 B: 34
Output of A^B : 34.
A : 5 B: 9
Output of A^B : 12.
```

`~`  : BIT wise ONE's Complement ( Reverse the binary )

A table to understand the same:

```
A   |   ~A  |
----+-------+
0   |   0   |
1   |   1   |
```

Example:

```
#include<stdio.h>

void main()
{
    int A = 4, B;

    printf("A : %d\n", A);
    // 4 binary is   0000000000000100
    B = ~ A;
    // Now B will be 1111111111111011 which is -5
    printf("Output of ~ A : %d.\n", B);
}
```
Website used to check binary conversion: https://www.rapidtables.com/convert/number/binary-to-decimal.html?x=0000000000000100

Output:
```
[vipikuma@kvy c_classes]$ gcc operator.c ; ./a.out 
A : 4
Output of ~ A : -5.
```

`<<` : BIT wise Left Shift

Example:
```
A = 5 // 0000000000000101
A<<4  // 0000000001010000
```

`>>` : BIT wise Right Shift
Example:
```
A = 5 // 0000000000000101
A>>2  // 1100000000000001
```

### Sizeof() operator

This operator tell us the size of a data type.
We will discuss it later while we may program on operator.

`sizeof(var_name)`

### `,` Operator It is used to separate expressions

Example:

```
int A, B, C;
```


### Type Casting Operators

When a type of data is converted to another type then this process is known as type casting. It may be of two type.

### Implicit conversion

These are the type of conversion auto performed.

Example:

```
float r;
int s = 9;
r = s;
printf("%f\n", r);
```

Output:
```
[vipikuma@kvy c_classes]$ gcc operator.c ; ./a.out 
9.000000
```

### Explicit conversion

These are the type of conversion which developers do manually by using the operator.

Example:
```
int A = 12;
float R;
char C = 'T';

R = (float)A;
printf("%f\n", R);
```
Output:
```
[vipikuma@kvy c_classes]$ gcc operator.c ; ./a.out 
12.000000
```
