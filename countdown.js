let timerInterval;
let time = 60;

function starttimer()
{
    clearInterval(timerInterval)
    time = 60
    document.getElementById('timer').innerHTML= time

    timerInterval = setInterval(() => {
        time --
        document.getElementById('timer').innerHTML = time

        if(time == 0)
        {
            clearInterval(timerInterval)
            document.getElementById("result").innerHTML = "Time Is Up"
        }
    },1000)
}