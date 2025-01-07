---
title: FUNCTION WITH STRINGS IN C
categories: c
tags: [c]
---

<h2>Functions with Strings :-</h2>
We have a studied about inbuilt function of strings now we will create our own functions or,
we will learn function with strings.
<h4>1. Copy function:-</h4>
<code>copy( A, B )</code>
Our this function will copy A into B it work as <code>strcpy()</code> but It is coded by you :).

e.g.

```
#include<stdio.h>
int main()
{
    char A[] = "Vipin is my name";
    char B[20] = "Empty :)";

    void copy( char [] , char [] );
    printf("Values before changes : nn");
    puts(A);
    puts(B);

    copy(A,B);

    printf("nValues after changes : nn");
    puts(A);
    puts(B);

    return 0;
}
void copy( char x[] , char y[])
{
    int i;

    for( i = 0 ; x[i] != 0 ; i++ )
    // Here 0 condition represent NULL
    {
        y[i] = x[i];
    }
    y[i] = 0;
}
```

Output:-

```
Values before changes : 

Vipin is my name
Empty :)

Values after changes : 

Vipin is my name
Vipin is my name
```

<h4>2. Length function:-</h4>
<code>length( A )</code>
Our this function will accept a String and find it's length and return it.

e.g.

```
#include<stdio.h>
int main()
{
    char A[] = "Vipin is my name";
    int length_of_String;

    int length( char [] );
    
    length_of_String = length( A );

    printf("Length of A is : %d.n",length_of_String);

    return 0;
}
int length( char x[] )
{
    int i;

    for( i = 0 ; x[i] != 0 ; i++ );
    // This ';' will show that we are not writting anything in for loop     
    return --i;
}
```

Output:-

```
Length of A is : 15.
```

<h4>3. Counting vowels function:-</h4>
<code>count_vowels( A )</code>
Our this function will count vowels in a string.

e.g.

```
#include<stdio.h>
int main()
{
    char A[] = "Vipin is my name";
    int number_or_vowels;

    int count_vowel( char [] );
    
    number_or_vowels = count_vowel( A );

    printf("Numbers of vowels in A is : %d.n",number_or_vowels);

    return 0;
}
int count_vowel( char x[] )
{
    int i;
    int count;

    for( i = 0, count = 0 ; x[i] != 0 ; i++ )
    // Here 0 condition repentant NULL
    {
        if ( x[i] == 'a' || x[i] == 'e' || x[i] == 'i' || x[i] == 'o' || x[i] == 'u' )
            count++;
    }
    
    return count;
}
```

Output:-

```
Numbers of vowels in A is : 5.
```

<h4>4. Concatenating Strings function:-</h4>
<code>concatenate_strings( A , B )</code>
Our this function will concatenate A and B mean It append B with A,
It is same as <code>strcat()</code> but here we code this function.

e.g.

```
#include<stdio.h>
int main()
{
    char A[50] = "my name is ";
    char B[]   = " Kumar Vipin Yadav";
 
    void concatenate_strings( char [] , char[] );
    
    printf("Value of A before calling our function : nn");
    puts( A );

    concatenate_strings( A , B );

    printf("Value of A after calling our function : nn");
    puts( A );

    return 0;
}
void concatenate_strings( char x[] ,char y[] )
{
    int i;
    int len;

    for( i = 0 ; x[i] != 0 ; i++ );

    len = --i;

    for ( i = 0 ; y[i] != 0 ; i++ )
        x[len+i] = y[i];

    x[len+i] = 0;
    // here we add NULL in last of array A
}
```

Output:-

```
Value of A before calling our function : 

my name is 
Value of A after calling our function : 

my name is Kumar Vipin Yadav
```

<h4>5. Conciliating Words function:-</h4>
<code>counting_words( A , B )</code>
Our this function will take a string and count that how many words It has.

e.g.

```
#include<stdio.h>
int main()
{
    char A[50] = "my name is Vipin";
    int words;
 
    int counting_words( char[] );
    
    words = counting_words( A );

    printf("Number of word in our String is %d.n",words );

    return 0;
}
int counting_words( char y[] )
{
    int i;
    int count;

    for ( i = 0, count = 0 ; y[i] != 0 ; i++ )
    {
        if ( y[i] == ' ' )
            count++;
    }
    return ++count;
}
```

Output:-

```
Number of word in our String is 4.
```

<h4>6. Counting alphabets, spaces, digits and symbols function:-</h4>
<code>print_alphabets_spaces_digits_symbols( A )</code>
Our this function will take a string and count that how many alphabets It has,
how many digits it has, how many symbols it has and how many spaces it has
and then print all information.
WE CAN EVEN RETURN ABOVE INFORMATION USING A ARRAY, IT'S YOUR HOME TASK HAVE A FUN  :)

e.g.

```
#include<stdio.h>
int main()
{
    char A[50] = "my name is Vipin";
 
    void print_alphabets_spaces_digits_symbols( char [] );
    
    print_alphabets_spaces_digits_symbols( A );

    return 0;
}
void print_alphabets_spaces_digits_symbols( char y[] )
{
    int i;
    int space,alphabets,digit,symbols;

    space = 0 , alphabets = 0 , digit = 0 , symbols = 0 ;

    for ( i = 0 ; y[i] != 0 ; i++ )
    {
        if ( y[i] == ' ' )
            space++;
        else if ( y[i] >;= 'a' &&amp; y[i] <= 'z' || y[i] &gt;= 'A' &amp;&amp; y[i] &lt;= 'Z' )             alphabets++;         else if ( y[i] &gt;= '0' &amp;&amp; y[i] &lt;= '9' )
            digit++;
        
        else
            symbols++;
        
    }
    printf("Alphabets = %d, Digit = %d, Space = %d and Symbols = %d.",alphabets,digit,space,symbols);
}
```

Output:-

```
Alphabets = 13, Digit = 0, Space = 3 and Symbols = 0.
```

<h4>7. Converting to lower case function:-</h4>
<code>lower( A )</code>
Our this function will take a string and convert it into lower case.

e.g.

```
#include<stdio.h>
int main()
{
    char A[50] = "My Name Is VIPIN";
 
    void lower( char [] );
    
    lower( A );

    puts( A );

    return 0;
}
void lower( char y[] )
{
    int i;

    for ( i = 0 ; y[i] != 0 ; i++ )
    {
        if ( y[i] >;= 'a' &&amp; y[i] <= 'z' || y[i] == ' ')
            continue;
        else
            y[i] = y[i] + 32 ;
            // because ASCII value of upper case alphabets are 32 less then uppercase.
    }
}
```

Output:-

```
my name is vipin
```

<h4>8. Converting to upper case function:-</h4>
<code>upper( A )</code>
Our this function will take a string and convert it into upper case.

e.g.

```
#include<stdio.h>
int main()
{
    char A[50] = "My Name Is VIPIN";
 
    void upper( char [] );
    
    upper( A );

    puts( A );

    return 0;
}
void upper( char y[] )
{
    int i;

    for ( i = 0 ; y[i] != 0 ; i++ )
    {
        if ( y[i] >;= 'A' &&amp; y[i] <= 'Z' || y[i] == ' ')
            continue;
        else
            y[i] = y[i] - 32 ;
            // because ASCII value of lower case alphabets are 32 greater then uppercase.
    }
}
```

Output:-

```
MY NAME IS VIPIN
```

<h4>9. Comparing function:-</h4>
<code>compare( A, B )</code>
Our this function will take 2 string and compare each other.
and return +ve value if A is greater, -ve value if B is greater and 0 if both are equal.

e.g.

```
#include<stdio.h>
int main()
{
    char A[] = "My Name Is VIPIN";
    char B[] = "My Name Is VIPIN";
    int res;
    int compare( char [] , char [] );
    
    res = compare( A , B );

    if ( res == 0 )
        printf("Both strings are equal.");
    else if ( res >; 0 )
        printf("Strings A is greater.");
    else
        printf("Strings B is greater.");

    return 0;
}
int compare( char x[] , char y[])
{
    int i;

    for ( i = 0 ; x[i] != 0 || y[i] != 0 ; i++ )
    {
        if ( x[i] != y[i] )
            return x[i]-y[i];
    }
    return 0;
}
```

Output:-

```
Both strings are equal.
```

<h4>10. reversing function in another string:-</h4>
<code>revers_in_another( A, B )</code>
Our this function will take 2 string and revers A in B.

e.g.

```
#include<stdio.h>
int main()
{
    char A[] = "My Name Is VIPIN";
    char B[50];

    void revers_in_another( char [] , char [] );
    
    revers_in_another( A , B );

    puts(A);

    puts(B);

    return 0;
}
void revers_in_another( char x[] , char y[])
{
    int i,j;

    for ( i = 0 ; x[i] != 0 ; i++ );
     
    i -= 1; // because we are not taking NULL which was in last

    for ( j = 0 ; j <= i ; j++ )
        y[j] = x[i-j];

    y[j] = 0;

}
```

Output:-

```
My Name Is VIPIN
NIPIV sI emaN yM
```

<h4>11. reversing string:-</h4>
<code>revers_in_itself( A )</code>
Our this function will take a string and revers it within it.

e.g.

```
#include<stdio.h>
int main()
{
    char A[] = "My Name Is VIPIN";
    char B[50];

    void revers_in_itself( char [] );
    
    printf("A before calling function. nn");
    puts(A);

    revers_in_itself( A );

    printf("A after calling function. nn");
    puts(A);
 
    return 0;
}
void revers_in_itself( char x[])
{
    int i,j,temp;

    for ( i = 0 ; x[i] != 0 ; i++ );

    i -= 1;

    for( j = 0 ; j <= i ; j++, i-- )
    {
        temp = x[j];
        x[j] = x[i];
        x[i] = temp;
    }

}
```

Output:-

```
A before calling function. 

My Name Is VIPIN
A after calling function. 

NIPIV sI emaN yM    
```

<h4>12. palindromes function :-</h4>
<code>palindrome( A )</code>
Our this function will take a string and return 1 if they are palandrom and,
return 0 if they are not palindrome.

e.g.

```
#include<stdio.h>
int main()
{
    char A[] = "VIPIN";
    int res;

    int palindrome( char [] );

    res = palindrome( A );

    if ( res == 1 )
        printf("Yes String is palindrome.n");
    else
        printf("No String is not palindrome.n");
 
    return 0;
}
int palindrome( char x[])
{
    int i,j;

    for ( i = 0 ; x[i] != 0 ; i++ );

    i -= 1;

    for( j = 0 ; j <= i ; j++, i-- )
    {
        if ( x[i] != x[j] )
            return 0;
    }

    return 1;

}
```

Output:-

```
No String is not palindrome.
```

<h4>12. abbreviation function :-</h4>
<code>abbreviation( A )</code>
Our this function will take a string and print it's abbrivation.

e.g.

```
#include<stdio.h>
int main()
{
    char A[] = "Mohan Das Karam Chand Gandhi";

    void abbreviation( char [] );

    abbreviation( A );
 
    return 0;
}
void abbreviation( char x[] )
{
    int i,j;

    i = 0 , j = 0 ;
    do
    {
        if ( x[i] == ' ' )
        {
            printf("%c. ", x[j]);

            j = i+1;
        }
        
        i++;

    }while( x[i] != 0 );
    for ( ; x[j] != 0 ; j++ )
        printf("%c",x[j]);
}
```

Output :-

```
M. D. K. C. Gandhi
```

<h4>13. remove vowels function :-</h4>
<code>remove_vowels( A )</code>
Our this function will take a string and remove all vowels from it.

e.g.

```
#include<stdio.h>
int main()
{
    char A[] = "My Name Is Vipin";

    void remove_vowels( char [] );

    printf("A before calling functionn");
    puts(A);

    remove_vowels( A );
 
    printf("nA after calling functionn");
    puts(A);

    return 0;
}
void remove_vowels( char x[] )
{
    int i,j;

    for ( i = 0 ; x[i] != 0 ; i++ )
    {
        if( x[i] == 'a' || x[i] == 'e' || x[i] == 'i' || x[i] == 'o' || x[i] == 'u' )
        {
            for ( j = i ; x[j] != 0 ; j++ )
                x[j] = x[j+1];
            
            i--;
        }
    }
}
```

Output:-

```
A before calling function
My Name Is Vipin

A after calling function
My Nm Is Vpn
```

In our next blog we will read about pointers :) .