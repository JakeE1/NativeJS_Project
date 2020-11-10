function timer(id, deadLine) {

    function getTimeRemaining(endtime) {

        const conclusionDate = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(conclusionDate / (1000 * 60 * 60 * 24)),
            hours = Math.floor((conclusionDate / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((conclusionDate / (1000 * 60)) % 60),
            seconds = Math.floor((conclusionDate / (1000)) % 60);

        return {
            'conclusionDate': conclusionDate,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function setCLock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
    setCLock(id, deadLine);
}

export default timer;