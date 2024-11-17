---
title: INTRO to C language.
categories: c
tags: [c]
---

Hello Everyone C is a very easy and simple language.

Let us start with it.

First of all, I will tell you that C is a high-level language, which developed by Dennis Ritchie, in 1972, in AT and T's bell laboratory California

Now let's talk about the levels of language
<ul>
 	<li><strong>LOW-LEVEL </strong></li>
 	<li><strong>HIGH-LEVEL</strong></li>
</ul>
<h3>Low-Level languages</h3>
To code in a low-level language, we need a good knowledge of binaries and how we can directly interact with hardware. Without knowledge of binaries and hardware, we couldn't use a low-level language.

<h3>High-level languages</h3>
High-level languages are those languages which do not depend on any assembly language knowledge or we can say that a user does not need any knowledge of hardware connectivity via languages because a high-level language is developed that any user can use that without any deep knowledge of assembly language or can directly start writing code without much knowledge of drivers and all.

That's the different thing that a low-level language is easily understood by computer or we can say the machine but a high-level language is easily understood by us that is why all the languages which are considered in programming are high-level.

<h4>Environment to write Code:-</h4>
So to run a C program you need to have GCC in your system and I would suggest you use <a href="https://code.visualstudio.com/">Visual Studio Code</a> as your text editor and run your code in via Command line. And if you got mess up with setting it in windows then you can use <a href="http://www.codeblocks.org/">Code Block</a>.

and in Linux we use command
<pre>gcc name_of_program.c</pre>
or
<pre>cc name_of_programc.c</pre>
To compile the code
and command
<pre>./a.out</pre>
to saw the Output of the program.

Now let's dig into a bit with C.

So in any language, We have fix words that represent something or we can say are already booked these words are known as <strong>Key Words</strong> similarly we have 32 keywords in C or we call them reserved words.
<h5>Here is the list of Keywords in C</h5>
<table>
<tbody>
<tr>
<td>auto</td>
<td>double</td>
<td>int</td>
<td>struct</td>
</tr>
<tr>
<td>break</td>
<td>else</td>
<td>long</td>
<td>switch</td>
</tr>
<tr>
<td>case</td>
<td>enum</td>
<td>register</td>
<td>typedef</td>
</tr>
<tr>
<td>char</td>
<td>xtern</td>
<td>return</td>
<td>union</td>
</tr>
<tr>
<td>const</td>
<td>float</td>
<td>short</td>
<td>unsigned</td>
</tr>
<tr>
<td>continue</td>
<td>for</td>
<td>signed</td>
<td>void</td>
</tr>
<tr>
<td>default</td>
<td>goto</td>
<td>sizeof</td>
<td>volatile</td>
</tr>
<tr>
<td>do</td>
<td>if</td>
<td>static</td>
<td>while</td>
</tr>
</tbody>
</table>

So now let's see what kind of character C support or we can say what kind of symbols and letters we can use in writing expressions.

<code>We can use any alphabets A,B,C ......Z or a, b, c........z</code>

<code>We can use Digits  .....-9,-8,-7,-6,-5,-4,-3,-2-1,0, 1, 2, 3, 4, 5, 6, 8, 9,......</code>
and 

<code>Symbols  ! @ # % ^ & * () _ + - = ; : ' " .......</code>


NOTE:

We can use any kind of symbol in C language except  Dollar sign ($) this sign is not supported in any expression or in any statement in C language.

## Hello World In C

```
#include<stdio.h>;

void main()
{
    printf("Hello World.");
}
```

`#include<stdio.h>;` : By this line we are trying import the standard input output library.

`void main()` : We are saying that start the program execution from here ( Opening a block for main function ) and the `void` in the start says the function is not returning anything.

`{}` : All the code now is written in the `{}` it stats that only this code is part of the main function.

`printf` : Is a function from the `stdio.h` library that can handle outputs on the console.

`printf("Hello World.");`: This is how we use a function with `()` and passing the arguments and a `;` at the end.

**NOTE: `;` is a very important part it represent the end of a statement and it's required after a statement in C language.**
