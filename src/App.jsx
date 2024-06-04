import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Modal from "./components/Modal";
import AddAndUpdateForm from "./components/AddAndUpdateForm";
import Contact from "./components/Contact";
import useDisclosure from "./hooks/useDisclosure";
function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const contactRef = collection(db, "Contacts");

  const getData = async () => {
    const snapShot = await getDocs(contactRef);

    const filteredData = snapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setContacts(filteredData);
  };
  useEffect(() => {
    getData();
  },[isOpen]);

  return (
    <div className="min-h-screen max-w-[393px] bg-Gray mx-auto pt-4">
      <Nav />
      <Form 
      onOpen={onOpen}
      />
      {isOpen && (
        <Modal>
          <AddAndUpdateForm contactRef={contactRef} getData={getData} />
        </Modal>
      )}
      <div className="w-[90%] flex flex-col gap-1 mx-auto mt-8">
        {contacts.map(({ Name, Email, id }) => (
          <>
            <Contact
              key={id}
              id={id}
              Name={Name}
              Email={Email}
              getData={getData}
              contactRef={contactRef}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
