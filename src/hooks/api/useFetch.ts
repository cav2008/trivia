import React, { useState, useEffect } from "react";

const useFetch = (url: string): [boolean, any] => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Could not fetch data");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [isLoading, apiData];
};

export default useFetch;
