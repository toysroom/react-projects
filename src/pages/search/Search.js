import { useLocation, Link } from "react-router-dom"
import { useFetch } from "../../hook/useFetch"

export default function Search() {
  
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/recipes?q=' + query
  const {data} = useFetch(url)


  return (
    <div className="w-full p-10 flex flex-wrap justify-center items-center">
      {data && 
        data.map((recipe)=>(
          <div className="relative  flex flex-col justify-center items-start w-80 h-80  m-5 shadow-2xl rounded-xl" key={recipe.id}>
          <span className='absolute left-0 top-10 px-5 py-1 bg-orange-400 '>{recipe.tempoCottura}</span>
          <img className='absolute w-full h-full top-0 rounded-t-xl  object-cover' src="./img/sfondo.png" alt="" />
          <h3 className='font-bold pt-10 px-5'>{recipe.titolo}</h3>
          <h4 className='py-2 px-5'><span className='font-medium'>Difficoltà:</span> {recipe.difficolta}</h4>
          <h5 className='pb-5 px-5'>{recipe.preparazione.substring(0,100)}...</h5>
          <Link className='px-5 py-1 mx-5 bg-gray-300/50 rounded-xl font-medium z-10' to={`/single/${recipe.id}`}>Prepara</Link>
        </div>
        ))
      }
    </div>
  )
}
