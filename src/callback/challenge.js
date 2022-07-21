const XMLHttpRequest = require("xmlhttprequest");
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", urlApi, true);
    xhttp.onreadystatechange = event => {
        if (xhttp.readyState === 4) {
            /* 0: no se ha inicializado
            1: loaded, no hse ha llamado al valor de send
            2: ya se ejecutó el valor de send
            3: interactuando
            4: se ha completado la llamada */
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }
        } else {
            const error = new Error(`Error ${urlApi}`);
            return callback(error, null);
        }
    }
    xhttp.send();
}