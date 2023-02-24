import { useState } from "react";

const Login =({userImg})=> {
    const [mailClass, setMailClass] = useState('');
    const [passClass, setPassClass] = useState('');
    const [mailErrorText, setMailErrorText] = useState('');
    const [passErrorText, setPassErrorText] = useState('');
  
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
  
    const validText = 'this looks good!';
  
    const validation =()=> {
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
    };
    
    const handleFormSubmit =(event)=> {
      event.preventDefault();
      validation();
    };

    return (
      <div className="login">
        <div className="user-image">
          <img src={userImg} alt="user_image" />
        </div>
        <form action="">
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
          <button type="submit" onClick={handleFormSubmit}>login</button>
        </form>
      </div>
    );
  };

  export default Login;
