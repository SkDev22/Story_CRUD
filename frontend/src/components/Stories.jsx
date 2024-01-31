import { useEffect, useState } from "react";
import { GiBeastEye } from "react-icons/gi";
import { MdEditDocument } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";

const Stories = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/posts/")
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-10 justify-center my-8">
      {post.map((post) => (
        <div
          className="w-[300px] h-[150px] border-2 border-slate-300 shadow-xl rounded-xl p-3 flex flex-col flex-wrap justify-center items-center"
          key={post.id}
        >
          <h1 className="text-xl mb-8 font-bold">{post.title}</h1>
          <div className="flex gap-16 justify-center items-center text-2xl">
            <Link to={`/view/${post._id}`}>
              <GiBeastEye className="text-sky-500 hover:text-3xl" />
            </Link>
            <Link to={`/edit/${post._id}`}>
              <MdEditDocument className="text-yellow-500 hover:text-3xl" />
            </Link>
            <Link to={`/delete/${post._id}`}>
              <RiDeleteBin7Fill className="text-red-500 hover:text-3xl" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
