---
title: Nesting  Of   Loops
categories: c
tags: [c]
---

In my this blog we will see some basic syntex of loops .
<h1>what is the meaning of nesting loops?</h1>
Nesting behavior refers to loops within loops.
means using a loop within an another loop.

Let's understand it with help of some synnex.
<h2>Nesting loop syntex for for loop :-</h2>

```
for ( initialize ; condition ; expressions )
{
   // this for loop is within a for loop so this is 
   //nesting of for loops
for ( initialize ; condition ; expressions )
  {
     statement(s);
  }
 statement(s);
}
```

<h2>Nesting loop syntex for for loop :-</h2>
```
while ( condition )
{
   // this while loop is within a while loop so this is 
  //nesting of while loops
 whlie ( condition )
   {
      statement(s);
   }
 statement(s);
}
```

<h2>Nesting loop syntex for for loop :-</h2>
```
do
{
   // this do-while loop is within a do-while loop so this is 
  //nesting of do-while loops
 do
  {
     statement(s);
  }while ( condition );
 statement(s);
}while ( condition );
```

loops within loop is called nesting of loops.
