// Modal.tsx

import React, { useState } from "react";
import Close from "@/assets/minus-cirlce.svg";
import Image from "next/image";
import PrayerIcon from "@/assets/device-message.svg";
import axios from "axios";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formDetails, setFormDetails] = useState({ message: "", email: "" });

  const handleSend = async () => {
    try {
      const response = await axios.post("/api/prayer", formDetails);
      if (response.status === 200) {
        alert("Prayer request sent successfully");
        setFormDetails({ message: "", email: "" });
      }
      onClose();
    } catch (error: any) {
      console.error("Error sending message:", error);
      alert(error?.response?.data?.message || "An error occurred");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return (
    <div
      className={`modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-[#0000009c] transition-all
       ${isOpen ? "block" : "hidden"}`}
    >
      <div className="relative p-4 w-full rounded-2xl bg-bg-1 max-w-2xl max-h-full">
        {/* ... Modal content */}
        <div className="relative">
          <div className="flex items-center justify-end">
            {/* ... Header content */}
            <div
              className="bg-[#43583E] w-[30px] rounded-full h-auto cursor-pointer"
              onClick={onClose}
            >
              <Image src={Close} alt="close" />
            </div>
          </div>
          {/* ... Modal body */}
          <div className="flex justify-center items-center flex-col gap-1 -mt-4">
            <div className="flex gap-2 items-center">
              <Image src={PrayerIcon} alt="category" className="w-8 h-8" />
              <p className="text-xl md:text-3xl text-[#000] italic">
                Prayer Request
              </p>
            </div>
            <p className="text-[#000] text-sm mt-2">
              Send in your prayer requests
            </p>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border mt-6 border-black rounded-[10px] text-black text-sm bg-transparent placeholder:text-black py-3 px-4 w-full focus-visible:outline-none"
              value={formDetails.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              cols={20}
              rows={5}
              placeholder="Prayer Request"
              className="border mt-6 border-black rounded-[10px] text-black text-sm bg-transparent placeholder:text-black py-3 px-4 w-full focus-visible:outline-none"
              value={formDetails.message}
              onChange={handleChange}
            ></textarea>
            <button
              className="bg-black rounded-md text-bg-1 px-4 py-1 mt-3"
              onClick={handleSend}
            >
              <p className="text-xl">Send</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
