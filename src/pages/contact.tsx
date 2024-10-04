import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      subject: e.target.id,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/contact", formDetails);
      if (response.status === 200) {
        alert("Message sent successfully");
        setFormDetails({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error: any) {
      console.error("Error:", error);
      alert(error?.response?.data?.message || "An error occurred");
    }
  };

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
            name="name"
            placeholder="Name"
            value={formDetails.name}
            onChange={handleChange}
            className="border border-[#fbf0d19e] rounded-[40px] text-[#FDF0CD] text-sm bg-transparent placeholder:text-[#fdf0cd9a] py-3 px-4 w-full focus-visible:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formDetails.email}
            onChange={handleChange}
            className="border border-[#fbf0d19e] rounded-[40px] text-[#FDF0CD] text-sm bg-transparent placeholder:text-[#fdf0cd9a] py-3 px-4 w-full focus-visible:outline-none"
          />
        </div>
        <p className="italic text-bg-1 text-2xl md:text-3xl mt-8">Subject</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="testimonials"
              name="subject"
              checked={formDetails.subject === "testimonials"}
              onChange={handleSubjectChange}
            />
            <label
              htmlFor="testimonials"
              className="flex items-center cursor-pointer text-xl text-[#FDF0CD]"
            >
              Testimonials
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="request"
              name="subject"
              checked={formDetails.subject === "request"}
              onChange={handleSubjectChange}
            />
            <label
              htmlFor="request"
              className="flex items-center cursor-pointer text-xl text-[#FDF0CD]"
            >
              Request
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="collaboration"
              name="subject"
              checked={formDetails.subject === "collaboration"}
              onChange={handleSubjectChange}
            />
            <label
              htmlFor="collaboration"
              className="flex items-center cursor-pointer text-xl text-[#FDF0CD]"
            >
              Collaboration
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="other"
              name="subject"
              checked={formDetails.subject === "other"}
              onChange={handleSubjectChange}
            />
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
          name="message"
          id=""
          cols={20}
          rows={10}
          placeholder="Message"
          value={formDetails.message}
          onChange={handleChange}
          className="border mt-6 border-[#fbf0d19e] rounded-[20px] text-[#FDF0CD] text-sm bg-transparent placeholder:text-[#fdf0cd9a] py-3 px-4 w-full focus-visible:outline-none"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-bg-1 text-black px-5 py-3 mt-6 font-semibold w-full rounded-2xl mx-auto"
        >
          Send
        </button>
      </section>
    </main>
  );
};

export default Contact;
