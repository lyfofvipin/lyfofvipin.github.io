---
title: STRUCTURE IN C
categories: c
tags: [c]
---

STRUCTURE:
You are aware that a variable stores a single value of a data type.

Arrays can store many values of similar data type.

Data in the array is of the same composition in nature as far as type is concerned.

In real life we need to have different data type for example to maintain employees information we should have information such as name,age,qualification,salary etc.

Here,to maintain the information of employees dissimilar data types are required.
Name and qualification of the employee are char data type, age is integer, and salary is float. All these data types can not be expressed in a single array. 

One may think to declare different arrays for each data type. But there will be huge increase in source codes of the
program. Hence, arrays can not be useful here. 

For tackling such mixed data types, a special feature is provided by C.

it is known  as structure. A structure is a collection of one or more variables of different data types, grouped together under a single name.

By using structures we can make a group of variables,arrays,pointers etc.

<h2>Features of structures:</h2>

1.  To copy elements of one array to another array of same data type elements are copied one by one. 
  it is not possible to copy all the elements at a time. Whereas in structure it is possible to copy the 
  contents of all structure elements of different data types to another structure variable of its type using
  assignment (=) operator. It is possible because the structure elements are stored in successive memory 
  locations.

2. Nesting of structures is possible i.e. one can create structure within structure. Using this feature 
  one can handle complex data types.

3. It is also possible to pass structure elements to a function. This is similar to passing an 
  ordinary variable to a function. One can pass individual structure elements or entire structure by 
  value or address.

4. It is also possible to create structure pointers. We can create a pointer pointing to structure elements. 
  For this it requires operator.

<h2>creating structure definition:</h2>

syn:
```
struct Name_of_structure 
    {
        member1;
        member2;
        member3;
    };
```

e.g.
```
struct student                          struct employee                        struct test
{   int roll;                              { int empno;                          {  int a,b,c;
    char name[100],fname[100];               char name[100],address[100];           float x,y,z;
    char address[100],inst[100];             char dept[100],post[100];              char p[9];
    char sub[100];                           float basic;                         };
    float fee;                             };                              
};
```

<h4> Ways of creating structure variable : </h4>

```
    struct student                                    struct
    {                                                 {
      int roll;                                           int roll;
      char name[100];                                     char name[100];
      char sub[100];                                      char sub[100];
      float fee;                                          float fee;
    }A,B,C;                                           }A,B,C;
```

```
syn: 
    structure_name    new_name;
```

<h4>(.) Dot operator </h4>

This operator is referred as structure variable structure member operator it is used to access a, structure member from a structure variable.


<h4> USING STRUCTURE VARIABLE : </h4>

```
#define z 50
struct employee
{
    int ID;
    char name[z];
    char dept[z];
    float salary;
};

int main()
{
    struct employee A;
    char Escape_NULL;

    printf("Enter Employee ID : ");
    scanf("%d",&A.ID);
    scanf("%c",&Escape_NULL);

    printf("Enter Employee name : ");
    gets(A.name);

    printf("Enter salary : ");
    scanf("%f",&A.salary);
    scanf("%c",&Escape_NULL);

    printf("Enter Department of Employee : ");
    gets(A.dept);

    printf("Name : %s. n",A.name);
    printf("ID : %d.n",A.ID);
    printf("Department : %s.n",A.dept);
    printf("Salary : %.3f.",A.salary);

    return 0;
}
```

Output:-

<pre>
Enter Employee ID : 10001
Enter Employee name : Vipin
Enter salary : 18000.69;
Enter Department of Employee : IT
Name : Vipin. 
ID : 10001.
Department : IT.
Salary : 18000.690.
</pre>


<h2>Array of structure :</h2>

We can create array of our structure , Here in our this example we will take employee detail,
and print them.

```

#define z 50
struct employee
{
    int ID;
    char name[z];
    char dept[z];
    float salary;
};

typedef struct employee emp;

int main()
{
    struct employee A[5];
    char Escape_NULL;
    int i;
    for ( i = 0 ; i < 5 ; i++ )
    {
        printf(Enter Employee ID : );
        scanf(%d,&A[i].ID);
        scanf(%c,&Escape_NULL);

        printf(Enter Employee name : );
        scanf(%s,A[i].name);

        printf(Enter salary : );
        scanf(%f,&A[i].salary);
        scanf(%c,&Escape_NULL);

        printf(Enter Department of Employee : );
        scanf(%s,&A[i].dept);

    }

    for ( i = 0 ; i < 5 ; i++ )
    {
        printf(Name : %s.nID : %d.\nsalary : %f.nDepartment : %s.,A[i].name,A[i].ID,A[i].salary,A[i].dept);
        printf(nn);
    }
    return 0;
}
```

Output:-

<pre>
Enter Employee ID : 1001
Enter Employee name : Vipin
Enter salary : 18200.69
Enter Department of Employee : IT
Enter Employee ID : 1002 
Enter Employee name : Yatender
Enter salary : 18000
Enter Department of Employee : Sales
Enter Employee ID : 1003
Enter Employee name : Harchand
Enter salary : 17000
Enter Department of Employee : Markcketing            
Enter Employee ID : 1004
Enter Employee name : XYZ
Enter salary : 0000
Enter Department of Employee : abc
Enter Employee ID : 1005
Enter Employee name : ABC
Enter salary : 0000
Enter Department of Employee : XYZ

Name : Vipin.
ID : 1001.
Salary : 18200.689453.
Department : IT.

Name : Yatender.
ID : 1002.
Salary : 18000.000000.
Department : Sales.

Name : Harchand.
ID : 1003.
Salary : 17000.000000.
Department : Markcketing.

Name : XYZ.
ID : 1004.
Salary : 0.000000.
Department : abc.

Name : ABC.
ID : 1005.
Salary : 0.000000.
Department : XYZ.
</pre>

In our this example we will take marks of student as input and display names of student who got, above 85% marks.

```
#define z 50
struct Student
{
    char name[z];
    float Math;
    float Physics;
    float Chemistry;
};

typedef struct Student std;

int main()
{
    std A[5];
    int i;
    float P;
    for ( i = 0 ; i < 5 ; i++ )
    {
        printf(Enter Student Name :);
        scanf(%s,A[i].name);

        printf(Enter marks of Math for %s :,A[i].name);
        scanf(%f,&A[i].Math);

        printf(Enter marks of Physics for %s :,A[i].name);
        scanf(%f,&A[i].Physics);

        printf(Enter marks of Chemistry for %s :,A[i].name);
        scanf(%f,&A[i].Chemistry);

        printf(n);
    }

    for ( i = 0 ; i  85.00 )
            printf("%s Has %.2f%%.n",A[i].name,P);
    }
    return 0;
}
```

Output:-
<pre>
Enter marks of Math for Vipin :85
Enter marks of Physics for Vipin :86
Enter marks of Chemistry for Vipin :87

Enter Student Name :Nitin
Enter marks of Math for Nitin :88
Enter marks of Physics for Nitin :45
Enter marks of Chemistry for Nitin :67

Enter Student Name :Harchand
Enter marks of Math for Harchand :43
Enter marks of Physics for Harchand :45
Enter marks of Chemistry for Harchand :67

Enter Student Name :Yatender
Enter marks of Math for Yatender :56
Enter marks of Physics for Yatender :43
Enter marks of Chemistry for Yatender :88

Enter Student Name :KVY
Enter marks of Math for KVY :90
Enter marks of Physics for KVY :98
Enter marks of Chemistry for KVY :99

Vipin Has 86.00%.
KVY Has 95.66%.
</pre>

<h4>POINTER TO STRUCTURE : </h4>

We know that pointer is a variable that holds the address of another data variable mean of any data type that is int, float and double. In the same way we can also define pointer to structure. Here starting address of the member variable can be accessed. Thus search pointers structure pointer.

```
  struct    Name_of_structure    *ptrname;
```


e.g.

```
#define z 50
struct Student
{
    char name[z];
    float Math;
    float Physics;
    float Chemistry;
};

typedef struct Student std;

int main()
{
    std A = {"Vipin", 78, 87, 98};
    std *p;
    
    p = &A;

    printf("%s has %.1f mark in Math %.1f marks in Physics and %.1f marks in Chemistry.",(*p).name,(*p).Physics,(*p).Chemistry);
    // Using of () is compulsory you can use  (Arrow Operators) instead of (*)
    
    return 0;
}
```

Output:-

<pre>Vipin has 87.0 mark in Math 98.0 marks in Physics and 0.0 marks in Chemistry.</pre>

<h3>ARROW OPERATORS : </h3>

This operator is used to access a structure number through a structure pointer variable, It also known as structure pointer to member operator.

```
#define z 50
struct Student
{
    char name[z];
    int Math;
    int Physics;
    int Chemistry;
};

typedef struct Student std;

int main()
{
    std A = {"Vipin", 78, 87, 98};
    std *p;
    
    p = &A;

    printf("Name : %sn",pname);
    printf("Marks in Math : %d.n",pMath);
    printf("Marks in Physics : %d.n",pPhysics);
    printf("Marks in Chemistry : %d.n",pChemistry);

    return 0;
}
```

Output:-

<pre>Name : Vipin
Marks in Math : 78.
Marks in Physics : 87.
Marks in Chemistry : 98.
</pre>

<h3>STRUCTURE AND FUNCTION : </h3>

Like members of standard data types, structure variables can be passed to the function by value or address. 
The Example is given Below.

```
#define z 50
struct complex
{
    int real,img;
};

typedef struct complex complex;

int main()
{
    complex A;
    
    void input( complex * );
    void output( complex );

    input(&A);
    output(A);

    return 0;
}
void input( complex *x )
{
    printf("Enter value of numerator : ");
    scanf("%d",&xreal);

    printf("Enter value of Denominator : ");
    scanf("%d",&ximg);
}

void output( complex x )
{
    printf("%d/%d",x.real,x.img);
}
```

Output:-

<pre>
Enter value of numerator : 12
Enter value of Denominator : 45
12/45
</pre>
