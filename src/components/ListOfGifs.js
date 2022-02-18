import { useEffect, useState } from "react";
import React from "react";
import Gifs from "./Gifs";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const {keyword} = params  
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
      setLoading(true)
    getGifs({ keyword }).then((gifs) => 
        setGifs(gifs));
        setLoading(false)
  }, [keyword]);

  if (loading) return <p>Cargando ...</p>

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gifs key={id} title={title} url={url} />
      ))}
    </div>
  );
}
