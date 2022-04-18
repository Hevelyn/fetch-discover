const url = "http://localhost:5500/api";

//GET
function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
};

//GET
function getUser() {
    fetch(`${url}/1`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))   
};

//POST
function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
        .then(data => aletApi. textContent = data)
        .catch(error => console.error(error))
};

//PUT
function updateUser(modifyUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(modifyUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    } )
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
};

function deleteUser(id){
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
};

//New user
const newUser = {
    name: "Olivia",
    avatar: "http://lorempixel.com.br/600/500",
    city: "Rio Grande do Sul"
};

//User modification
const modifyUser = {
    name: "Sandro Rodrigues",
    avatar: "http://lorempixel.com.br/450/400",
    city: "Recife"
};

addUser(newUser)

getUsers();

getUser();

updateUser(modifyUser, 1)

deleteUser(15)