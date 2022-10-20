import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuthContext } from "../../contexts/AuthContext";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

export function NewFriendModal() {
  const { user } = useAuthContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const qrCodeUrl = process.env.REACT_APP_BASE_URL + "/friend/" + user.uid;
  return (
    <>
      <Button onClick={onOpen} color={"black"}>
        New Friends
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>プロフを交換する</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <p>QRコードを表示する</p>
              <span>{user.uid}</span>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    maxWidth: 64,
                    width: "80%",
                    height: "auto",
                    margin: "0 auto",
                    backgroundColor: "gray",
                    color: "white",
                    font: "24px bold",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <QRCode
                    value={qrCodeUrl}
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <Link
                  to={`/friend?userId=${user.uid}&userName=${user.displayName}`}
                >
                  リンク
                </Link>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
