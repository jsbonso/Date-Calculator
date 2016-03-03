Written by:  Jonjon Bonso
Language:    Node.js
Test Framework: Mocha
Date: 26 February 2016

#Purpose

This is a console application written in Node.js that returns the number of days between each dates provided, exclusive of start and end dates.


#How to run? 

Syntax: 
  
      node dateCalcRunner.js DATE_FROM(DD/MM/YYYY) DATE_TO(DD/MM/YYYY)


Example:

      node dateCalcRunner.js 02/06/1983 22/06/1983

Notes:

      -  This calculator only processes dates from 01/01/1901 to 31/12/2999.
      -  If the user mistakenly entered DATE_TO DATE_FROM, then it will automatically be switched to the proper format of DATE_FROM DATE_TO.
      -  If the user entered a wrong date format or invalid dates or missing parameter, the program will show the "Usage" instruction to help him out.
 
# Grunt Tasks

   To run tests:    grunt test
   To run build:    grunt build


