import { useState } from 'react'
import { useFetch } from '../../hook/useFetch'
import { useNavigate } from 'react-router-dom'


export default function Create() {
  const [titolo, setTitolo] = useState('')
  const [difficolta, setDifficolta] = useState('')
  const [tempoCottura, setTempoCottura] = useState('')
  const [preparazione, setPreparazione] = useState('')

  const [newIngredient, setNewIngredient] = useState('')
  const [ingredienti, setIngredienti] = useState([])

  const {postData, data} = useFetch('http://localhost:3000/recipes', 'POST')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ titolo, difficolta, tempoCottura: tempoCottura + ' minuti', preparazione,ingredienti})
  }

  if(data){
    navigate('/')
  }
  
  // aggiungi elementi ad un array senza ripeterli
  const addIngredient = (e) => {
     e.preventDefault()
     const ing = newIngredient.trim()

     if(ing && !ingredienti.includes(ing)){
       setIngredienti(prevIngredienti => [...prevIngredienti, ing])
     }
     setNewIngredient('')
    
  }

  return (
    <div className="w-full py-5 relative flex justify-center items-center">
      <img className="absolute w-full h-full object-cover" src="./img/sfondo.png" alt="" />
      <div className="w-3/4 lg:w-2/5 py-5 bg-white z-10 shadow-xl rounded-xl ">

        <form className='flex flex-col w-full h-full p-5' onSubmit={handleSubmit}>

          <label className='flex flex-col mb-6'>
            <span>Cosa vuoi preparare?</span>
            <input className='bg-zinc-500 py-2 mt-2 text-white pl-3 rounded-md' 
            type="text"
            onChange={(e) => setTitolo(e.target.value)}
            value={titolo}
            required
            />
          </label>

          <label className='flex flex-col mb-6'>
            <span>Quanto è difficile?</span>
            <input className='bg-zinc-500 py-2 mt-2 text-white pl-3 rounded-md' 
            type="text"
            onChange={(e) => setDifficolta(e.target.value)}
            value={difficolta}
            required
            />
          </label>

          <label className='flex flex-col mb-6'>
            <span>Quali sono gli ingredienti?</span>
            <div className='flex items-center justify-between'>
              <input className='bg-zinc-500 py-2 mt-2 text-white pl-3 rounded-md w-3/4 lg:w-4/5' 
              type="text"
              //inserire onchange x ingredienti 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
             
              />
              <button onClick={addIngredient} className='bg-orange-400 py-2 px-2 mt-2 '>aggiungi</button>
            </div>
            {/* <small className='mt-2'>Ingredienti: <span>{ingredienti.map((ing) => <em key={ing}>{ing}, </em>)}</span></small> */}
            <small className='mt-2'>Ingredienti: <span><em>{ingredienti.join(", ")}</em></span></small>
          </label>

          <label className='flex flex-col mb-6'>
            <span>Quanto tempo hai bisogno?</span>
            <input className='bg-zinc-500 py-2 mt-2 text-white pl-3 rounded-md' 
            type="number"
            onChange={(e) => setTempoCottura(e.target.value)}
            value={tempoCottura}
            required
            min={15}
            />
          </label>

          <label className='flex flex-col mb-6'>
            <span>Elenca la procedura</span>
            <textarea className='bg-zinc-600 text-white pl-2 h-28'
            onChange={(e) => setPreparazione(e.target.value)}
            value={preparazione}
            required 
            />
          </label>
          <button className='w-full py-2 rounded-md bg-orange-400'>Crea ricetta</button>
        </form>

      </div>
    </div>
  )
}
