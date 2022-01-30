import { SearchIcon } from "@heroicons/react/solid";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  
  // Funzione per il cambio rotta tramite l'hook useNavigate sul parametro
  //ricercato in input.!
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="p-3 bg-[#3d6cb9] flex items-center space-x-3 sticky top-0 z-10">
      <Link to="/" className=" flex-grow text-2xl font-bold text-white">
        Keep<span className="text-[#00d1ff]">Fit</span>
      </Link>
      <div className="flex items-center">
        <form className="flex-grow" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search your..."
            className="px-2 py-1 placeholder:text-gray-400 placeholder:text-sm outline-none border-none"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
        <SearchIcon className="w-6 m-1 cursor-pointer text-white hover:text-[#00d1ff]" />
      </div>
    </nav>
  );
};

export default Navbar;
