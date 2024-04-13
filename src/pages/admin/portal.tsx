import Image from "next/image";
import upload from "@/assets/image-upload.svg";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";

function Portal() {
  const photoID = useRef<any>(null);

  const [formDetails, setFormDetails] = useState({
    type: "",
    title: "",
    subtitle: "",
    category: "",
    link: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      type: formDetails.type,
      title: formDetails.title,
      subtitle: formDetails.subtitle,
      category: formDetails.category,
      link: formDetails.link,
      description: formDetails.description,
      image: photoID.current.files[0],
    };

    if (
      data.type === "" ||
      data.title === "" ||
      data.subtitle === "" ||
      data.category === "" ||
      data.link === "" ||
      data.description === "" ||
      data.image === ""
    ) {
      alert("Please fill all fields");
    } else {
      try {
        const res = await axios.post(`${BASE_URL}/api/${data.type}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (res.status === 200) {
          alert("Post created successfully");
        } else {
          alert("An error occured");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-scren h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full relative">
        <h2 className="text-[#F2DEA7] font-medium text-2xl">Admin Portal</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full mt-6"
        >
          <div>
            <h5 className="text-[#A98D40] font-medium text-sm mb-1">Type</h5>
            <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
              <select
                name="type"
                onChange={handleChange}
                defaultValue={"podcast"}
                className="bg-transparent w-full outline-none"
              >
                <option value="">Select Type</option>
                <option value="podcast">Podcast</option>
                <option value="music">Playlist</option>
                <option value="poetry">Poetry</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between gap-4 items-center w-full">
            <div className="w-1/2">
              <h5 className="text-[#A98D40] font-medium text-sm mb-1">Title</h5>
              <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
                <input
                  placeholder="Title"
                  type="text"
                  name="title"
                  onChange={handleChange}
                  className="bg-transparent w-full outline-none text-black placeholder:text-black"
                />
              </div>
            </div>
            <div className="w-1/2">
              <h5 className="text-[#A98D40] font-medium text-sm mb-1">
                Subtitle
              </h5>
              <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
                <input
                  placeholder="Subtitle"
                  type="text"
                  name="subtitle"
                  onChange={handleChange}
                  className="bg-transparent w-full outline-none text-black placeholder:text-black"
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-[#A98D40] font-medium text-sm mb-1">
              Category
            </h5>
            <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
              <select
                name="category"
                onChange={handleChange}
                defaultValue={"gospel"}
                className="bg-transparent w-full outline-none"
              >
                <option value="">Select Category</option>
                <option value="gospel">Gospel</option>
                <option value="afrobeat">Afrobeat</option>
                <option value="jazz">Jazz</option>
                <option value="faith">Faith</option>
                <option value="hope">Hope</option>
                <option value="joy">Joy</option>
              </select>
            </div>
          </div>
          <div>
            <h5 className="text-[#A98D40] font-medium text-sm mb-1">Link*</h5>
            <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
              <input
                placeholder="Link"
                type="text"
                name="link"
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-black placeholder:text-black"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <div className="w-full md:w-1/2">
              <h5 className="text-[#A98D40] font-medium text-sm mb-1">Post</h5>
              <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
                <textarea
                  placeholder="Title"
                  rows={4}
                  name="description"
                  onChange={handleChange}
                  className="bg-transparent w-full outline-none text-black placeholder:text-black"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h5 className="text-[#A98D40] font-medium text-sm mb-1">Image</h5>
              <div className="flex justify-between items-center h-[115px] w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
                <label className="flex flex-col items-center justify-center w-full h-full gap-1 cursor-pointer">
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    name="image"
                    ref={photoID}
                    onChange={(e: any) => (photoID.current = e.target)}
                  />
                  <Image src={upload} alt="upload" />
                  <span className="text-black text-sm font-medium">
                    Upload Image
                  </span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#A98D40] text-black font-medium text-lg py-2 rounded-lg mt-4"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Portal;
