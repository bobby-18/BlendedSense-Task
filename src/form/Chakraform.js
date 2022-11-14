import React,{useState} from 'react'
import {
  FormControl,
  FormLabel,
   FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
 function ErrorMessageExample() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <input type="email" value={input} onChange={handleInputChange}  />
      {!isError ? (
        <FormHelperText style={{color:'red'}}>
          Enter the valid email
        </FormHelperText>
      ) : (
        <FormErrorMessage style={{color:'red'}}>Email is required.</FormErrorMessage>
      )}
    </FormControl>
  );
}
export default ErrorMessageExample