---
title: A simple program on while loop
categories: c
tags: [c]
---

//let's play a quiz.
//I will give you code and you have to judge the output.

```
#include<stdio.h>;
void main()
{
int x=1;

while ( x <= 10) // this is our condiction now x is 1 so it's true
// so loop will execute it's statement
{
printf("MY NAME IS VIPINn");
x = x+1; // here x become 2
} // after closing of loop block condiction is recheck it will again true
// because x was 2
// same process will go on untill the condiction become falce.

printf("LOOP HAS OVER"); // when x become 11 then condiction become false
// and then other statements will run.
}
```

can you guess if yes than very good else don't worry I will tell you.

OUTPUT :

```
MY NAME IS VIPIN
MY NAME IS VIPIN
MY NAME IS VIPIN
MY NAME IS VIPIN
MY NAME IS VIPIN
MY NAME IS VIPIN
MY NAME IS VIPIN
MY NAME IS VIPIN
MY NAME IS VIPIN
MY NAME IS VIPIN
LOOP HAS OVER
```
you see it print MY NAME IS VIPIN 10 times.
