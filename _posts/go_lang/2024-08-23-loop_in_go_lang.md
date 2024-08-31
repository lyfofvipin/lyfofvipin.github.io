---
title: Loop In Go Lang
categories: go
tags: [go]
---


# What Is A Loop And Why We Need Loop In Programming

Loop help us in doing the repetitive task for example you have to clean your house daily now this is a repetitive task to solve the same we get a tool a cleaning machine to do the moping for us now we need loops to to all our repetitive task in the world of programming language.


# Let's Take A Deeper Look


For example you want to display table of 2 (2, 4, 6, 7 ..) now you are not going to write so many print statements to do te same we can use a loop and just write one print statement in that loop and it will do the task to print all the cities for us.


```
Loop
	<statement>
```

Result:
```
<statement>
<statement>
<statement>
<statement>
<statement>
<statement>
..........
```

# For Loop In Go Lang

Go language support only `one` loop `for`.
In for loop we have a few sections where we can initialize variables, apply conditions based on that loop will deicide weather it has to execute the body or not, write some expression to control the number of iterations by changing the condition of the loop and body where we write our statements.

Note: Using of `()` is not supported you are not supposed to use the same or you will get the error. 

```
for <initialization step>; <condition>; <expression> {
	<body>
}
```


`initialization step` -> In This step we can assign or create a variable that can be used in the loop it's not mandatory to pass the initialization step but don't forget to add `;` if you are not writing expression in the loop.
If you are defining some variable in `initialization` step then it will not be visible outside the loop. 

```
for i := 1 ; i <= 10; i = i +1 {  // Okay
for ; i <= 10; i = i +1 {		  // Okay
for i <= 10; i = i +1 {		      // Error
```

`condition` -> Here we write the condition based on the loop will deicide that weather it has to execute the body or not it's not mandatory to pass the condition but you will end up in a infinite loop it can be stopped using `break` statement.

```
for i := 1 ; i <= 10 ; i = i +1 {		// Okay
for i := 1 ; ; i = i +1 {			    // Okay
for i := 1 ;  i = i +1 {		        // Error
```


`expression` -> Here we write some expression to change the value of variables that may change the condition after iteration and help in controlling the number of iterations it's not mandatory to pass the expression but don't forget to add `;` if you are not writing expression in the loop.

```
for i := 1 ; i <= 10; i = i +1 {  // Okay
for i := 1 ; i <= 10; {			  // Okay
for i := 1 ; i <= 10 { 			  // Error
```

There is one more case where we are not defining any of the above statement again this will be an infinite loop.

```
for {
	<statement>
}
```

`body` -> In this section of the loop we actually wite the code we want to run repetitively writing the body is also not mandatory I know it's useless but it is possible.


Doc was written in this livestream [[Learn Go Day 10]](https://www.youtube.com/watch?v=LX4DsvuJ7AA)
