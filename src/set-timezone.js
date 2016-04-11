var time = require('set-timezone-time');

module.exports = function(timezone) {
    time.tzset(timezone);
    var origDate = Date;
    Date = time.Date;
    Date.parse = origDate.parse.bind(origDate);
    Date.now = function() { return new time.Date(); };
};
