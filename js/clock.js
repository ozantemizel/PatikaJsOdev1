function userName() {
    let name = prompt("Please put your name");
    name = name.toUpperCase();
    document.getElementById("myName").innerText = name
}

function whatIsTheTime() {
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDay()

    if(day==1) {
        day="PAZARTESİ"
    } else if (day==2){
        day = "SALI"
    } else if (day==3) {
        day = "ÇARŞAMBA"
    } else if (day==4) {
        day = "PERŞEMBE"
    } else if (day==5) {
        day = "CUMA"
    } else if (day==6) {
        day = "CUMARTESİ"
    } else if (day==7){
        day = "PAZAR"
    }

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hour+":"+minutes+":"+seconds+" "+day ;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time
     // setTimeout ile ekranda zamanın devamlı akışını sağladık.
    setTimeout(whatIsTheTime, 1);
}

userName();
whatIsTheTime();