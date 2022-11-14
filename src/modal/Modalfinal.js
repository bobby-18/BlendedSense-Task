import React from 'react'
 import BasicUsage from "../modal/modal";
  import { ChakraProvider } from "@chakra-ui/react";

function Modalfinal() {
  return (
    <div>
       <ChakraProvider>
          <BasicUsage />
        </ChakraProvider> 
    </div>
  );
}

export default Modalfinal
