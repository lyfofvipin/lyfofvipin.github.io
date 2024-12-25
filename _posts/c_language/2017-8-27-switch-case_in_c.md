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


Examples:

Take a integer and show it's subsequent week day for example 1 = Monday, 2 = Tuesday and so on

```
#include<stdio.h>

void main(){
    
    int num;

    printf("Enter A Number: ");
    scanf("%d", &num);
    
    switch ( num ){
            
            case 1:{
                printf("Mon\n");
                break;
            }
            case 3:{
                printf("Wed\n");
                break;
            }
            case 2:{
                printf("Tue\n");
                break;
            }
            case 4:{
                printf("Thu\n");
                break;
            }
            case 5:{
                printf("Fri\n");
                break;
            }
            case 6:{
                printf("Sat\n");
                break;
            }
            case 7:{
                printf("Sun\n");
                break;
            }
            default:
                printf("Invalid Value");
        }
    
}
```

Output:

```
gcc switch.c ; ./a.out 
Enter A Number: 5
Fri
```

Take a character and show if it's vowel or consonant.

```
// Take a character from user and tell if it's a vowel.

#include<stdio.h>

void main(){
    
    char ch;

    printf("Enter A Character: ");
    scanf("%c", &ch);

    switch ( ch ){

        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            printf("Yes It is");
            break;
        default:
            printf("No It isn't");
    }
}
```

Output:
```
gcc switch.c ; ./a.out 
Enter A Character: t
No It isn't
```
