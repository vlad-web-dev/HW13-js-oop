let correctValueTime = (value) => {
    return value < 10 ? '0' + value : value
}

class Clock {
    constructor(element) {
        let el = element
        el.addEventListener('click', () => this.changeFormat())
        this.render = function () {
            this.date = new Date()
            let hours = correctValueTime(this.date.getHours())
            let minutes = correctValueTime(this.date.getMinutes())
            let seconds = correctValueTime(this.date.getSeconds())
            el.innerHTML = el.classList.contains('full') ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`
        }
        this.changeFormat = function () {
            el.classList.toggle('full')
        }
    }
}

let time = document.getElementById('time')
let clock = new Clock(time);
clock.render()
setInterval(() => {
    clock.render(); console.log(clock)
}, 1000);