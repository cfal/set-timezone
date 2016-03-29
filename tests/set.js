console.log(new Date().toString()); // Default system timezone

// Set timezone
require('../src/set-timezone')('America/New_York')

console.log(new Date().toString()); // Replaced timezone (New York/ET)
