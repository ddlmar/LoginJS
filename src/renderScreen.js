import formScreen from "./app.js";


const URL = "https://reqres.in/api/"

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



const router = () => {
    const screen = document.getElementById("mainContainer");
    screen.innerHTML = formScreen.render();
    
    const submitButton = document.getElementById("submitButton");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    
    submitButton.addEventListener('click', async () => {
        let loginResponse = await login(emailField.value, passwordField.value);
        const spanElement = document.getElementById('loginResponse');
        if (loginResponse?.error) {
            spanElement.innerHTML = 'Incorret email or password';
            spanElement.classList.remove('success');
            spanElement.classList.add('error');      
        }
        if (loginResponse?.token) {  
            let tokenValue = loginResponse.token;
            spanElement.innerHTML = 'Login succesful';
            spanElement.classList.remove('error');
            spanElement.classList.add('success');
        }
    })
};

window.addEventListener("load", router);
