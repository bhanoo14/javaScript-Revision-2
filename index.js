// Define the Stop object
function Stop() {
    this.start = null;  // start time
    this.stop = null;   // stop time
    this.duration = 0;  // duration between start and stop

    // Method to start the timer
    this.startTimer = function() {
        this.start = new Date(); // set start time
    }

    // Method to stop the timer
    this.stopTimer = function() {
        this.stop = new Date(); // set stop time
        this.calculateDuration(); // calculate duration
    }

    // Method to calculate duration
    this.calculateDuration = function() {
        if (this.start && this.stop) {
            this.duration = this.stop - this.start; // calculate duration
        } else {
            console.error("Cannot calculate duration. Start and/or stop time is not set.");
        }
    }

    // Method to reset the timer
    this.resetTimer = function() {
        this.start = null;
        this.stop = null;
        this.duration = 0;
    }
}

// Usage
var stopwatch = new Stop(); // create a new instance of Stop object
stopwatch.startTimer(); // start the timer
setTimeout(function() {
    stopwatch.stopTimer(); // stop the timer after 2 seconds
    console.log("Duration:", stopwatch.duration + "ms");
}, 2000);
