import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xrgnlooy");
  if (state.succeeded) {
    alert('Form Submitted!');
  }
  return (
    <div className="flex flex-col items-center justify-center py-32 font-poppins">
      <h1 className="text-center text-4xl text-[#BFA181] w-full">Contact Me</h1>{" "}
      <form
        className="w-[70%] px-5 py-8 flex flex-col"
        onSubmit={handleSubmit}
        method="POST"
        action="https: //formspree.io/f/xrgnlooy"
      >
        {/* FIRST AND LAST */}
        <div className="flex flex-col">
          {/* First */}
          <div className="flex flex-col">
            <label htmlFor="fName" id="fName" name="fName"></label>
            <input
              type="text"
              className="rounded bg-[#323744] px-3 py-1 text-white outline-0 focus:border border-slate-600 my-2"
              placeholder="First Name"
            />
          </div>
          {/* First */}
          {/* Last */}
          <div>
            <label htmlFor="lName" id="lName" name="lName"></label>
            <input
              type="text"
              className="rounded bg-[#323744] px-3 py-1 text-white outline-0 focus:border border-slate-600 my-2"
              placeholder="Last Name"
            />
          </div>
          {/* Last */}
        </div>
        {/* FIRST AND LAST */}
        {/* Email */}
        <label htmlFor="email"></label>
        <input
          type="email"
          className="rounded bg-[#323744] px-3 py-1 text-white outline-0 focus:border border-slate-600 my-2"
          placeholder="Email"
          name="email"
          id="email"
        />
        {/* Email */}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          className="rounded bg-[#323744] px-3 py-1 text-white outline-0 focus:border border-slate-600 my-2 min-h-32"
          placeholder="Your Message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="w-fit px-4 py-1 rounded self-end flex my-6 bg-[#BFA181] text-stone-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
