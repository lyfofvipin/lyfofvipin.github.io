---
title: Inbuilt Functions In C
categories: c
tags: [c]
---

<h2>Inbuilt function for String Processing :-</h2>
<code> NOTE : All Inbuilt Function of String need string.h library.</code>
<h4>1. strcpy(Target_String , Source_String ) :-</h4>
This function will take 2 string as argument one is Target_String and another is Source_String,
this function will copy Source_String into Target_String.
e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
	char A[15] = "Vipin Yadav";
	char B[15] = "- - - - -";

	printf("Value of A and B before calling function. nn");
	puts(A);
	puts(B);

	strcpy(B,A);
  // It will copy A in B as you can see in Output.

	printf("nValue of A and B after calling function. nn");
	puts(A);
	puts(B);

  return 0;
}
```

Output:-

```
Value of A and B before calling function. 

Vipin Yadav
- - - - -

Value of A and B after calling function. 

Vipin Yadav
Vipin Yadav

```

<h4>2. strncpy(Target_String , Source_String ) :-</h4>
This function will take 2 string as argument one is Target_String and another is Source_String,
just like <code>strcpy()</code> this function will copy <code>n</code> letters from Source_String into Target_String,
and it do not affect reaming part of string.
e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
	char A[15] = "Vipin Yadav";
	char B[15] = "- - - - -";

	printf("Value of A and B before calling function. nn");
	puts(A);
	puts(B);

	strncpy(B,A,5);
  // It will copy A in B but upto n characters and don't disturb other values of B.

	printf("nValue of A and B after calling function. nn");
	puts(A);
	puts(B);

  return 0;
}
```

Output:-

```
Value of A and B before calling function. 

Vipin Yadav
- - - - -

Value of A and B after calling function. 

Vipin Yadav
Vipin - -
```

<h4>3. strcat(Target_String , Source_String ) :-</h4>
This function is used to concatenate Source_String just after Target_String or we can say to append Source_String with Target_String.

e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
	char A[20] = " Vipin Yadav";
	char B[20] = "-";

	printf("Value of A and B before calling function. nn");
	puts(A);
	puts(B);

	strcat(B,A);
	// It will append B with A

	printf("nValue of A and B after calling function. nn");
	puts(A);
	puts(B);

  return 0;
}
```

Output:-

```
Value of A and B before calling function. 

 Vipin Yadav
-

Value of A and B after calling function. 

 Vipin Yadav
- Vipin Yadav
```

<h4>4. strncat(Target_String , Source_String ) :-</h4>
This function is used to concatenate Source_String just after Target_String or we can say to append Source_String, with Target_String but here we can limit that how much letters you want to append.

e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
	char A[20] = " Vipin Yadav";
	char B[20] = "-";

	printf("Value of A and B before calling function. nn");
	puts(A);
	puts(B);

	strncat(B,A,5);
	// It will append B with A upto 5 le tters

	printf("nValue of A and B after calling function. nn");
	puts(A);
	puts(B);

  return 0;
}
```

Output:-

```
Value of A and B before calling function. 

 Vipin Yadav
-

Value of A and B after calling function. 

 Vipin Yadav
- Vipi    ( Don't mess with ' ' before V :;)
```

<h4>5. strcmp( First_String , Second_String ) :-</h4>
This function will take 2 Stings as argument and return a<code>>;0</code> value if First_String is,
greater( not on the basic of length :) ) and return <code><0</code> if Second_String is greater and
return <code>0</code> If both are Equal.

<code> NOTE :  strcmp() IS CASE SENSITIVE </code>
e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
	char A[20] = "aaaa";
	char B[20] = "AAAA";
	int x;

	x = strcmp(A,B);

	if ( x == 0 )
		printf("Both Stings are Equal.");
	else if ( x == 1 )
		printf("First Stings is greater.");
	else // mean strcmp() return -1
		printf("Second Stings is greater.");

  return 0;
}
```

Output:-

```
Second Stings is greater.
```

<h4>5. stricmp( First_String , Second_String ) or strcmpi( First_String , Second_String ) :-</h4>
This function will take 2 Stings as argument and return a<code>>;0</code> value if First_String is,
greater( not on the basic of length :) ) and return <code><0</code> if Second_String is greater and
return <code>0</code> If both are Equal.

<code> NOTE :  stricmp() or strcmpi() IS NOT CASE SENSITIVE
AND THIS FUNCTION IS NOT FROM STANDERD LIBRARY OF C </code>            <code>LANGUAGE   SO IT WILL NOT WORK IN SOME
COMPILERS LIKE IN LINUX/UNIX .</code>
e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
    char A[20] = "aaaa";
    char B[20] = "AAAA";

    int x;

    x = strcmpi();

    if ( x == 0 )
        printf("Both Stings are Equal.");
    else if ( x == 1 )
        printf("First Stings is greater.");
    else // mean strcmp() return -1
        printf("Second Stings is greater.");
    
    return 0;
}
```

Output:-

```
Both Stings are Equal.
```

<h4>6. strlen( String ) :-</h4>
This function will take a String as argument and return it's length.

e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
    char A[20] = "aaaa";

    int x;

    x = strlen(A);
    
    printf("Length of A is %d.",x);

    return 0;
}
```

Output:-

```
Length of A is 4.
```

<h4>7. strlwr( String ) :-</h4>
This function of C language will convert all alphabets of String in lowercase.

<code> NOTE: THIS FUNCTION IS NOT FROM STANDARD LIBRARY OF C LANGUAGE SO IT WILL NOT WORK IN SOME COMPILERS LIKE IN LINUX/UNIX .</code>

e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
    char A[20] = "AAAA";

    strlwr(A);
    
    puts(A);

    return 0;
}
```

Output:-

```
aaaa
```

<h4>8. strupr( String ) :-</h4>
This function of C language will convet all alphabets of String in uppercase.

<code> NOTE: THIS FUNCTION IS NOT FROM STANDARD LIBRARY OF C LANGUAGE SO IT WILL NOT WORK IN SOME
COMPILERS LIKE IN LINUX/UNIX .</code>
e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
    char A[20] = "aaaa";

    strupr(A);
    
    puts(A);

    return 0;
}
```

Output:-

```
AAAA
```

<h4>9. strset( String , character ) :-</h4>
This function will change hole string with a character you give,
means It take 2 argument a string and a character and replace hole string with that character.

e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
    char A[20] = "Vipin";
    char C = 'V';

    strset(A,C);
    
    puts(A);

    return 0;
}
```

Output:-

```
VVVVV
```

<h4>10. strnset( String , character , n ) :-</h4>
This function will change hole string with a character you give but upto a limit,
means It take 3 argument a string and a character and a integer and replace hole string with that character,
till n .

e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
    char A[20] = "Vipin";
    char C = 'V';

    strnset(A,C,3);
    
    puts(A);

    return 0;
}
```

Output:-

```
VVVin
```

<h4>11. strspm( String1 , String2 ) :-</h4>
This function will take 2 string as argument and return the number of characters
in the initial segment of String1 which consist only of characters from String2.

e.g.

```
#include<stdio.h>
#include<string.h>
int main()
{
    char A[] = "Vipin is my name";
    char C[] = "Vipin";
    int x;

    x = strspn(A,C);
    
    printf("String C matches In String A till %d.",x);

    return 0;
}
```

Output:-

```
String C matches In String A till 5.
```

One function is there name strstr()
we will learn it when we learn about pointers.