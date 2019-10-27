function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            console.log("hi");
            display.textContent  = "00:00";
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 0.1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
