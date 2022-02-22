import React, { useState } from 'react';

import './login.css';

import logo from '../../assets/logo1.svg';

export default function Login() {
  const [username, setUsername] = useState('');
  const [userpass, setUserpass] = useState('');  
  return (
    <div className="login-container">
      <form onSubmit="">
        <img src={logo} alt="DevNet"/>
        <h3>Rede Social de Desenvolvedores</h3>
        <input 
          type="email"
          placeholder="Digite seu e-mail."
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input 
          type="password"
          placeholder="Digite sua senha."
          value={userpass}
          onChange={e => setUserpass(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}