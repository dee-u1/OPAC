import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const [loginData, setLoginData] = useState({
            username: '',
            password: ''
        }
    )

    const history = useHistory();
    //alert(history);      

    const inputChangeHandler = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        });
    }

    const btnClickHandler = () => {
        if (loginData.username==="test" && loginData.password==="test"){
            props.adminLogin(true);
            alert("Credentials found");
            history.push("/home");
        }
        else{
            alert("Wrong username or password");
        }
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Log-in</h3>

                <div className="form-group">
                    <label>Username:</label>
                    <input 
                        name="username"
                        type="text" 
                        className="form-control" 
                        placeholder="Enter username" 
                        value={loginData.username}
                        onChange={inputChangeHandler} 
                    />
                </div>
                <br />
                <div className="form-group">
                    <label>Password:</label>
                    <input 
                        name="password"
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        value={loginData.password}
                        onChange={inputChangeHandler} 
                    />
                </div>
                <br />
                <button className="btn btn-primary btn-block" onClick={btnClickHandler} >Submit</button>
        
            </div>
      </div>
    );
}

export default Login;