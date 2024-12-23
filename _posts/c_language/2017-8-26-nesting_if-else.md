---
title: Nesting IF-ELSE
categories: c
tags: [c]
---

OK i think now you all has a great knowledge of IF-ELSE so let us start our
next topic :

# NESTING OF IF-ELSE 

While we use IF-ELSE inside IF-ELSE this kind of
condition's called Nesting IF-ELSE.
let us understand with help of some example.

```
if (condition)
{
    statements....;
    if(condition)
    {

    }
}
else
{
    statements....;
    if(condition)
    {

    }
}
```

or



```
if (condition)
{
    statements....;
}
else if (condition)
{
    statements....;
}
else if (condition)
{

}
else
{

}
```

NOTE :--

If you enable to understand them than no need to worry you can easily learn
with help of some question.

in above examples you can see we use IF inside IF.
this is called Nesting Of IF-ELSE.
Now It's time for some Examples.


Examples:
```
#include<stdio.h>

void main(){

    int number;

    printf("Enter A number: ");
    scanf("%d", &number);

    if ( number < 0 ){
    
        printf("It's -ve\n");
    
    }
    else if ( number > 0 )
    {
        printf("It's +ve\n");
    
    } else if ( number == 0 ) {
    
        printf("It's 0\n");
    }
}
```

Output:
```
gcc if_else.c ; ./a.out 
Enter A number: 34
It's +ve
[vipikuma@kvy c_classes]$ gcc if_else.c ; ./a.out 
Enter A number: 0
It's 0
```
