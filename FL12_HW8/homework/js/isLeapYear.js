let isLeapYear = function(date){
    let currentYear = new Date(date).getFullYear();
    if (currentYear.isNaN) {
        return('Invalid Date');
    } else {
        if(currentYear % 4 === 0 && currentYear % 100 !== 0) {
            return (currentYear + ' is a leep year');
        } else {
            return (currentYear + ' is not a leep year')
        }
    }
}

isLeapYear('1440-01-01 00:00:00');
isLeapYear('1800-01-01 00:00:00123');
isLeapYear('2020-01-01 00:00:00');
isLeapYear('2021-01-01 00:00:00');