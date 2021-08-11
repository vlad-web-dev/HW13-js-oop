let correctValueTime = (value) => {
    return value < 10 ? '0' + value : value
}

class Clock {
    constructor(element) {
        this.el = element
        this.el.addEventListener('click', () => this.changeFormat())
        this.fullDate = true
    }
    render() {
        this.date = new Date()
        let hours = correctValueTime(this.date.getHours())
        let minutes = correctValueTime(this.date.getMinutes())
        let seconds = correctValueTime(this.date.getSeconds())
        this.el.innerHTML = this.fullDate ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`
    }
    changeFormat() {
        this.fullDate = !this.fullDate
    }
}

let time = document.getElementById('time')
let clock = new Clock(time);
clock.render()
setInterval(() => clock.render(), 1000);