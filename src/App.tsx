import { useEffect, useState } from 'react'



export default function App() {


  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://rickandmortyapi.com/api/character");
      const {results} : {results: Character[]} = await rawData.json();
      setData(results);
    }
    fetchData()
  }, []);

  return (
    <>


    </>
  )
}


