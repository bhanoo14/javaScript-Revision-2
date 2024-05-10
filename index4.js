

function stopWatch() {
    let running, startTime, endTime, duration = 0;

    this.start = function() {
        if (running) {
            throw new Error("Stopwatch is not stopped yet")
        }

        running = true;
        startTime = new Date()
    }

    this.stop = function() {
        if (!running) {
            throw new Error("Stopwatch is not running yet")
        }

        running = false;
        endTime = new Date();

        const second = (startTime.getTime() - endTime.getTime()) / 1000
        duration += second
    }

    this.reset = function () {
        running = false;
        startTime = null;
        endTime = null;
        duration = 0;
    }

    Object.defineProperty(this, duration, {
        get: function () {
            return duration;
        }
    })

}