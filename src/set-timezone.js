var time = require('time');

module.exports = function(timezone) {
    time.tzset(timezone);
    Date = time.Date;
};
