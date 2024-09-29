https://open.kattis.com/problems/3dprinter

You have a single 3D printer, and would like to use it to produce
statues. However, printing the statues one by one on the 3D printer
takes a long time, so it may be more time-efficient to first use 
the 3D printer to print a new printer. That new printer may then in 
turn be used to print statues or even more printers. Print jobs take 
a full day, and every day you can choose for each printer in your 
possession to have it print a statue, or to have it 3D print a new 
printer (which becomes available for use the next day).

What is the minimum possible number of days needed to print at least n statues?

Input
The input contains a single integer n (1<=n<=10000), the number of statues you need to print.

Output
Output a single integer, the minimum number of days needed to print at least n statues.

--------------------------------------------------------------------------------------------

`My thinking:

let s be number of statues to be printed
let p be number of printers
let d be number of days

while s is larger than n 
    p = 1
    d = 0
    do 
        print printer 
        p = p * 2
        d = d + 1
    else 
        all printers print a statue
        d = d + 1
        return d

Walkthrough

let s = 8
let p = 1
let d = 0

s is larger than p
    print printer
        p = 2
        d = 1
    print printer
        p = 4
        d = 2
    print printer 
        p = 8
        d = 3
s < p 
    each printer prints a statue
    8 statues printed
`