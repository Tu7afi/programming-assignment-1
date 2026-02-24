1. Project Overview

Project Name:
Universal Calculator 3 in 1

What does your calculator do?
This is a calculator with three functions in one program. It can do basic math operations, calculate discounts, and calculate grades. The user switches between modes using tabs.

2. Inputs

Arithmetic Mode

Input Name              Unit   What it Represents
Numbers                  —      Numbers the user enters
Operators (+, -, *, /)   —      Math operation

Why these inputs?
Numbers and operators are needed to perform calculations like addition or division.

Discount Mode

Input Name   Unit    What it Represents
Price        Money   Original price 
Discount     %       Discount percentage

Why these inputs?
We need the price and discount percent to calculate how much money the user saves and the final price.

Grade Mode

Input Name   Unit     What it Represents
Score        Points   Points received
Max Score    Points   Maximum possible points

Why these inputs?
We need these values to calculate the percentage and determine the grade.

3. Process (Calculation Logic)

Arithmetic

The program:

1. Gets numbers from buttons
2. Saves them in variables
3. Performs calculation depending on operator
4. Shows result

Example formulas:

result -- a + b
result -- a - b
result -- a * b
result -- a / b

Discount

Saved money:
Price x (Discount / 100)

Final price:
Price − Saved

Grade

Percentage:
(Score / Max Score) x 100

4. Conditional Logic (if / else)

Arithmetic

If user divides by 0 → program shows “Error”.

Grade

90% or more -- 5
75–89% -- 4
50–74% -- 3
Less than 50% -- 2

I used this scale because it is common in schools.

5. Output

The program shows:
Arithmetic:
Result of calculation

Discount:
Final price
Money saved

Grade:
Percentage
Final grade

6. Edge Cases

If user enters 0:
Arithmetic works normally
Division by 0 shows error

If user leaves input empty:
Program uses 0 or shows error (for max score)

If user enters negative number:
Program still calculates normally

7. Optional Features

Tab system (3 calculators in one)
Dark modern design
Input validation
Rounded numbers (toFixed)

8. How to Run

1. Open index.html
2. Choose calculator mode
3. Enter numbers
4. Click button

9. AI Usage
Yes.

I used AI to help with structure and design.
I changed some logic and understood how it works.
Now I understand DOM, functions, and conditions better.

10. Reflection

I learned how to connect HTML, CSS, and JavaScript together. I practiced using conditions and functions. I also learned how to make one project with multiple features.
