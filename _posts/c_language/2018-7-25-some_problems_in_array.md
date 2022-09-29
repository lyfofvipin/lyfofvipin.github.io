---
title: Some Problems In Array
categories: c
tags: [c]
---

Here in my this blog we will learn how to take input in an array and display that on screen and we perform some others operation on Arrays.

Have a fun : )

1. In our this program we will learn how to take inputs in array we will declare a array of length 5 and enter some value into it

<span style="color:#000000;"><a class="css-truncate-target js-navigation-open js-tree-finder-path" style="color:#000000;" href="https://github.com/vipin3699/PROGRSMMING/blob/master/reading-arrey.c"><mark>reading</mark>-array.c</a></span>

```
#include<stdio.h>;
int main()
{
  int a[5],i;
  for (i = 0; i < 5; i++)
  {
    printf("Enter a number :n");
    scanf("%d",&a[i]);
  }
  printf("All values are stored in the Array");
  return 0;
}
```

```
Output :-
Enter a number :
5
Enter a number :
4
Enter a number :
3
Enter a number :
2
Enter a number :
1
All values are stored in the Array
```

2. In our this program we will read an array and display that on screen , This program will take 5 integer and display them on screen.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/reading-writing-arrey.c"><mark>reading</mark>-writing-array.c</a>

```
#include<stdio.h>;
int main()
{
  int a[5],i;
  for (i = 0; i < 5; i++)
  {
    printf("Enter a number : n");
    scanf("%d",&a[i]);
  }
  printf("Entered numbers are : n");
  for (i = 0; i < 5; i++)
  {
    printf("%d n",a[i]);
  }
  return 0;
}
```

```
Output :-
Enter a number
1
Enter a number
2
Enter a number
3
Enter a number
4
Enter a number
5
Entered numbers are :
1
2
3
4
5
```

3. Our this program will take 2 Array and store that in a third Array and display third array on screen.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/sum-of-2-array-in-3.c"><mark>sum</mark>-of-2-<mark>a</mark>rray-in-3.c</a>

```
#include<stdio.h>;
int main()
{
  float a[5],b[5],c[5];
  int i;
  printf("Enter first Array :n");
  for (i = 0; i < 5; i++)
  {
    printf("Enter a float number :");
    scanf("%f",&a[i]);
  }
  printf("n Enter second Array :n");
  for (i = 0; i < 5; i++)
  {
    printf("Enter a float number :");
    scanf("%f",&b[i]);
  }

  //Adding of both Array
  for (i = 0; i < 5; i++)
  {
    c[i] = a[i]+b[i];
  }
  printf("Sum of both array is :n");
  for (i = 0; i < 5; i++)
  {
    printf("%.2ft",c[i]);
  } 
}
```

```
Output :-
Enter first Array :
Enter a float number :1.2
Enter a float number :2.3
Enter a float number :4.5
Enter a float number :6.7
Enter a float number :8.9
Enter second Array :
Enter a float number :2.1
Enter a float number :3.2
Enter a float number :4.3
Enter a float number :5.4
Enter a float number :7.6
Sum of both array is :
3.30 5.50 8.80 12.10 16.50
```

4. Our this Program will take 10 integers and count Positive,Negative and Zeros from that Array.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/counting-pos-neg-zero-in-arrey.c"><mark>count</mark>ing-pos-neg-zero-in-array.c</a>


```
#include<stdio.h>;
int main()
{
  int a[10],z,p,n,i;
  z=p=n=0;
  for (i = 0; i < 10; i++){
    printf("Enter a number : ");
    scanf("%d",&a[i]);
    if( a[i] > 0 ){
    p++;
    if(a[i]<0)
    n--;
    if(a[i]==0)
    z++;
  }
  printf("Positive numbers are %d, Negative number are %d and zeros are %d.",p,n,z);
  return 0;
  }
}
```

```
Output :-
Enter a number : 12
Enter a number : 23
Enter a number : -56
Enter a number : 0
Enter a number : 65
Enter a number : 0
Enter a number : -97
Enter a number : 34
Enter a number : -67
Enter a number : 0
Positive numbers are 4, Negative number are -3 and zeros are 3.
```

5. It is a kind of calculator which will perform a operation you provide and display result on the screen.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/arey-calculater.c">array-<mark>calcu</mark>later.c</a>

```
#include<stdio.h>;
int main()
{
int a[5],b[5],i;
char x;

 printf("select a operation form +,-,* and / :- ");
 scanf("%c",&x);

 printf("Enter first array :n");
 for (i = 0; i < 5; i++)
 {
   printf("Enter a number : ");
   scanf("%d",&a[i]);
 }
 printf("n Enter second array :n");
 for (i = 0; i < 5; i++)
 {
   printf("Enter a number : ");
   scanf("%d",&b[i]);
 }

switch(x)
 {
  case '+':
 {
  for (i = 0; i < 5; i++)
    printf("%d n",a[i]+b[i]);
  break;
 }
 case '-':
 {
   for (i = 0; i < 5; i++)
    printf("%d n",a[i]-b[i]);
    break;
 }
 case '*':
 {
   for (i = 0; i < 5; i++)
    printf("%d n",a[i]*b[i]);
    break;
 }
 case '/' :
 {
   for (i = 0; i < 5; i++)
    printf("%.2f n",(float)a[i]/b[i]);
    break;
 }
 default:
  printf("invalid selection n");
}
return 0;
}
```

```
Output :-
select a operation form +,-,* and / :- /
Enter first array :
Enter a number : 12
Enter a number : 23
Enter a number : 34
Enter a number : 45
Enter a number : 56

Enter secand array :
Enter a number : 1
Enter a number : 2
Enter a number : 3
Enter a number : 4
Enter a number : 5
12.00
11.50
11.33
11.25
11.20
```

6. Our this program will accept a integer from you and display count number Larger, Smaller and Equal to that number.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/finding-larg-small-=-num-in-arrey.c">finding-larg-small-<mark>=</mark>-num-in-array.c</a>

```
#include<stdio.h>;
int main()
{
  int a[10],i,b,l,s,e;
  s=e=l=0;

  printf("Enter a number with which you want to compare Array elements : ");
  scanf("%d",&b);

  for ( i = 0 ; i < 10 ; i++ )
  {
  printf("Enter a number :");
  scanf("%d",&a[i]);

  if(a[i]==b)
  e++;

  if(a[i]<b) s++; if(a[i]>;b)
  l++;
  }
  printf("Large number are %d, Small number are %d and Equal are %d.",l,s,e);
  return 0;
}
```

```
Output :-
Enter a number with which you want to compare Array elements : 23
Enter a number :45
Enter a number :67
Enter a number :23
Enter a number :76
Enter a number :56
Enter a number :56
Enter a number :768
Enter a number :435
Enter a number :-887
Enter a number :-67
Large number are 7, Small number are 2 and Equal are 1.
```

7. Our this program will take 2 Array and compare there each index and store larger value in third Array.

e.g

```
if (A[0] > B[0] )
C[0] = A[0];
```

same process will held with each index.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/finding-large-number-and-storing.c">finding-<mark>larg</mark>e-number-and-storing.c</a>


```
#include<stdio.h>;
int main()
{
  int a[5],i,b[5],c[5];
  printf("Enter first Array :n");
  for (i = 0; i < 5; i++)
  {
  printf("Enter a number :");
  scanf("%d",&a[i]);
  }
  printf("nEnter second Array :n");
  for (i = 0; i < 5; i++)
  {
  printf("Enter a number :");
  scanf("%d",&b[i]);
  }
  for (i = 0; i <5 ; i++)  {    if(a[i]>;b[i])
      c[i]=a[i];
    else
      c[i]=b[i];
  }
  for (i = 0; i <5 ; i++)
  {
    printf("%d t",c[i]);
  }
  return 0;
}
```

```
Output :-
Enter first Array :
Enter a number :12
Enter a number :34
Enter a number :56
Enter a number :7
Enter a number :1
Enter second Array :
Enter a number :1
Enter a number :2
Enter a number :3
Enter a number :4
Enter a number :5
12 34 56 7 5
```

8. Our This program will Marge first two array into third array.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/merging-arrey.c"><mark>m</mark>erging-<mark>a</mark>rray.c</a>

```
#include<stdio.h>;
void main()
{
  int a[5],i,b[5],c[10];

  printf("Enter first Arrayn");
  for (i = 0; i < 5; i++)
  {
  printf("Enter a number :");
  scanf("%d",&a[i]);
  }
  printf("nEnter second Arrayn");
  for (i = 0; i < 5; i++)
  {
  printf("Enter a number :");
  scanf("%d",&b[i]);
  }

  for (i = 0; i < 5; i++)
  {
  c[i]=a[i];
  c[i+5]=b[i];
  }
  printf("Array after merging is : n");
  for (i = 0; i <10 ; i++)
  {
  printf("%d ",c[i]);
  }
}
```

```
Output :-
Enter first Array
Enter a number :12
Enter a number :34
Enter a number :54
Enter a number :67
Enter a number :897
Enter second Array
Enter a number :34
Enter a number :34
Enter a number :45
Enter a number :23
Enter a number :567
Array after merging is :
12 34 54 67 897 34 34 45 23 567
```

9. This program will Print reverse of an Array.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/printing-arrey-in-reverse.c">printing-array-in-<mark>reve</mark>r<mark>s</mark>e.c</a>

```
#include<stdio.h>;
void main()
{
  int a[5],i;
  char x;
  printf("Enter your array : n");
  for (i = 0; i < 5; i++)  {  printf("Enter a number :");  scanf("%d",&a[i]);  } for ( i = 4 ; i >;= 0 ; i-- )
  printf("%d ",a[i]);

}
```

```
Output :-
Enter your array :
Enter a number :12
Enter a number :34
Enter a number :54
Enter a number :76
Enter a number :89
89 76 54 34 12
```

10. This program will store reverse of an Array and store it another array and display that.

<a class="css-truncate-target js-navigation-open js-tree-finder-path" href="https://github.com/vipin3699/PROGRSMMING/blob/master/reverse-an-arrey-in-another.c"><mark>reve</mark>r<mark>s</mark>e-an-array-in-another.c</a>

```
#include<stdio.h>;
void main()
{
  int a[5],b[5],i,j;
  char x;
  for (i = 0; i < 5; i++)  {  printf("Enter a number :");  scanf("%d",&a[i]);  }  for (i=4,j=0;i>;=0;j++,i--)
      b[j]=a[i];

  for (i = 0; i < 5; i++)
  printf("%d ",b[i]);
}
```

```
Output :-
Enter a number :12
Enter a number :34
Enter a number :45
Enter a number :675
Enter a number :34
34 675 45 34 12
```
Later we will discuss Array with functions.
