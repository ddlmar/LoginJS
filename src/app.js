
const formScreen = {
    render: () => {
        return `
            <div class="formContainer">
                <h1 class="loginTitle">Login<h1>
                <input class="inputArea" type="text" name="email" placeholder="Seu e-mail..." ></input>   
                <span class="inputSplit"></span>
                <input class="inputArea" type="password" name="password" placeholder="Sua senha..." ></input>    
                <span class="inputSplit"></span>
                <button class= "submitButton">Login</button>
                <a class= "loginReset" href="/">Esqueci a senha</a>
            </div>
        `
    }
};
export default formScreen;