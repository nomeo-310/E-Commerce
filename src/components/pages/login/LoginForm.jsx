import React from 'react';
import './login-form.scss';
import { useState } from 'react';
import userImg from './user.png';
import Login from './Login';
import Register from './Register';


const LoginForm = ({closeLogin}) => {
  const [activeTab, setActiveTab] = useState('login');

  const Nav =({activeTab, onTabChange})=> {
    const itemClass = (tabName) => {
      return (
        `nav-item ${activeTab === tabName ? 'selected' : ''}`
      );
    };
    return (
      <div className="nav">
        <button className={itemClass('login')} onClick={() => onTabChange('login')}>login</button>
        <button className={itemClass('register')} onClick={() => onTabChange('register')}>register</button>
      </div>
    );
  };

  const Content =({tab})=> {
    switch (tab) {
      default:
      case 'login' :
        return <Login userImg={userImg}/>;
      case 'register':
        return <Register userImg={userImg}/>
    }
  };

  return (
    <div className="login-form">
      <div className="top">
        <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
        <div className="close-button">
          <i className="fa-solid fa-x" onClick={closeLogin}></i>
        </div>
      </div>
      <div className="bottom">
        <Content tab={activeTab}/>
      </div>
    </div>
  )
}

export default LoginForm;
