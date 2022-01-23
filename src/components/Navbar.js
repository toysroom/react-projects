import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const [term, setTerm] = useState('')
  const navigate = useNavigate()
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    navigate(`/search?q=${term}`)
    setTerm('')
  }

  return (
    <div className="w-full h-20 z-30 bg-orange-400 flex justify-between items-center px-5 lg:px-20 shadow-xl">
       <Link to="/">
       <h1 className="m-0 p-0 font-bold text-white text-2xl">i<b className="m-0 p-0 text-black">Food</b></h1></Link>
       <div className="flex items-center">
         <form className="flex px-5" onSubmit={handleSubmit}>
           <input onChange={(e) => setTerm(e.target.value)} className="bg-transparent border-b-2 border-white text-white placeholder:text-white focus:outline-none relative" type="text" value={term} required placeholder="Cerca le ricette..." />
           <img className="w-5 h-auto -ml-5 py-1 " src="./img/search icon.png" alt="" />
         </form>
         <Link className="px-10 py-1 bg-white font-medium rounded-xl hidden lg:block" to="/create">Crea ricetta</Link>
         <Link to="/create">
         <img className="w-5 h-auto lg:hidden" src="./img/create.png" alt="" /></Link>
       </div>
    </div>
  )
}
