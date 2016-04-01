function testDate(type) {
    var header = "[" + type + "] ";
    var goodDate = new Date();
    var badDate = new Date(NaN);
    console.log(header + "Date: " + (goodDate + ''));
    console.log(header + "Invalid Date: " + (badDate + ''));
}

testDate('default');

// Set timezone
require('../src/set-timezone')('America/New_York')

testDate('replaced');

