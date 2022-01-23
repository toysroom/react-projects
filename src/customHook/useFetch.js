import { useState, useEffect } from "react/cjs/react.development";


//valore di default get
export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [option, setOption] = useState(null);

  //funzione che setta le option per la post request
  //che come parametro accetta l'elemento da postare

  const postData = (postData) => {
    setOption({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const fetchData = async (fetchOptions) => {
      const res = await fetch(url, {...fetchOptions});
      const json = await res.json();
      setData(json);
    };

    //controlliamo se è una get request
    if (method === "GET") {
      fetchData();
    }
    // controlliamo se è una post request e se option ha un valore,
    // in caso di esito positivo si esegue il fetch passando option come parametro
    if (method === "POST" && option) {
      fetchData(option);
    }
  }, [url,option, method])

  return { data,setData, postData };
};
