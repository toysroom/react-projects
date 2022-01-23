import React from 'react'
import { Link } from 'react-router-dom'
import useRecipes from '../../hook/useRecipes'



export default function Home() {
  const {data, isLoading, setData} = useRecipes()

  function test(recipe) {
    fetch(`http://localhost:3000/recipes/${recipe.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...recipe, titolo: 'tortissima'
      })
    })
    .then( res => res.json())
    .then(
      resp =>{
        const newState = data.map(item => (item.id === recipe.id) ? resp : item )
        setData(newState)
      }
    )
  }

  return (
    <div className="w-full p-10 flex flex-wrap justify-center items-center ">
      {isLoading && <h1>Sto caricando...</h1>}
      {
        data && data.map((recipe) => (
          <div className="relative flex flex-col justify-center items-start w-80 h-80  m-5 shadow-2xl rounded-xl" key={recipe.id}>
            <span className='absolute left-0 top-10 px-5 py-1 bg-orange-400 '>{recipe.tempoCottura}</span>
            <img className='absolute w-full h-full top-0 rounded-t-xl  object-cover' src="./img/sfondo.png" alt="" />
            <h3 className='font-bold pt-10 px-5'>{recipe.titolo}</h3>
            <h4 className='py-2 px-5'><span className='font-medium'>Difficoltà:</span> {recipe.difficolta}</h4>
            <h5 className='pb-5 px-5'>{recipe.preparazione.substring(0, 100)}...</h5>
            <button className='relative z-10' onClick={() => test(recipe)} >aggiorna</button>
            <Link className='px-5 py-1 mx-5 bg-gray-300/50 rounded-xl font-medium z-10' to={`/single/${recipe.id}`}>Prepara</Link>
          </div>
        ))
      }
    </div>
  )
}
