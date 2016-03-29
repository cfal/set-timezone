# set-timezone

Set the timezone for the default Date object

## Usage

```
console.log(new Date().toString()); // Default system timezone

// Set timezone
require('set-timezone')('America/New_York')

console.log(new Date().toString()); // Replaced timezone (New York/ET)
```

