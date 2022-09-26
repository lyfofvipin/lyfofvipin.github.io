---
title: Calculator using if-else
categories: python
---

// We are going to code a calculater in our this program.
// let's start.
<pre>
#include
#include // We are goint to use exit function in this code so we
// connect this library.
  void main()
{
   double number_1,number_2,result;
   char operaction;

   printf("Enter your Both Number : ");
   scanf("%lf%lf",&amp;number_1,&amp;number_2);

 

     fflush(stdin); // this is use for flushing enter you pressed. affter
// entering number if we not use fflush then n
// will store in operator and we got wrong result.
// It also comes in stdio.h library of C.

      printf("Please select a operaction from the given list :n");
      printf("    + for addiction    n");
      printf("    * for multiply      n");
      printf("    - for subtruction n");
      printf("    / for devide         n");
      printf(" %% for remander n");// here we use %% because it display %
      // on output.

    scanf("%c",&amp;operaction);

        if ( operaction == '+' ) // or if ( operaction == 43 ) ASCII value of +
          result = number_1+number_2;
        else if( operaction == '-' ) // or if ( operaction == 45 ) ASCII value of -
          result = number_1-number_2;
        else if ( operaction == '*' ) // or if ( operaction == 42 ) ASCII value of *
          result = number_1*number_2;
        else if (operaction == '/' ) // or if ( operaction == 47 ) ASCII value of /
          result = number_1/number_2;
        else if ( operaction == '%' ) // or if ( operaction == 37 ) ASCII value of %
          result = (int)number_1%(int)number_2;
        else
{
          printf(" INVALID OPERATOR ");
          exit(1);//It is a jump statement who close the program
          // we will discus about it later and we can
          // It use stdlib.h library of C.
          // write any number in ().There is no compulsion
          // to write 1 in it.
}
          printf("nnn Your result is %.2lf.nnnn",result);
}

NOW PASTE THE OUTPUT IN COMMENT BOX.