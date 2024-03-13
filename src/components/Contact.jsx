import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xrgnlooy");
  if (state.succeeded) {
    alert("Form Submitted!");
  }
  return (
    <div
      className="flex flex-col items-center justify-center py-32 font-poppins"
      id="contactMe"
    >
      <h1 className="text-center text-4xl my-8 text-[#BFA181] w-full md:text-yellow-300 lg:text-white xl:text-blue-700 2xl:text-white">
        Let's Connect!
      </h1>{" "}
      <form
        className="w-[400px] md:w-[500px] lg:w-[700px] px-5 py-8 flex flex-col"
        onSubmit={handleSubmit}
        method="POST"
        action="https: //formspree.io/f/xrgnlooy"
      >
        {/* FIRST AND LAST */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
          {/* First */}
          <div className="flex flex-col w-full">
            {/* <label htmlFor="fName" id="fName" name="fName"></label> */}
            <input
              type="text"
              className="rounded bg-[#323744] px-3 py-2 text-white my-2 outline-none ring-transparent focus:ring-1 focus:ring-gray-600"
              placeholder="First Name"
            />
          </div>
          {/* First */}
          {/* Last */}
          <div className="flex flex-col w-full">
            {/* <label htmlFor="lName" id="lName" name="lName"></label> */}
            <input
              type="text"
              className="rounded bg-[#323744] px-3 py-2 text-white my-2 outline-none ring-transparent focus:ring-1 focus:ring-gray-600"
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
          className="rounded bg-[#323744] px-3 py-2 text-white my-2 outline-none ring-transparent focus:ring-1 focus:ring-gray-600"
          placeholder="Email"
          name="email"
          id="email"
        />
        {/* Email */}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          className="rounded bg-[#323744] px-3 py-2 text-white outline-none ring-transparent focus:ring-1 focus:ring-gray-600 my-2 min-h-32 lg:min-h-56"
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
