---
title: Printf Function and Escape Sequences In C Language
categories: c
tags: [c]
---

# Printf

Printf ( also known as print formatted text ) the Printf is an inbuilt function which accept a message from user and display it on the Standard output device which is the monitor this function this is declared in the stdio.h library file.

Example:

```
#include<stdio.h>

void main()
{
    printf("Hello World!");
    printf("Hello Students!");
}
```

Output:
```
[vipikuma@kvy c_classes]$ gcc hello_world.c ; ./a.out
Hello World!Hello Students![vipikuma@kvy c_classes]$
```

# Escape Sequences

In C language escape sequence is a character. It has special effect on the output the escape sequence is a combination of two letters where the first character has to be a back slash ( \ ) and second letter can be an alphabet or a symbol. 


## Printing Using Escape Sequence In C Lang

A escape sequence is used to show some affect on the console output.
Following are most commonly used Escape Sequences:

```
\n   line feed or newline
\b   backspace
\a   alert or bell
\f   form feed
\r   carriage return
\t   horizontal tab
\v   vertical tab
\\   backslash
\'   single quote  (valid escape only within rune literals)
\"   double quote  (valid escape only within string literals)
```

#### *New Line* `\n`
This character is used to redirect output in a new line.


#### *backspace* `\b`

This sequence can remove the characters from the console.
* Adding the same as first element of string will not impact anything
* Adding the same as last element of string will not impact anything
* You can not remove the last element of the string with the same


### Alert or Bell `\a`

This sequence will generate a bell sound once per execution adding the same multiple time will not going to create multiple voices.


### Vertical Tag Character `\v`

Vertical Sequence redirects the output in the line but the output in next line starts from where it displayed the string in the first line.


### Horizontal Tab `\t`

Horizontal tab sequence will add a tab in the console output.


### Carriage Return `\r`

Anything written before this sequence will not be visible on the console.


### Form Feed `\f`

This will add a spacial type of pointer that represents end of a page.
We can not see the same in console.


### backslash `\`, single quote `'`, double quote `"`

backslash `\\` sequence is used to display `\` in the console.
single quote `\'` sequence is used to display `'` in the console ( Only supported in rune )
double quote `\"` sequence is used to display `"` in the console ( Only supported in String )

Example:

```
#include<stdio.h>

void main(){
    printf("Hello This is\n line feed or newline. \n");
    printf("Hello This is\b backspace. \n");
    printf("Hello This is\a alert or bell. \n");
    printf("Hello This is\f form feed. \n");
    printf("Hello This is\r carriage return. \n");
    printf("Hello This is\t horizontal tab. \n");
    printf("Hello This is\v vertical tab. \n");
    printf("Hello This is\\ backslash. \n");
    printf("Hello This is\' single quote. \n");
    printf("Hello This is\" double quote. \n");
}
```

Output:
```
Hello This is
 line feed or newline. 
Hello This i backspace. 
Hello This is alert or bell. 
Hello This is
              form feed. 
 carriage return. 
Hello This is	 horizontal tab. 
Hello This is
              vertical tab. 
Hello This is\ backslash. 
Hello This is' single quote. 
Hello This is" double quote. 
```
