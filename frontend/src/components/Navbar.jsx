// import { SiGitbook } from "react-icons/si";
import { BiSolidBookReader } from "react-icons/bi";
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-20 bg-[#5e548e] h-16">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <BiSolidBookReader className="text-3xl text-[#f4f1de] " />
            <h1 className="text-[#edafb8] font-extrabold text-3xl uppercase">
              Story
            </h1>
          </div>
        </Link>
        <Link to="/add">
          <button className="flex items-center gap-2 bg-[#f4f1de] px-3 py-2 rounded-full text-md font-bold text-[#5e548e]">
            <BiSolidBookmarkPlus className="text-xl" /> New Story
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
