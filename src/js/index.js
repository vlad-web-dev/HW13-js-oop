let correctValueTime = (value) => {
    return value < 10 ? '0' + value : value
}

class Clock {
    constructor(element) {
        this.el = element
        this.el.addEventListener('click', () => this.changeFormat())
    }
}

Clock.prototype.render = function () {
    this.date = new Date()
    let hours = correctValueTime(this.date.getHours())
    let minutes = correctValueTime(this.date.getMinutes())
    let seconds = correctValueTime(this.date.getSeconds())
    this.el.innerHTML = this.el.classList.contains('full') ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`
}

Clock.prototype.changeFormat = function () {
    this.el.classList.toggle('full')
}

let time = document.getElementById('time')
let clock = new Clock(time);
clock.render()
setInterval(() => clock.render(), 1000);