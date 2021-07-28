import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const [show, setShow] = useState(props.show);
    const [loginData, setLoginData] = useState({
            username: '',
            password: ''
        }
    )

    const history = useHistory();

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
            history.push("/books");
            setShow(false);
        }
        else{
            alert("Wrong username or password");
        }
    }

    const handleClose = () => {
        setShow(false);
        props.handleClose(false);
        history.push("/");
    };

    return (
        <>
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log-in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                <div className="form-group">       
                    <label htmlFor="username">Username:</label>
                    <input 
                        name="username"
                        type="text" 
                        className="form-control" 
                        placeholder="Enter username" 
                        value={loginData.username}
                        onChange={inputChangeHandler} 
                    />
                </div>
                <div className="form-group">       
                    <label htmlFor="author">Password:</label>
                    <input 
                        name="password"
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        value={loginData.password}
                        onChange={inputChangeHandler} 
                    />
                </div>                         
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >Close</Button>
                    <Button variant="primary" onClick={btnClickHandler}>Ok</Button>
                </Modal.Footer>
            </Modal>         
        </>
    );
}

export default Login;