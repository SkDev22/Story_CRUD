import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddStoryForm = () => {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSaveStory = () => {
    const data = {
      title,
      Description,
      author,
    };

    axios
      .post("http://localhost:5050/posts/add", data)
      .then(() => navigate("/"))
      .catch((err) => {
        alert("Something went wrong...");
        console.log(err);
      });
  };

  return (
    <div className="p-4 mt-10">
      {/* <h1 className="text-3xl my-1 text-center">Add Story</h1> */}
      <div className="flex flex-col shadow-2xl rounded-xl w-[500px] p-6 mx-auto ">
        <h1 className="text-3xl my-1 text-center">Add New Story</h1>
        <div className="my-4">
          <label className="text-xl mr-4 text-black">Story Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 rounded-md px-2 py-1 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-black">Story</label>
          <textarea
            type="text"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-500 rounded-md px-2 py-1 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-black">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 rounded-md px-2 py-1 w-full"
          />
        </div>

        <div className="flex justify-center gap-10 my-5">
          <button
            onClick={handleSaveStory}
            className="bg-sky-300 p-2 w-28 rounded-lg font-semibold"
          >
            Save
          </button>
          <Link to="/">
            <button className="bg-red-300 p-2 w-28 rounded-lg font-semibold">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddStoryForm;
