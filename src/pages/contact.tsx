import React from "react";

const Contact = () => {
  return (
    <main className="px-6 sm:px-12 md:px-32 py-10 sm:py-16 md:py-20 bg-primary">
      <p className="italic text-bg-1 text-center text-3xl sm:text-4xl md:text-6xl">
        Get In Touch
      </p>

      <section className="w-full md:w-[700px] mx-auto my-10">
        <p className="italic text-bg-1 text-2xl md:text-3xl">Info</p>
        <div className="flex gap-4 my-6 md:gap-10">
          <input
            type="text"
            placeholder="Name"
            className="border border-[#fbf0d19e] rounded-[40px] text-[#FDF0CD] text-sm bg-transparent placeholder:text-[#fdf0cd9a] py-3 px-4 w-full focus-visible:outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="border border-[#fbf0d19e] rounded-[40px] text-[#FDF0CD] text-sm bg-transparent placeholder:text-[#fdf0cd9a] py-3 px-4 w-full focus-visible:outline-none"
          />
        </div>
        <p className="italic text-bg-1 text-2xl md:text-3xl mt-8">Subject</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="flex items-center space-x-2">
            <input type="radio" id="testimonials" name="radioGroup" />
            <label
              htmlFor="testimonials"
              className="flex items-center cursor-pointer text-xl text-[#FDF0CD]"
            >
              Testimonials
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" id="request" name="radioGroup" />
            <label
              htmlFor="request"
              className="flex items-center cursor-pointer text-xl text-[#FDF0CD]"
            >
              Request
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" id="collaboration" name="radioGroup" />
            <label
              htmlFor="collaboration"
              className="flex items-center cursor-pointer text-xl text-[#FDF0CD]"
            >
              Collaboration
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" id="other" name="radioGroup" />
            <label
              htmlFor="other"
              className="flex items-center cursor-pointer text-xl text-[#FDF0CD]"
            >
              Other
            </label>
          </div>
        </div>

        <p className="italic text-bg-1 text-2xl md:text-3xl mt-8">Message</p>
        <textarea
          name=""
          id=""
          cols={20}
          rows={10}
          placeholder="Message"
          className="border mt-6 border-[#fbf0d19e] rounded-[20px] text-[#FDF0CD] text-sm bg-transparent placeholder:text-[#fdf0cd9a] py-3 px-4 w-full focus-visible:outline-none"
        ></textarea>
      </section>
    </main>
  );
};

export default Contact;
