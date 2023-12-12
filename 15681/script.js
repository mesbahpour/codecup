const apiUrl = "http://localhost:3000/data";
let data = [];
function UserAction() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);

            document.getElementById('likes').innerHTML=data.count;
        }
    };
    xhttp.open("GET", apiUrl, true);
    xhttp.send("Your JSON Data Here");
}

UserAction();
