$(document).ready(function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://138.94.55.147:52160/v2/session', true);
    xhr.withCredentials = true;
    xhr.send(null);

    setTimeout(() => { 
        const hsid = getCookie("hsid");
        document.getElementById("labelHsid").innerHTML = "[Cookie] hsid: " + hsid;
    }, 1000);


});

