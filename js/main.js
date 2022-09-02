window.addEventListener('load', () => {
    let hourHtml = document.getElementById('hour')
    let minuteHtml = document.getElementById('minute')
    let secondHtml = document.getElementById('second')

    const showTime = () => {
        let date = new Date() 
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()

        hourHtml.textContent = String(hour).padStart(2, "0")
        minuteHtml.textContent = String(minute).padStart(2, "0")
        secondHtml.textContent = String(second).padStart(2, "0")

        setTimeout(showTime, 1000)
    }

    showTime()
});