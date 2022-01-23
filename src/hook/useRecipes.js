import { useState, useEffect } from 'react'

  const useRecipes = () => {
  const baseUrl = "http://localhost:3000/recipes"

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getRecipes() {
    try {
      setIsLoading(true);
      const response = await fetch(baseUrl);
      const data = await response.json();
      console.log(data)
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  useEffect(() => {
    getRecipes()
  }, [])


  return {data, setData, isLoading, error};
}

export default useRecipes;