---
title: Refreshing nesting if-else  showing days of week
categories: python
---

#include&lt;stdio.h&gt;
void main()
{
int Number;

printf("Enter a Number : n");
scanf("%d",&amp;Number);

if( Number == 1 )
printf(" The Number is %d so the weekly name is Sunday.",Number);

else if( Number == 2 )
printf(" The Number is %d so the weekly name is Monday.",Number);

else if( Number == 3 )
printf(" The Number is %d so the weekly name is Tuesday.",Number);

else if( Number == 4 )
printf(" The Number is %d so the weekly name is Wednesday.",Number);

&nbsp;

else if( Number == 5 )
printf(" The Number is %d so the weekly name is Thursday.",Number);

else if( Number == 6 )
printf(" The Number is %d so the weekly name is Friday.",Number);

else if( Number == 7 )
printf(" The Number is %d so the weekly name is Saturday.",Number);
else
printf("Invalid number");

}
/*
Output
1.

Enter a Number :
5
The Number is 5 so the weekly name is Thursday.

2.

Enter a Number :
56
Invalid number

3.

Enter a Number :
7
The Number is 7 so the weekly name is Saturday.

*/