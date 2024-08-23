---
title: Introduction to Switch Case In Go Lang
categories: go
tags: [go]
---


# What is Switch Case In Go Lang And How It Works

Switch case is also a decision making statement it can be used in scenarios where we have to chose 1 value among a lot of choices.

In switch case we get a value and multiple scenarios. If the value match any case we run all the statements of that case, There is a section named as default which will be executed if non of the scenario match the case. It is quite similar to `else if` statements.

let's understand it with this basic example.


```
Switch <Value>
	Monday
		Yes It's Monday
	Tuesday
		Yes It's Tuesday
	Wednesday
		Yes It's wednesday.
	Thursday
		Yes It's Thursday.
	Friday
		Yes It's Friday.
	Saturday
		Yes It's Saturday.
	Sunday
		Yes It's Sunday.
	
	Default
		This is the default section.
```

It will go like this:

If the value is `Tuesday`:
```
	Yes It's Tuesday
```

If the value is `January`:
```
	This is the default section.
```

Here we have defined multiple cases and if value matches any of case like it did with Tuesday so it will run all the statement inside that case.

# Switch Case Syntax In Go Lang

```
switch <some_value> {
	case <match_value1>:
		< statement 1 >
		< statement 2 >
		....
	case <match_value2>:
		< statement 1 >
		< statement 2 >
		....
	case <match_value3>:
		< statement 1 >
		< statement 2 >
		....
	default:
		< statement 1 >
		< statement 2 >
		....
}
```

Doc was written in this livestream [[Learn Go Day 09]](https://www.youtube.com/watch?v=tjseGIzLUu0)
