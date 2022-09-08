class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.'); 
        }
        if (this.alarmCollection.find(item => item.id === id )) {
            return console.error("Будильник с таким id существует.");
        }     
        this.alarmCollection.push({id, time, callback});
    }

    printAlarms() {
        return this.alarmCollection.forEach((item) => {console.log('Будильник №' + 
               item.id + ' заведен на '+ item.time)});
    }

    removeClock(id) {
        let index = this.alarmCollection.find(item => item.id === id );
        if (index) {
            console.log("Список звонков до удаления:");
            this.printAlarms();
            this.alarmCollection.splice(this.alarmCollection.indexOf(index), 1);
            console.log("Список звонков после удаления:");
            this.printAlarms();
            return true;
        } else {
        return false;
        }
    }

    getCurrentFormattedTime() {
        let currentTime = new Date();
        return ("0" + currentTime.getHours()).slice(-2) + ":" + 
               ("0" + currentTime.getMinutes()).slice(-2);
    }

    start() {
        let checkClock = (time, callback) => {
            if (time === this.getCurrentFormattedTime()) {
                return callback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach((item) => checkClock(item.time, item.callback)), 10000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}