import { useState, useEffect } from "react";

export const useGetBib = (file) => {
  const [bib, setBib] = useState([]);

  useEffect(() => {
    async function fetchData(e) {
      const data = await fetch(file);
      const body = await data.json();
      setBib(body.bibliotheek);
    }
    fetchData();
  }, []);

  return { bib };
};