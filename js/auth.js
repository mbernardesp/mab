$(document).ready(function () {

    //Clear GLOBO_ID cookie
    document.cookie = "GLOBO_ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    $("#login").click(function () {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://138.94.55.147:52160/v2/auth/marcelo', true);
        xhr.withCredentials = true;
        xhr.send(null);

        setTimeout(() => { 
            const globoId = getCookie("GLOBO_ID");
            document.getElementById("labelAuth").innerHTML = "[Cookie] GLOBO_ID: " + globoId;
        }, 1000);

    });

    $("#logout").click(function () {

        document.cookie = "GLOBO_ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.getElementById("labelAuth").innerHTML = "";

    });


});