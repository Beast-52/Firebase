import { addDoc } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import useDisclosure from "../hooks/useDisclosure";

const AddAndUpdateForm = ({ contactRef, getData }) => {
  const addContact = async (contact) => {
    await addDoc(contactRef, contact);
    alert("Added Successfully!");
  };
  const { onClose } = useDisclosure();
  return (
    <Formik
      initialValues={{ Email: "", Name: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.Email) {
          errors.Email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
        ) {
          errors.Email = "Invalid Email address";
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
            <Field name="Name" className="h-10 border px-3" />
            <div className=" text-xs text-red-500">
              <ErrorMessage name="Name" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="Email">Email</label>
            <Field name="Email" className="h-10 border px-3" />
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

/*
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ Email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;*/
