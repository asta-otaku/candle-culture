import Image from "next/image";
import logo from "@/assets/Logo.svg";
import upload from "@/assets/image-upload.svg";
import { useState } from "react";

function Portal() {
  const [photoID, setPhotoID] = useState<File | null>(null);
  return (
    <div className="w-scren h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full relative">
        {/* <div className="absolute -top-[30%] -left-[30%]">
          <Image src={logo} alt="logo" />
        </div> */}
        <h2 className="text-[#F2DEA7] font-medium text-2xl">Admin Portal</h2>
        <form className="flex flex-col gap-4 w-full mt-6">
          <div>
            <h5 className="text-[#A98D40] font-medium text-sm mb-1">Type</h5>
            <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
              <select className="bg-transparent w-full outline-none">
                <option value="podcast">Podcast</option>
                <option value="playlist">Playlist</option>
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
              <input
                placeholder="Category"
                type="text"
                className="bg-transparent w-full outline-none text-black placeholder:text-black"
              />
            </div>
          </div>
          <div>
            <h5 className="text-[#A98D40] font-medium text-sm mb-1">Link*</h5>
            <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
              <input
                placeholder="Link"
                type="text"
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
                  className="bg-transparent w-full outline-none text-black placeholder:text-black"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h5 className="text-[#A98D40] font-medium text-sm mb-1">Image</h5>
              <div className="flex justify-between items-center h-[115px] w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
                {photoID ? (
                  <img
                    className="w-fit h-fit mx-auto"
                    src={URL.createObjectURL(photoID)}
                    alt="passport"
                  />
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-full gap-1 cursor-pointer">
                    <input
                      className="hidden"
                      type="file"
                      id="my-file-input"
                      onChange={(e) =>
                        setPhotoID(e.target.files && e.target.files[0])
                      }
                    />
                    <Image src={upload} alt="upload" />
                    <span className="text-black text-sm font-medium">
                      Upload Image
                    </span>
                  </label>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Portal;
