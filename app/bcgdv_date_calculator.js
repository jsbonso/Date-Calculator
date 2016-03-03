/*
* Number-Of-Days-Between-Dates Calculator
* Author: Jonjon Bonso 	-	jsbonso@gmail.com
*  
*/ 


// Date Calculator
var D = {};
var path = require('path');
var filename = path.basename(__filename);
var startDate = process.argv[2];
var endDate = process.argv[3];


function isValidDate(inputDate){

    // Regex for validate date format for DD/MM/YYYY
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(inputDate)){
        return false;
    }

    var parts = inputDate.split('/');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Dates should not be < 1000 or > 3000 and month is not >12
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

D.getDaysDiff =  function (startDate, endDate){
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


