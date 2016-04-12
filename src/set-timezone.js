var time = require('set-timezone-time');

module.exports = function(timezone) {
    var origOffset = new Date().getTimezoneOffset();
    time.tzset(timezone);
    var newOffset = (new time.Date().getTimezoneOffset() - origOffset) * 60 * 1000;
    var origDate = Date;
    Date = time.Date;
    Date.parse = function(s) {
        var d = origDate.parse.apply(origDate, arguments);
        if (!isNaN(d) && !/^\d{4}\-[01]\d\-[0-3]\d/.test(s)) {
            // Offset Non-ISO dates
            d += newOffset;
        }
        return d;
    };
    Date.now = function() { return new time.Date(); };
};
