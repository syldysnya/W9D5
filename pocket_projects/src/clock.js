import { htmlGenerator } from "./warmup";

class Clock {
    constructor() {
        const currentTime = new Date();

        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        const timeString = [this.hours, this.minutes, this.seconds].join(":");
        return timeString;
        // console.log(timeString);
    }

    _tick() {
        this._incrementSeconds();
        // console.log(this.printTime());
        htmlGenerator(this.printTime(), clockElement);
    }

    _incrementSeconds() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this._incrementMinutes();
        }
    }

    _incrementMinutes() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this._incrementHours();
        }
    }

    _incrementHours() {
        this.hours = (this.hours + 1) % 24;
    }
}

const clockElement = document.getElementById('clock');
const clock = new Clock();

