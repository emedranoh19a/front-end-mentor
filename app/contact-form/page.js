"use client";

import { useState } from "react";
import FieldGroup from "./FieldGroup";
import { FormProvider, useForm } from "react-hook-form";

function Grid({ children }) {
  return <div className="grid grid-cols-1 gap-5 py-4">{children}</div>;
}

function Page() {
  //State
  const formMethods = useForm();
  const { handleSubmit, reset } = formMethods; //TODO we might need errors here

  //   const [status, setStatus] = useState(null);
  //   const [error, setError] = useState(null);

  //Handlers
  //This function works on Netlify!
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //TODO Get the errors, return if there are some
    //TODO
    try {
      //   setStatus("pending");
      //   setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.status === 200) {
        // setStatus("ok");
      } else {
        // setStatus("error");
        // setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      //   setStatus("error");
      //   setError(`${e}`);
    }
  };

  //TODO ideas de API. (TODAS deberían resultar)
  //Google Spread sheet.
  //Netlify registration OR Vercel registration.
  //Email sender.
  //Supabase
  return (
    <div className="w-screen h-screen bg-emerald-50 grid place-content-center">
      <div className="bg-white w-11/12  h-fit p-6">
        <FormProvider {...formMethods}>
          <form
            onSubmit={handleFormSubmit}
            name="contact-form"
            // method="POST"
            // data-netlify="true"
            // action="/"
            // id="contact-form"
          >
            {/* Note: value of the next input must match the form name */}
            <input type="hidden" name="form-name" value="contact-form" />
            {/* TODO we may want to build static files. build: next build && next export */}
            <h1 className="text-emerald-950 text-3xl font-bold">Contact Us</h1>
            <Grid>
              <FieldGroup fieldName="firstName" label="First Name" />
              <FieldGroup fieldName="lastName" label="Last Name" />
              <FieldGroup fieldName="email" label="Email Address" />
            </Grid>
            <button
              type="submit"
              //   onClick={onSubmit}
              className="w-full bg-emerald-800 text-white py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Page;
