import { addDoc } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";

const AddAndUpdateForm = ({ contactRef, getData,onClose }) => {
  const addContact = async (contact) => {
    await addDoc(contactRef, contact);
    alert("Added Successfully!");
  };
  
  return (
    <Formik
      initialValues={{ mail: "", name: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.mail) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)
        ) {
          errors.mail = "Invalid Email address";
        }

        return errors;
      }}
      onSubmit={(values) => {
        addContact(values);
        getData();
        onClose();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 realative">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="h-10 border px-3" />
            <div className=" text-xs text-red-500">
              <ErrorMessage name="name" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field name="mail" className="h-10 border px-3" />
            <div className=" text-xs text-red-500">
              <ErrorMessage name="Email" />
            </div>
          </div>

          <button
            className="self-end border bg-orange px-3 py-1.5 hover:bg-black transition duration-150 hover:text-white"
            onSubmit={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddAndUpdateForm;


