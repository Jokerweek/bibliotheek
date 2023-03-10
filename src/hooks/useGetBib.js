import { useState, useEffect } from "react";

export const useGetBib = (file) => {
  const [bib, setBib] = useState([]);
  const [tags, setTags] = useState([])

  useEffect(() => {
    async function fetchData(e) {
      const data = await fetch(file);
      const body = await data.json();
      setBib(body);
      body.forEach(element => {
        element.tags.forEach(element2 => {
          setTags((m) => [...new Set([...m, element2])])
        });
      });
    }
    fetchData();

  }, [file]);

  return { bib, tags };
};