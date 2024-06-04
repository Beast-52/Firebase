// useDisclosure.jsx
import { useState } from "react";

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onOpen = () => {
    setIsOpen(true);
    console.log(isOpen)
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return { onClose, onOpen, isOpen,setIsOpen };
};

export default useDisclosure