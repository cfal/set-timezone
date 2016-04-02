var time = require('set-timezone-time');

module.exports = function(timezone) {
    time.tzset(timezone);
    Date = time.Date;
};
