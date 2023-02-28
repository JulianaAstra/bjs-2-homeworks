class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (time, callback) {
        if (arguments.length < 2 || time === null) {
            throw new Error ('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.find(call => call === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        const object = {callback: callback, time: time, canCall: true};

        this.alarmCollection.push(object);

    }
    
    removeClock (time) {
        this.alarmCollection = this.alarmCollection.filter(item => item['time'] !== time);
    }

    getCurrentFormattedTime () {
        const date = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit"
        });
        return `${date}`;
    }

    start () {
        if (this.intervalId !== null) {
            return;
        }

        const interval = setTimeout (() => {
            const date = this.getCurrentFormattedTime();           
            this.alarmCollection.forEach((item) => {
                 if (date === item['time']) {
                    item['canCall'] = false;
                    item.callback();
                 }
            });
        }, 1000);
        this.intervalId = interval;
    }

    stop () {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls () {
        this.alarmCollection.forEach (item => item['canCall'] = true);
    }
    
    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
    
}