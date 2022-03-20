import formScreen from "./app.js";

const URL = "https://reqres.in/api/"

// async function listUsers(page = 1) {
//     const query = URL + 'users?page=' + page
//     const response = await fetch(query, 
//         {
//             method: 'GET', 
//             headers: {
//                 'Content-Type': 'application/json' 
//             },
//         })
//     const json = await response.json()
//     return json.data
// }

async function login(email, password) {
    const url = URL + 'login'
    const request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        }, 
        body: JSON.stringify({
            email: email,
            password: password
        })
    }
    const response = await fetch(url, request);
    const json = response.json();
    return json;
}

// async function register(email, password) {
//     const url = URL + 'register'
//     const request = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json' 
//         }, 
//         body: JSON.stringify({
//             email: email,
//             password: password
//         })
//     }
//     const response = await fetch(url, request)
//     const json = response.json()
//     return json
// }

const router = () => {
    const screen = document.getElementById("mainContainer");
    screen.innerHTML = formScreen.render();
    
    const submitButton = document.getElementById("submitButton");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    
    submitButton.addEventListener('click', async () => {
        let loginResponse = await login(emailField.value, passwordField.value);
        const spanElement = document.getElementById('loginResponse');
        if (loginResponse.error == "Missing email or username") {
            spanElement.innerHTML = 'Incorret email or password';
            spanElement.style.color = '#e7473c';
            spanElement.style.animation = '0.1s linear 3 alternate slidein';  
        }
        if (loginResponse.token == 'QpwL5tke4Pnpja7X4') {
            spanElement.style.color = '#303030';
            spanElement.innerHTML = 'Login succesful';
        }
    })
};

window.addEventListener("load", router);
