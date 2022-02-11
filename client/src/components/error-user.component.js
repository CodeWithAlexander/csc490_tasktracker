import React from 'react';
import "../styles/user_error.css";

const ErrorUser = (status,setStatus) => {

  return (
    <div className='user__error'><span>{status.status}</span></div>
    
  )
}

export default ErrorUser;