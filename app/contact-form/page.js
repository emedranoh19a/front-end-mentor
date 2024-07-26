"use client";

import FieldGroup from "./FieldGroup";
import { FormProvider, useForm } from "react-hook-form";

function Grid({ children }) {
  return <div className="grid grid-cols-1 gap-5 py-4">{children}</div>;
}

function Page() {
  //State
  const formMethods = useForm();
  const { handleSubmit, reset } = formMethods; //TODO we might need errors here

  //Handlers

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  //TODO URL encode your form data in the body of the request
  //TODO add from-name attibute in the AJAX POST request body.(If you haven't added a hidden form^name input to you JS-rendered form.)
  function onSubmit(formData) {
    console.log("submiting");
    console.log(formData);
    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
      //   encode({
      //     "form-name": "contact-form",
      //     ...data,
      //   }),
    })
      .then((response) => {
        reset();
        // navigate(form.getAttribute("action"));
        console.log("Navigating to another page...");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
            onSubmit={handleSubmit(onSubmit)}
            name="contact-form"
            method="post"
            data-netlify="true"
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
              onClick={onSubmit}
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
