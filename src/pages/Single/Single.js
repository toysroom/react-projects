import { Link, useParams } from "react-router-dom"
import { useFetch } from "../../hook/useFetch"

export default function Single() {

  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data } = useFetch(url)

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <img className='absolute w-full h-full top-0 rounded-t-xl object-cover' src="../img/sfondo.png" alt="" />
      <div className="lg:w-3/5 w-4/5 mt-10 py-3 lg:py-10 bg-white/100 shadow-xl rounded-xl z-10 flex flex-col lg:flex-row">
        <div className="w-full lg:h-full lg:w-3/6 flex flex-col justify-center pl-5 pt-5 pb-10 lg:pt-0 lg:pb-0  lg:pl-16">
          {data &&
            <>
              <h2 className="font-bold text-2xl pb-5">{data.titolo}</h2>
              <ul className="flex flex-wrap items-center">
                <h3 className="font-medium">ingredienti:</h3>
                {data.ingredienti.map((ing) => <li className="text-md p-0 px-1 m-0" key={ing}>{ing},</li>)}
              </ul>
              <h3 className="font-medium py-1">Tempo di preparazione: <span className="font-normal">{data.tempoCottura}</span></h3>
              <h3 className="font-medium lg:pb-10">Difficoltà: <span className="font-normal">{data.difficolta}</span></h3>
              <Link className="px-1 py-1 w-36 text-center text-orange-400 border-2 border-orange-400 hidden lg:block" to="/">Torna Alle Ricette</Link>
            </>
          }
        </div>
        <div className="w-full lg:h-full lg:w-3/6 flex flex-col justify-center px-5 lg:px-16">
          {
            data &&
            <>
             <h3 className="font-medium pb-10 lg:pb-0">Preparazione: <span className="font-normal text-xs ">{data.preparazione}</span></h3>
             <Link className="px-1 py-1 w-36 text-center text-orange-400 border-2 border-orange-400 lg:hidden" to="/">Torna Alle Ricette</Link>
            </>
          }
        </div>
      </div>
    </div>
  )
}
