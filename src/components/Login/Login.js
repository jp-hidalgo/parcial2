import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormattedMessage, useIntl } from 'react-intl';

async function loginUser(credentials) {
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({setToken}) {
    const [login, setUserName] = useState();
    const [password, setPassword] = useState();
    const intl = useIntl();
    const formatMessage = intl.formatMessage;
    const notify = () => toast(formatMessage({ id: 'toastMessage', defaultMessage: 'Logged in' }));
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          login,
          password
        });
        if(token.status ==="success"){
            notify()
            setToken(token);
        }
      }
    const handleCancel =()=>{
      setUserName('');
      setPassword('');
    };

  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <form onSubmit={handleSubmit} style={{ border: '1px solid black', padding: '20px' }}>
    <FormattedMessage id="loginTitle" defaultMessage="Login" />
      <table>
        <tbody>
          <tr>
            <td>
              <label>
              <p><FormattedMessage id="userLabel" defaultMessage="Username" /></p>
                <input type="text" onChange={(e) => setUserName(e.target.value)} />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <p><FormattedMessage id="passwordLabel" defaultMessage="Password" /></p>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button type="submit" style={{ backgroundColor: 'green', color: 'white', marginRight: '10px' }}>
                <FormattedMessage id="submitButton" defaultMessage="Submit" />
                </button>
                <button type="button" onClick={handleCancel} style={{ backgroundColor: 'red', color: 'white' }}>
                <FormattedMessage id="cancelButton" defaultMessage="Cancel" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    <ToastContainer/>
  </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}