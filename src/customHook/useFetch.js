import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [option, setOption] = useState(null);

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
      const req = await fetch(url, { ...fetchOptions });
      const resp = await req.json();
      setData(resp);
    };
    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && option) {
      fetchData(option);
    }
  }, [url, option, method]);
  return { data, postData, setData };
};
