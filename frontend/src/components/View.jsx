import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { RiEditCircleFill } from "react-icons/ri";

const View = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");

  const getEachStory = async () => {
    const res = await axios.get(`http://localhost:5050/posts/${id}`);
    setPost(res.data);
  };

  useEffect(() => {
    getEachStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold my-5 flex gap-2 items-center text-[#231942]">
        <BsFillBookmarkStarFill />
        {post.title}
      </h1>
      <p className="text-lg font-normal text-justify mb-8">
        {post.Description}
      </p>
      <h1 className="flex gap-2 items-center text-[#fb6f92]">
        <RiEditCircleFill />
        {post.author}
      </h1>
    </div>
  );
};

export default View;
