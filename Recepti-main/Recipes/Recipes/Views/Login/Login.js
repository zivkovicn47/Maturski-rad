

function register() {
    var http = new XMLHttpRequest();
    var url = 'https://localhost:44395/api/Users';
    var params = '';
    debugger;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');

    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }

    var fName = document.getElementById("reg-f-name").value;
    var lName = document.getElementById("reg-l-name").value;
    var email = document.getElementById("reg-email").value; 
    var password = document.getElementById("reg-password").value; 
    let data = `{
                  "name": "` + fName + `",
                  "lastName": "`+ lName +`",
                  "password": "`+ password +`",
                  "email": "`+ email +`",
                  "userName": "`+ email +`",
                  "usedRecipes": null
                }`;
    localStorage.setItem("data", data);
    console.log(1);
    http.send(data);
}
