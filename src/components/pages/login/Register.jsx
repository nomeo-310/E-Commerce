import { useState } from "react";

const Register =({userImg})=> {
    const [userClass, setUserClass] = useState('');
    const [mailClass, setMailClass] = useState('');
    const [passClass, setPassClass] = useState('');
    const [cPassClass, setCPassClass] = useState('');
    const [userErrorText, setUserErrorText] = useState('');
    const [mailErrorText, setMailErrorText] = useState('');
    const [passErrorText, setPassErrorText] = useState('');
    const [cPassErrorText, setCPassErrorText] = useState('');
  
    const [user, setUser] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [cPass, setCPass] = useState('');
  
    const validText = 'this looks good!';
  
    const validation =()=> {
      if (user === '') {
        setUserClass('user error');
        setUserErrorText('username is required!');
      } else {
        setUserClass('user valid');
        setUserErrorText(validText);
      }
  
      if (mail === '') {
        setMailClass('mail error');
        setMailErrorText('mail is required!');
      } else if (!/.+@.+\.[A-Za-z]+$/.test(mail)) {
        setMailClass('mail error');
        setMailErrorText('must include @!');
      } else {
        setMailClass('mail valid');
        setMailErrorText(validText);
      }
  
      if (pass === '') {
        setPassClass('error pass');
        setPassErrorText('passowrd is required!');
      } else if (pass.length >=8 && pass.match(/[A-Z]/) && pass.match(/[a-z]/) && pass.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)) {
        setPassClass('pass valid');
        setPassErrorText('this password is strong! it looks good!');
      } else {
        setPassClass('pass error');
        setPassErrorText('this password is weak, make it 8 letter with special characters')
      }
  
      if (cPass === '') {
        setCPassClass('cpass error');
        setCPassErrorText('please confirm password!');
      } else if (cPass !== pass) {
        setCPassClass('cpass error');
        setCPassErrorText('password does not match!');
      } else {
        setCPassClass('cpass valid');
        setCPassErrorText('password confirmed!')
      }
    }
    
    const handleFormSubmit =(event)=> {
      event.preventDefault();
      validation();
    };
    return (
      <div className="register">
        <div className="user-image">
          <img src={userImg} alt="user_image" />
        </div>
        <form action="">
        <div className={`input ${userClass}`}>
            <input type="text" placeholder="your username" value={user} onChange={(event) => setUser(event.target.value)}/>
            <div className="error-icons">
              <i className="fa-solid fa-exclamation-circle"></i>
              <i className="fa-solid fa-check"></i>
            </div>
            <p>{userErrorText}</p>
          </div>
          <div className={`input ${mailClass}`}>
            <input type="email" placeholder="your email address" value={mail} onChange={(event) => setMail(event.target.value)}/>
            <div className="error-icons">
              <i className="fa-solid fa-exclamation-circle"></i>
              <i className="fa-solid fa-check"></i>
            </div>
            <p>{mailErrorText}</p>
          </div>
          <div className={`input ${passClass}`}>
            <input type="password" placeholder="your password" value={pass} onChange={(event) => setPass(event.target.value)}/>
            <div className="error-icons">
              <i className="fa-solid fa-exclamation-circle"></i>
              <i className="fa-solid fa-check"></i>
            </div>
            <p>{passErrorText}</p>
          </div>
          <div className={`input ${cPassClass}`}>
            <input type="password" placeholder="confirm your password" value={cPass} onChange={(event) => setCPass(event.target.value)}/>
            <div className="error-icons">
              <i className="fa-solid fa-exclamation-circle"></i>
              <i className="fa-solid fa-check"></i>
            </div>
            <p>{cPassErrorText}</p>
          </div>
          <button type="submit" onClick={handleFormSubmit}>register</button>
        </form>
      </div>
    );
  };

  export default Register;