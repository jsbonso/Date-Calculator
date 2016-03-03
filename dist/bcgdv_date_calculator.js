/*
* Number-Of-Days-Between-Dates Calculator
* Author: Jonjon Bonso 	-	jsbonso@gmail.com
* 
* Input Parameters:  Start Date and End Date of the project in DD/MM/YYYY format.
* Returns: Number of Days between dates (exclusive of start and end dates) 
* 
*/ 

//"use strict";

// Date Calculator
var path = require('path');
var D = {};
var filename = path.basename(__filename);
var startDate = process.argv[2];
var endDate = process.argv[3];
var startDateMinLimit = '01/01/1901';
var endDateMaxLimit = '31/12/2999';


function showSplash(){
	console.log('\n=============================================================');
	console.log('===          BCG Digital Ventures Date Calculator         ===');
	console.log('=============================================================\n');
}

function showUsage(){
	console.log('\nUsage: \n node ' + filename + ' DATE_FROM(DD/MM/YYYY) DATE_TO(DD/MM/YYYY) \n');
	console.log('Note: \n This calculator only processes dates from ' +  startDateMinLimit + ' to ' + endDateMaxLimit + ' \n');
	console.log('Example: \n node '+ filename + ' 02/06/1983 22/06/1983 \n\n');

	process.exit(1);	
}

function isValidDate(inputDate){

    // Regex for validate date format for DD/MM/YYYY
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(inputDate)){
        return false;
    }

    var parts = inputDate.split('/');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if(year < 1000 || year > 3000 || month === 0 || month > 12){
        return false;
    }

    // Number Days of every month.
    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    
    // Handler for leap year.
    if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
        monthLength[1] = 29;
    }
    
    return day > 0 && day <= monthLength[month - 1];
}

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[1]-1, mdy[0]);
}

function daydiff(startDate, endDate) {
    return Math.round((endDate-startDate)/(1000 * 60 * 60 * 24)) - 1 ;
}

function showResult(result){
	console.log('\n\n Total Number of elapsed days for the project is: ' + result);
	console.log('=============================================================\n');
}

D.getDaysDiff =  function (startDate, endDate){
//    'use strict';
	var parsedStartDate = Math.round(parseDate(startDate));
	var parsedEndDate = Math.round(parseDate(endDate)); 
	 
	if ( parsedStartDate  > parsedEndDate ){
		var tmpDate = parsedStartDate;
		parsedStartDate = parsedEndDate;
        parsedEndDate = tmpDate;  
    }
	return daydiff(parsedStartDate, parsedEndDate);
};

module.exports = D;


/*
* Main Processing
*/ 

//showSplash();

/*
* INPUT VALIDATIONS
*/

// Check the number of required parameters
/*
if (process.argv.length <  3 || process.argv.length > 4  ){
	console.log('Please input correct number parameters. ');
	showUsage();
}
*/

// Dates Validity Check
/*
if ( !isValidDate(startDate) || !isValidDate(endDate)){
	console.log('Invalid Date. ');
	showUsage();
}
*/

// Validate that the Start Date is earlier than the End Date.
// If not, switch the dates prior processing.
/*
var parsedStartDate = Math.round(parseDate(startDate));
var parsedEndDate = Math.round(parseDate(endDate));  

*/
// Validate the limits

/*
var parsedStartLimit = Math.round(parseDate(startDateMinLimit));
var parsedEndLimit = Math.round(parseDate(endDateMaxLimit));
    
if (parsedStartDate < parsedStartLimit) {
	console.log('The Start Date you inputed: '+ startDate + ' is earlier \n than the Start Date Limit of: ' + startDateMinLimit); 
	showUsage();
}else if(parsedEndDate > parsedEndLimit) {
	console.log('The End Date you inputed: ' + endDate+ ' is later \n than the End Date Limit of: ' + endDateMaxLimit);
	showUsage();
}
*/

// Calculate Dates and Show Result
// showResult(daydiff(parsedStartDate, parsedEndDate));



