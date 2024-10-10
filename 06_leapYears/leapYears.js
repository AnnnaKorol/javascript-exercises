const leapYears = function(year) {
if (year/4 && !year/100 ===0 || !year/1000===0) {
    return true; 
} else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;


//1) Should be divided by 400 years;
//2) Should not be divided by 100 year; 
//3) The leap year is every 4th year;
