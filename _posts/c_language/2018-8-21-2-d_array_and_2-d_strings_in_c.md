---
title: 2-D Array and 2-D strings in C
categories: c
tags: [c]
---

<h2> 2D Array and 2D strings </h2>
A 1-D array is a collection of several elements that contain only one row of elements. 

The  2-D array is a collection of rows and columns where each row contains smiler number of columns.

The requirement of 2-D array is removing the need of several 1-d array and it may be helpful to create 
mathematical data structure named as matrix.

<h4>Initializing 2-D Array </h4>

<h4> Taking input in a 2-D Array :- </h4>

```
int main()
{
    int a[3][2];
    int i,j;

    for( i = 0 ; i < 3 ; i++ )
    {
        for( j = 0 ; j < 2 ; j++ )
        {
            printf(Enter [%d][%d] element of array : ,i,j);
            scanf(%d,&a[i][j]);
        }
    }
}
```

Output:-

<pre>
Enter [0][0] element of array : 1
Enter [0][1] element of array : 2
Enter [1][0] element of array : 3
Enter [1][1] element of array : 4
Enter [2][0] element of array : 5
Enter [2][1] element of array : 6
</pre>

<h4> Taking input and printing a 2-D Array :- </h4>

```
int main()
{
    int a[3][2];
    int i,j;

    for( i = 0 ; i < 3 ; i++ )
    {
        for( j = 0 ; j < 2 ; j++ )
        {
            printf(Enter [%d][%d] element of array : ,i,j);
            scanf(%d,&a[i][j]);
        }
    }

    for( i = 0 ; i < 3 ; i++ )
    {
        for( j = 0 ; j < 2 ; j++ )
        {
            printf(%4d,a[i][j]);
        }
        printf(n);
    }
}
```

Output :-

<pre>
Enter [0][0] element of array : 1
Enter [0][1] element of array : 2
Enter [1][0] element of array : 3
Enter [1][1] element of array : 4
Enter [2][0] element of array : 5
Enter [2][1] element of array : 6
   1   2
   3   4
   5   6
</pre>

<h4>Adding, Subtraction and multiplication of matrix :- </h4>

```
int main()
{
    int a[3][3];
    int b[3][3];
    int c[3][3];

    void input( int [][3] );

    void output( int [][3] );

    void sum( int [][3] , int [][3] , int [][3] );

    void subtraction( int [][3] , int [][3] ,int [][3] );

    void multiply( int [][3] , int [][3], int [][3] );

    printf("Taking input in first Array : n");
    input(a);

    printf("Value in a : n");
    output(a);

    printf("Taking input in first Array : n");
    input(b);

    printf("\nValue in b : n");
    output(b);

    printf("Adding a and b :n");
    printf("\nvalue of sum of a and b:n");
    sum(a,b,c);
    output(c);

    printf("Subtracting a and b :n");
    printf("\nvalue of subtraction of a and b:n");
    subtraction(a,b,c);
    output(c);

    printf("multiplying a and b :n");
    printf("value of multiplication of a and b :n");
    multiply(a,b,c);
    output(c);
}

void input( int a[][3] )
{
    int i ,j;

    for( i = 0 ; i < 3 ; i++ )
    {
        for( j = 0 ; j < 3 ; j++ )
        {
            printf(Enter [%d][%d] element of array : ,i,j);
            scanf(%d,&a[i][j]);
        }
    }
}

void output( int a[][3] )
{
    int i,j;
    for( i = 0 ; i < 3 ; i++ )
    {
        for( j = 0 ; j < 3 ; j++ )
        {
            printf(%4d,a[i][j]);
        }
        printf(n);
    }
}

void sum( int x[][3] , int y[][3], int z[][3] )
{
    int i,j;

    for( i = 0 ; i < 3 ; i++ )
    {
        for( j = 0 ; j < 3 ; j++ )
        {
            z[i][j] =  x[i][j] + y[i][j];       
        }
    }
}

void subtraction( int x[][3] , int y[][3], int z[][3] )
{
    int i,j;

    for( i = 0 ; i < 3 ; i++ )
    {
        for( j = 0 ; j < 3 ; j++ )
        {
            z[i][j] =  x[i][j] - y[i][j];       
        }
    }
}

void multiply( int x[][3] , int y[][3], int z[][3] )
{
    int i,j,k;

    for( i = 0 ; i < 3 ; i++ )
    {
        for( j = 0 ; j < 3 ; j++ )
        {
            z[i][j] = 0 ;
            for( k = 0 ; k < 3 ; k++ )
                z[i][j] = z[i][j] + ( x[i][k] * y[k][j] );
        }
    }
}
```

Output:-

<pre>
Taking input in first Array : 
Enter [0][0] element of array : 1
Enter [0][1] element of array : 2
Enter [0][2] element of array : 3
Enter [1][0] element of array : 4
Enter [1][1] element of array : 5
Enter [1][2] element of array : 6
Enter [2][0] element of array : 7
Enter [2][1] element of array : 8
Enter [2][2] element of array : 9
Value in a : 
   1   2   3
   4   5   6
   7   8   9
Taking input in first Array : 
Enter [0][0] element of array : 1
Enter [0][1] element of array : 2
Enter [0][2] element of array : 3
Enter [1][0] element of array : 4
Enter [1][1] element of array : 5
Enter [1][2] element of array : 6
Enter [2][0] element of array : 7
Enter [2][1] element of array : 8
Enter [2][2] element of array : 9

Value in b : 
   1   2   3
   4   5   6
   7   8   9
Adding a and b :

value of sum of a and b:
   2   4   6
   8  10  12
  14  16  18
Subtracting a and b :

value of subtraction of a and b:
   0   0   0
   0   0   0
   0   0   0
multiplying a and b :
value of multiplication of a and b :
  30  36  42
  66  81  96
 102 126 150
</pre>

<h2>2-D String :</h2>

As we know , A 1-D string can hold only one string at a time. To store more then one string,
we can create 2-D string.

<h4> Initializing of 2-D string : </h4>

<img src="https://vipin711.files.wordpress.com/2019/09/0579f-screenshot-from-2018-08-19-00-21-19-e1534662205688.png" alt="screenshot-from-2018-08-19-00-21-19.png" width="953" height="526" class="alignnone size-full wp-image-651" />

<h4> Input with 2-D String : </h4>

In this program we will take input in 2-D String.

```
int main()
{
    char a[5][10];
    int i;

    for( i = 0 ; i < 5 ; i++ )
    {
        printf(Enter a string : );
        scanf(%s,a[i]);
    }
    return 0;
}
```

output:

<pre>
Enter a string : vipin
Enter a string : nitin
Enter a string : bhaskar
Enter a string : yatender
Enter a string : harchand
</pre>

<h4>Output with 2-D String : </h4>

In this program we will print a 2-D string after taking input.

```
int main()
{
    char a[5][10];
    int i;

    for( i = 0 ; i < 5 ; i++ )
    {
        printf(Enter a string : );
        scanf(%s,a[i]);
    }

    for( i = 0 ; i < 5 ; i++ )
    {
        puts(a[i]);
    }
    return 0;
}
```

<pre>
Enter a string : Vipin
Enter a string : Nitin     
Enter a string : Bhaskar
Enter a string : Yatender
Enter a string : Harchand
Vipin
Nitin
Bhaskar
Yatender
Harchand
</pre>

<h4>Now we will code a program who print all name start from <code>v or V</code>,
from a 2-D string : </h4>


```
int main()
{
    char a[10][10];
    int i;

    for( i = 0 ; i < 10 ; i++ )
    {
        printf(Enter a string : );
        scanf(%s,a[i]);
    }

    for( i = 0 ; i < 10 ; i++ )
    {
        if ( a[i][0] == &#039;v&#039; || a[i][0] == &#039;V&#039;)
            puts(a[i]);
    }
    return 0;
}
```

Output:-

<pre>
Enter a string : vipin
Enter a string : nitin
Enter a string : bhaskar
Enter a string : harchand
Enter a string : yatender
Enter a string : vijay 
Enter a string : ajay
Enter a string : ram
Enter a string : Vinod
Enter a string : prateek
vipin
vijay
Vinod
</pre>

<h4> This code will find given String from a bunch of String : </h4>

```
// Use string.h library
int main()
{
    char a[10][10];
    char b[10];
    int i;

    for( i = 0 ; i < 10 ; i++ )
    {
        printf(Enter a string : );
        scanf(%s,a[i]);
    }

    printf(Enter a string you want to search : ); 
    scanf(%s,b);

    for( i = 0 ; i < 10 ; i++ )
    {
        if ( strcmp( a[i] , b ) == 0)
            printf(String is at a[%d],i);
    }
    return 0;
}
```

Output:-

<pre>
Enter a string : Vipin
Enter a string : nitin
Enter a string : yatender
Enter a string : bhaskar
Enter a string : ajay
Enter a string : vijay
Enter a string : harchand
Enter a string : ned           
Enter a string : caption
Enter a string : rajat
Enter a string you want to search : vijay
String is at a[5]
</pre>

We can have more multi dimensional array but we use them according to our needs.
In our next blog-post we will read structures :)
