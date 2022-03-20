const formScreen = {
    render: () => {
        return `
            <div class="formContainer">
                <h1 class="loginTitle">Login<h1>
                <div>
                
                    <input class="inputArea" id="email" type="text" name="email" placeholder="Your email..." ></input>   
                    <span class="inputSplit"></span>
                    <input class="inputArea" id="password" type="password" name="password" placeholder="Your password..." ></input>    
                    <span class="inputSplit"></span>
                    <button class="submitButton" id= "submitButton">Login</button>
                    <p class="loginResponse" id="loginResponse"></p>
                    <a class="loginReset" href="/">Forgot the password</a>
                
                </div>
            </div>
        `
    }
};
export default formScreen;