import { doc, deleteDoc as firebaseDeleteDoc } from "firebase/firestore";
import AddAndUpdateForm from "./AddAndUpdateForm";
import Modal from "./Modal";
import { useState } from "react";

const Contact = ({
  Name,
  Email,
  id,
  getData,
  isOpen,
  onClose,
  contactRef,
  onOpen,
}) => {
  const deleteContact = async (id) => {
    try {
      await firebaseDeleteDoc(doc(contactRef, id));
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const [update,setUpdate] = useState(false)
  return (
    <>
      <div className="bg-Yellow flex justify-between gap-2 items-center p-2 rounded-lg">
        <div className="img">
          <img src="/images/profile.png" alt="" />
        </div>
        <div className="info mr-auto">
          <div className="name font-medium">
            <h1>{Name}</h1>
          </div>
          <div className="email text-sm opacity-90">
            <h1>{Email}</h1>
          </div>
        </div>
        <div className="editDelete flex gap-2">
          <div className="edit">
            <img
              onClick={()=>{
                setUpdate(true)
                onOpen()
              }}
              src="/images/mdi_circle-edit-outline.png"
              className="cursor-pointer"
              alt=""
            />
          </div>
          <div className="delete">
            <img
              onClick={() => deleteContact(id)}
              src="/images/mdi_trash-can-empty.png"
              className="cursor-pointer"
              alt=""
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <AddAndUpdateForm
            contactRef={contactRef}
            onClose={onClose}
            getData={getData}
            name={Name}
            mail={Email}
            id={id}
            update={update}
          />
        </Modal>
      )}
    </>
  );
};

export default Contact;
