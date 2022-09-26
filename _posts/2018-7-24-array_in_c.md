---
title: ARRAY IN C
categories: python
---

An Array is user define data type. It is collection of several elements of similar data
type, where we can store multiple values at a time.

Syntax:

Data Type ArrayName [ No_of_element ];

e.g.
int Arr[5]
<table>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2>Properties of Array:-</h2>
<h4>1. All elements exist on continues memory locations.</h4>
Here i am assuming that it starts from location 100 in memory.
int A[5];
<table style="height:39px;" width="587">
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
100                                  102                                   104                               106                           108
<h4>2.Each element is identified by a number, which called as index no.
The index no begins from 0 to N-1.</h4>
int A[5];

Here N = 5

0                                 1                                  2                             3                                4
<table style="height:35px;" width="563">
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
100                                  102                                   104                               106                           108
<h4>3.All elements of an array are of same type.</h4>
int A[5];
float A[5];
long A[5];
<h4>4.Length of array must defined by a constant integer.</h4>
int A[5]; = OK
float A[5]; = OK
int A[]; = error
int A[5.7]; = error
int l = 5;
int A[l]; = error
int A[l*2]; = error
<h4>5.The size of array is sum of size of its elements.</h4>
int a[5]; SIZE = 10
float a[200]; SIZE = 800
long a[44]; SIZE = 132
<h4>6.All elements of array are automatically initialized by garbaze.</h4>
<h4>7.Initialization of array:</h4>
int a[5] = {10,20,30,40,50};

0                                 1                                  2                             3                                4
<table>
<tbody>
<tr>
<td>10</td>
<td>20</td>
<td>30</td>
<td>40</td>
<td>50</td>
</tr>
</tbody>
</table>
Partial Initialization-

int a[5] = {10,20,30};

0                                 1                                  2                             3                                4
<table style="height:42px;" width="598">
<tbody>
<tr>
<td>10</td>
<td>20</td>
<td>30</td>
<td>0</td>
<td>0</td>
</tr>
</tbody>
</table>
int a[100] = {0};

0.............................................................................................................................................................99
<table>
<tbody>
<tr>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
</tbody>
</table>
int a[] = {10,20,30,40,50};
<table>
<tbody>
<tr>
<td>10</td>
<td>20</td>
<td>30</td>
<td>40</td>
<td>50</td>
</tr>
</tbody>
</table>
<h4>8.The size of an array also defined by a symbolic constant/macro.</h4>
#define sz 25

double A[sz];
int B[sz];
char C[sz];
<h4>9.The[]operator,in c language ,is known as sub-script operator.</h4>
<h2>Disadvantages of array:-</h2>
1.C environment doesn't have checking machism for array sizes.
2.Differenet type of data can not be stored into an array.
3.We must know in advance that how many elements are to be stored in array.
4.Array is static structure. It menas at array is of fixed size.
The memory which is allocated to array can not be increased or reduced.
5.Since arrayis of fixed size, if we allocate more memory than requirement then,
the memory space will be wasted. And if we allocate less memory than requirement,
then its will create problem.