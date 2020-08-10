var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/update/didida/98876543/?amount=1");
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementById('count').innerText = this.response.value;
    }
    xhr.send();