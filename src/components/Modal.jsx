import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import useDisclosure from "../hooks/useDisclosure";

const Modal = ({ children,isOpen,onClose }) => {


  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
          <div className="absolute min-h-[200px] bg-white w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="pt-4 px-4 flex justify-end">
              <AiOutlineClose className="cursor-pointer" onClick={()=>onClose()} />
            </div>

            <div className="p-4">{children}</div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;