---
title: Strings In C language
categories: python
---

<h2>String:-</h2>
String is group of alphabets,digits and symobls. In C language, a string represented by <code>char</code> array.
<pre>e.g.  char S[20];</pre>
In this example S is a string of 20 characters but it can hold a string of only 19 characters,
because the last character of a string is always NULL.

<code>NULL :-
It is a character used to repersent end of String.
It has three repersentactions:
1. NULL   (need stdio.h)
2. ''
3. 0
</code>
<h2><img class="alignnone size-full wp-image-609" src="https://vipin711.files.wordpress.com/2019/09/4bd11-screenshot-from-2018-07-27-19-13-54-e1532699103824.png" alt="String example" width="916" height="338" /></h2>
<h2>Output with String:-</h2>
<h4>1. Using <code>printf()</code> function:</h4>
printf will display the entire String using %s
<pre>e.g.

char a[20] = "Vipin Yadav";

printf("The String is %s",a);
// The String is Vipin Yadav

printf("The String is %.4s",a);
// The String is Vipi ( Here .4 will allow us to print only 4 letter of string only)

printf("The String is %10.4s",a);
// The String is ------Vipi
// Here 10.4 mean print 10 letter but use 4 letter from string here it take 4 letter and 
// use 6 <code>' '</code> but i use <code>'-'</code> instead of <code>' '</code> to show you</pre>
<h4>2. Using <code>puts()</code> function:</h4>
<h2>Input with String:-</h2>
<h4>1. Using <code>scanf()</code> function:</h4>
scanf() with %s :-
It can read one word of a string or a one word string.
<pre>e.g.
 char a[20];
 printf("Enter a string who contain lases then 20 words : ");
 scanf("%s",a);
 // NOTE : WE DO NOT USE '&amp;' DURING A STRING INPUT.
 puts(a);
</pre>
scanf() with %[^n] :-
It can read a multi word string .
<pre> char a[20];
 printf("Enter a string who contain lases then 20 words : ");
 scanf("%s",a);
 // NOTE : WE DO NOT USE '&amp;' DURING A STRING INPUT.
 puts(a);
</pre>
<h4>2. Using <code> gets() </code> function :-</h4>
gets() function can read multiple word once It work under stdio.h heder file
<pre>e.g.

 char a[20];
 printf("Enter a string who contain lases then 20 words : ");
 gets(a);
 puts(a);
</pre>
In next post we will read about Inbuilt function and user-define of strings.