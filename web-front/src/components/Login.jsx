import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Login = ({setloginchange}) => {
  const [t]=useTranslation("global")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async () => {
    if(!name || !email || !password){

      alert("please fill the full information")
      return
      
    }
    else{
      navigate("/Farmer");
      alert("login successfully")

    }
    setloginchange("welcome")

    try {
      const response = await axios.post("http://localhost:3111/api/agritech", {
        name,
        email,
        password,
      });
      
      if (response.status === 200) {
        
        setEmail('');
        setName('');
        setPassword('');
      } else {
       alert("invalid")
      }
    } catch (err) {
    alert("error occures")
    }
  };



  return (
    <div id='boxpass'>
      <div id="namebox">
        <h1>{t("loginnn.name")}</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div id="emailbox">
        <h1>{t("loginnn.email")}</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div id="passbox">
        <h1>{t("loginnn.password")}</h1>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div id="btnbox">
       <button onClick={handleSubmit} id='bbutton' style={{height:"30px",width:"70px",background:"green",color:"white"}}>Submit</button>
      </div>

      <Link to="/Loginn">{t("loginnn.already")}</Link>

    
    </div>
  
  );
};

export default Login;
