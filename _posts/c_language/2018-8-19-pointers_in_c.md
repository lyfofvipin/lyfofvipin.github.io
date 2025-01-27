---
title: Pointers In C
categories: c
tags: [c]
---

### Pointers in C
1. pointer is a user define data type.

2. A pointer variable stores address of another variable or NULL because pointer stores address,
of another variable so that with the help of pointer variable we can process the variable.

3. Run time memory allocation scheme can be applied only with pointers in c.

4. As we know in c language we ca no access variable of a function into another function but this can
be possible with help of pointers.

5. To create a pointer we can use `*` ( Re-direction operator )

syntax ::

`DATATYPE     *ptr_name;`

e.g.

```
   int           *p;
   char          *q;
   float         *r;
```

The Data type of pointer specify that a pointer can store address of a particular data type variable.

using pointer with different datatype :

```
int A = 12;        char B = 'X';       float C = 3.14;       double D = 21.22;
int *P;            char *Q;            float *R;             double *S;
P = &A;            Q = &amp;B;         R = &amp;C;           S = &amp;D;
```

-- `&` operator is known as "address of" operator.

size of pointer :

pointer memory size is size of integer. because a pointer stores memory address, and memory address,
is always integer.


```
int A;             char B;      float C;       double D ;
2 byte             1 byte       4 byte         8 byte

int *P;            char *Q;     float *R;      double *S;
2 byte             2 byte       2 byte         2 byte
```

### Let's understand pointer with help of some examples :-
1.
<img class="alignnone size-full wp-image-633" src="https://vipin711.files.wordpress.com/2019/09/186ab-screenshot-from-2018-08-11-22-30-14-e1534355054405.png" alt="Example" width="998" height="507" />

2.
<img class="alignnone size-full wp-image-634" src="https://vipin711.files.wordpress.com/2019/09/f2734-screenshot-from-2018-08-12-20-08-45-e1534355134732.png" alt="Example" width="857" height="555" />

3.
<img class="alignnone size-full wp-image-635" src="https://vipin711.files.wordpress.com/2019/09/1694d-screenshot-from-2018-08-13-12-52-06-e1534355199840.png" alt="Example" width="998" height="532" />

Hope you will got pointers.

### Let's solve some examples :) :-

`With simple asthmatics, strings, array an`


### Pointers with simple asthmatics :-

#### *1. A simple multiply program :-*

```
#include<stdio.h>


int main()
{
  
  `

    int *q;
    int *r;

    B = 20;

    p = &A;
  
    q = &B;
    r = &C;

  
    printf("Multiply of A and B is %d.",*r);

    return 0;
}
```
Output:

`Multiply of A and B is 200. `

2. A program to calculate Simple Interest :-

This programme will ask you the Principle, Rate and Time and give you the simple interest,
but we use Pointers here.

```
#include<stdio.h>

int main()
{
    float P ;
    float R ;
    float T ;
    float S;

    float *p;
    float *q;
    float *r;
    float *SI;

    p =  &P;
    q =  &R;
    r =  &T;
    SI = &S;

    printf("Enter Principle : ");
    scanf("%f",p);   // Because `p` has address of `P`, // So we can write `p` instead of `&P`. 
    printf("Enter Rate : "); 
    scanf("%f",q); 
    printf("Enter Time : "); 
    scanf("%f",r); 
    *SI = (*p * *q * *r)/100; // or *SI = (*p**q**r)/100; 
    printf("Simple Interest is %.2f%%.",*SI); 
    return 0; 
} 
```

#### *Output:-*

```
Enter Principle : 10000
Enter Rate : 2.4
Enter Time : 1.5
Simple Interest is 360.00%. 
```

### Pointers with functions :-

Now we will use pointer with functions.

#### *3. A simple sum program using pointer and function :-*

### Here in this problem we will create a function that will store sum of x and y in sum using function.

```
#include<stdio.h>
int main()
{
    int x = 90;
    int y = 67;
    int sum;

    void sum_of_2_number( int * , int * , int * );
    // In above statement we are telling that we give Address of variable as argument,
    // And receive them in pointers.

    sum_of_2_number( &x, &y, &sum );
    // Giving Address of variables.

    printf("Sum of x and y is %d.",sum);

    return 0;
}

void sum_of_2_number( int *a , int *b , int *c )

// Here we are reserving addresses in a, b and c.

{
    *c = *a + *b;
}
```

### Output:-

`Sum of x and y is 157. `

#### *4. A function that can swap value of 2 integer variables :-*

### Here in this problem in which we will have to swap values of 2 integers but, with help of functions.

This can only be done with help of pointers only.

```
int main()
{
    int x = 90;
    int y = 67;

    void swap( int * , int * );

    printf("Values of x and y before calling function : nx = %d y = %d n",x,y);

    swap( &x, &y );

    printf("Values of x and y after calling function : nx = %d y = %d n",x,y);

    return 0;
}

void swap( int *a , int *b )
{
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}
```

Output:

```
Values of x and y before calling function :
x = 90 y = 67
Values of x and y after calling function :
x = 67 y = 90
```

#### *5. A function to calculate Area of a circle :-*
### Here we program A function who calculate area of a circle using pointers.

```
int main()
{
    float r;
    float area;

    void Area_of_circle( float * , float * );

    printf("Enter Radius of Circle : ");
    scanf("%f",&r);

    Area_of_circle( &r, &area );

    printf("Area of circle is %.3f.",area);

    return 0;
}

void Area_of_circle( float *a , float *b )
{
    *b = 3.14* *a * *a;
}
```

Output:

```
Enter Radius of Circle : 9
Area of circle is 254.340. 
```

#### *6. A function to count number of digit in integer :-*

### Our this function will take a integer and count how many digits it has.

```
int main()
{
    int n, count = 0;

    void Count_digit( int * , int * );

    printf("Enter a integer : ");
    scanf("%d",&n);

    Count_digit( &n , &amp;count );

    printf("Number of digit in a integer are %d.",count);

    return 0;
}

void Count_digit( int *a , int *b )
{
    for( ; *a != 0 ; *a = *a/10 )
        *b = *b + 1;
}
```

### Output:-

`Enter a integer : 999999
Number of digit in a Integer are 6. `

### POINTERS WITH ARRAY :-

### When we create an array, Then the array name declared as pointer variables,

that contain address of first element. This pointer variable is constant in nature means we can,
not change it's value.

#### *Arithmetic with pointer :-*

##### >1. Addition an integer with pointer -

We can add only an integer to a pointer which return an address.

##### >2. Subtraction an integer with pointer -
We can subtract only an integer to a pointer which return an address.

` MULTIPLICATION, DIVISION AND REMAINDER OPERATION ARE NOT ALLOWED WITH POINTERS. `

##### >3. Subtraction of 2 pointers -

We can not add 2 pointer with each other but we can subtract 2 pointers which return,no of element between addresses.

##### >4. We can compare 2 pointers using relational operators -

#### *Let's use pointers to print arrays :-*

### 1. Here we print a array using pointer :

```
int main()
{
    int a[5] = {23,54,56,67,78};

    int *p , i;

    p = a; // or p = &a[0];

    for ( i = 0 ; i < 5 ; i++ )
        printf("%d\n",*(p+i));

    return 0;
}

//or

int main()
{
    int a[5] = {23,54,56,67,78};

    int i;

    for ( i = 0 ; i < 5 ; i++ )
        printf("%dn",*(a+i));

    return 0;
}
// or

int main()
{
    int a[5] = {23,54,56,67,78};

    int *p;

    for ( p = a ; p < a+5 ; p++ )
        printf("%dn",*p);

    return 0;
}

```

Output:-
`
23
54
56
67
78
`

### 2. Here we print a array in reverse using pointer :

```
int main()
{
    int a[5] = {23,54,56,67,78};

    int *p;

    for ( p = a+4 ; p >;= a ; p-- )
        printf("%dn",*p);

    return 0;
}

//or

int main()
{
    int a[5] = {23,54,56,67,78};

    int *p , i;

    for ( i = 4, p = a ; i >;= 0 ; i-- )
        printf("%dn",*(p+i));

    return 0;
}
// or

int main()
{
    int a[5] = {23,54,56,67,78};

    int i;

    for ( i = 4 ; i >;= 0 ; i-- )
        printf("%dn",*(a+i));

    return 0;
}
```

### Output:-

`
78
67
56
54
23
`

### Pointers with String :

### 1. printing an string with help of pointers

```
int main()
{
    char a[] = "My name is vipin.";
    char *p;

    for ( p = a ; *p != 0 ; p++ )
        printf("%c",*p);

    return 0;
```

Output:

` vip`
