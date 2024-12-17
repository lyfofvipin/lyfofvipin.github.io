---
title: Some Programs To Understand Operators
categories: c
tags: [c]
---


# To Know More On The Same Checkout The Theory

[https://lyfofvipin.github.io/operators_in_c](https://lyfofvipin.github.io/operators_in_c)


## Adding 2 Number

```
#include<stdio.h>

void main()
{
    int A, B, C;

    A = 45;
    B = 45;

    C = A + B;

    printf("%d\n", A + B);

    printf("%d\n", C);
    
}
```

Output:
```
gcc operator.c ; ./a.out 
90
90
```

## Subtracting 2 Number


```
#include<stdio.h>

void main()
{
    int A, B;

    A = 45;
    B = 55;

    printf("%d\n", A - B);

}
```
Output:
```
gcc operator.c ; ./a.out 
-10
```

## Multiply 3 Numbers

```
#include<stdio.h>

void main()
{
    int A, B, C;

    A = 2;
    B = 5;
    C = 9;

    printf("%d\n", A * B * C);

}
```

Output:
```
gcc operator.c ; ./a.out 
90
```

## Add and Multiply Together

```
#include<stdio.h>

void main()
{
    int A, B, C, D;

    A = 2;
    B = 5;
    C = 9;
    D = 3;

    printf("%d\n", A * B * C - D);

}
```
Output:
```
gcc operator.c ; ./a.out 
87
```

*`Note: Here we are getting 87 as C compile are applying the BODMAS Rule here.`*

## `>=` Operator

```
#include<stdio.h>

void main()
{
    int A, B;

    A = 45;
    B = 55;

    printf("%d\n", A >= B);

}
```

Output:
```
gcc operator.c ; ./a.out 
0
```

## `<=` Operator

```
#include<stdio.h>

void main()
{
    int A, B;

    A = 45;
    B = 55;

    printf("%d\n", A <= B);

}
```

Output:
```
gcc operator.c ; ./a.out 
1
```

## A Program To Find Simple Interest

```
#include<stdio.h>

void main()
{
    float principal, interest_rate, time_duration, simple_interest;

    printf("Enter principal Amount: ");
    scanf("%f", &principal);

    printf("Enter interest rate: ");
    scanf("%f", &interest_rate);

    printf("Enter time duration: ");
    scanf("%f", &time_duration);

    simple_interest = ( principal * interest_rate * time_duration ) / 100;

    printf("Your Simple Interest is: %f.\n", simple_interest);
}
```

Output:
```
gcc operator.c ; ./a.out 
Enter principal Amount: 100
Enter interest rate: 7
Enter time duration: 1
Your Simple Interest is: 7.000000.
```
