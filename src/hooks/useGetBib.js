import { useState, useEffect } from "react";

export const useGetBib = () => {
  const [bib, setBib] = useState([]);

  useEffect(() => {
    async function fetchData(e) {
      const data = await fetch('bib.json');
      const body = await data.json();
      setBib(body.bibliotheek);
    }
    fetchData();
  }, []);

  return { bib };
};