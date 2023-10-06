import "./createAdmin.css";


import { useState } from "react";


//components
import Sider from '../../../components/sider/Sider';
import InlineErrorMsg from "../../../components/errorMessages/InlineErrorMsg";


const CreateAdmin = ({pf, serverSuccess, serverError, adminData}) => {

    //local state to store user inputs
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");



    const createAdmin = async(e) => {
        e.preventDefault();

        const adminInfo = { username, email, password };

        const response = await fetch(`http://127.0.0.1:5000/api/admin/register`, {              
            
            // Adding method type
            method: "POST",
            
            // Adding body or contents to send
            body: JSON.stringify(adminInfo),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        const data = await response.json(); 

        //check radmin registration status
        if(response.status === 500) {
            serverError(data.msg);

        }else if (response.status !== 201){
            setErrMsg(data.msg);

        }else { 
            setUsername("");
            setEmail("");
            setPassword("");
            serverSuccess(data.msg);
        }
    }

    return(
        <div className="createAdmin">
            <main className='-board'>
                <Sider pf={ pf } serverSuccess= {serverSuccess} adminData={adminData} />
                <div className="main-content">
                    <h1 id='dash_heading' className='dash_heading'>Create Admin</h1>
                    <div id="sub-content" className="sub-content">
                        <form className="adminForm" method="Post">
                            <InlineErrorMsg errMsg={ errMsg }/>
                            <input onChange={ (e) => {setUsername(e.target.value)}} type="text" name="username" id="username" value={username} placeholder="Admin Username" required/>
                            <input onChange={ (e) => {setEmail(e.target.value)}} type="email" name="email" id="email" value={email} placeholder="Admin Email"/>
                            <input onChange={ (e) => {setPassword(e.target.value)}} type="password" name="password" id="password" value={password} placeholder="Admin Password" required/>
                            <button onClick={createAdmin} type='submit'>Create Admin</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CreateAdmin;