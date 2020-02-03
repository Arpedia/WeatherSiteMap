time();
function time(){
    var now = new Date();
    now.setHours(now.getHours() - 9);
    document.getElementById("time").innerHTML = now.toLocaleString();
}
setInterval('time()',1000);