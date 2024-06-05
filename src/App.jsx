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
  const contactRef = collection(db, "contacts");

  const getData = async () => {
    try {
      const snapShot = await getDocs(contactRef);

    const filteredData = snapShot?.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setContacts(filteredData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="min-h-screen max-w-[393px] bg-Gray mx-auto pt-4">
      <Nav />
      <Form onOpen={onOpen} />
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <AddAndUpdateForm contactRef={contactRef} onClose={onClose} getData={getData} />
        </Modal>
      )}
      <div className="w-[90%] flex flex-col gap-1 mx-auto mt-8">
        {contacts.map(({ name, mail, id }) => (
          <>
            <Contact
              key={id}
              id={id}
              Name={name}
              Email={mail}
              getData={getData}
              contactRef={contactRef}
              isOpen={isOpen}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
