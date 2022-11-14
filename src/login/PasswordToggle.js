import React,{useState} from 'react'
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
library(faEye,faEyeSlash);
const PasswordToggle = () => {
    const [visible,setVisible]=useState(false);
  
   const Icon =
    <FontAwesomeIcon icon={visible ? "eye-slash" : "eye"}/>;
    const InputType = visible ? "text":"password";

    return [InputType,Icon]
}

export default PasswordToggle
