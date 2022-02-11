import React from 'react'
import { useHistory } from "react-router-dom";
import "../styles/return_home_button.css"
const ReturnHome = () => {
    let history = useHistory();
    return (
        <>
          <button onClick={() => history.goBack()}>Back</button>
        </>
    );

}

export default ReturnHome; 