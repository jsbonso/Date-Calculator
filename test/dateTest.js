/*
*   Mocha Unit Tests for Date Calculator
*   Author: Jon Bonso
*/

var assert = require("assert"); 
var D = require('../app/bcgdv_date_calculator.js');

describe('Date Calculator', function(){

	// Tests the getdaysDiff() function
 
	describe('#getDaysDiff()', function(){	

		it('should return number of days difference.', function () {
		var expectedResult = 19;
      		var startDate = '02/06/1983';
      		var endDate = '22/06/1983';

      		assert.equal(D.getDaysDiff(startDate, endDate), expectedResult);
     	
     	});
     
     
    	it('should return number of days difference consistently.', function () {
       		var expectedResult = 173;
       		var startDate = '04/07/1984';
       		var endDate = '25/12/1984';

      		assert.equal(D.getDaysDiff(startDate, endDate), expectedResult);

     	});
     
     
    	it('should still work even the start and end dates were misplaced', function () {
       		var expectedResult = 1979;
       		var startDate = '03/01/1989';
       		var endDate = '03/08/1983';
      		assert.equal(D.getDaysDiff(startDate, endDate), expectedResult);

     	});
     });  
});  
