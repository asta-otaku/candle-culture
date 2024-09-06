import Image from "next/image";
import upload from "@/assets/image-upload.svg";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import LoadingSpinner from "@/components/Loader";

function Portal() {
  const photoID = useRef<any>(null);
  const [loading, setLoading] = useState(false);

  const [formDetails, setFormDetails] = useState({
    type: "",
    title: "",
    subtitle: "",
    category: "",
    link: "",
    description: "",
  });

  const [categoryOptions, setCategoryOptions] = useState<string[]>([]);

  useEffect(() => {
    const updateCategoryOptions = () => {
      switch (formDetails.type) {
        case "podcast":
          setCategoryOptions(["Solo Episodes", "Conversations"]);
          break;
        case "music":
          setCategoryOptions([
            "Rest",
            "Revival",
            "Curator's Choice",
            "Collaborations",
            "Genres",
            "Afro",
          ]);
          break;
        case "poetry":
          setCategoryOptions(["Own", "Inspired"]);
          break;
        default:
          setCategoryOptions([]);
      }
    };

    updateCategoryOptions();
  }, [formDetails.type]);

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

    console.log(data);

    if (
      data.type === "" ||
      data.title === "" ||
      data.subtitle === "" ||
      data.category === "" ||
      data.description === "" ||
      data.image === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (["podcast", "music"].includes(data.type) && data.link === "") {
      alert("Please provide a link for podcasts or playlists");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/api/${data.type}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 200) {
        alert("Post created successfully");
        setLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        alert("An error occurred");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto w-full relative py-12">
      <h2 className="text-[#F2DEA7] font-medium text-2xl">Admin Portal</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full mt-6">
        <div>
          <h5 className="text-[#A98D40] font-medium text-sm mb-1">Type</h5>
          <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
            <select
              name="type"
              onChange={handleChange}
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
          <h5 className="text-[#A98D40] font-medium text-sm mb-1">Category</h5>
          <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
            <select
              name="category"
              onChange={handleChange}
              className="bg-transparent w-full outline-none"
            >
              <option value="">Select Category</option>
              {categoryOptions.map((option, index) => (
                <option key={index} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <h5 className="text-[#A98D40] font-medium text-sm mb-1">Link</h5>
          <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
            <input
              placeholder="Mp3 Link"
              type="text"
              name="link"
              onChange={handleChange}
              className="bg-transparent w-full outline-none text-black placeholder:text-black"
            />
          </div>
        </div>
        {
          /* Spotify and Apple Music */
          ["podcast", "music"].includes(formDetails.type) && (
            <div>
              <h5 className="text-[#A98D40] font-medium text-sm mb-1">
                Spotify
              </h5>
              <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
                <input
                  placeholder="Spotify Link"
                  type="text"
                  name="spotify"
                  onChange={handleChange}
                  className="bg-transparent w-full outline-none text-black placeholder:text-black"
                />
              </div>
            </div>
          )
        }
        {["podcast", "music"].includes(formDetails.type) && (
          <div>
            <h5 className="text-[#A98D40] font-medium text-sm mb-1">
              Apple Music
            </h5>
            <div className="flex justify-between items-center w-full p-2 bg-[#F2DEA7] rounded-lg border border-[#1018280D] border-solid">
              <input
                placeholder="Apple Music Link"
                type="text"
                name="appleMusic"
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-black placeholder:text-black"
              />
            </div>
          </div>
        )}
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
          {loading ? <LoadingSpinner className="mx-auto" /> : "Post"}
        </button>
      </form>
    </div>
  );
}

export default Portal;
