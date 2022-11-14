import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="fpassword">
        <button onClick={onOpen} className="forgot-password">
          Forgot password?
        </button>
      </div>
      <div>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="m">
            <p className="h">Recover password </p>
            <ModalCloseButton />
            <ModalBody>
              <div fontWeight="bold" mb="1rem" className="t">
                Enter the email associated with your address
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                style={{
                  width: "80%",
                  fontSize: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  paddingLeft: "8px",
                  borderColor: "black",
                }}
              />
            </ModalBody>

            <ModalFooter>
              <button className="bcancel" mr={3} onClick={onClose}>
                Cancel
              </button>
              <div className="bbg">
                <button className="bsend">Send Reset Link</button>
              </div>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
export default BasicUsage;
