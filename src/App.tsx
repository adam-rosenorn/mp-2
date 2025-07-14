import { useEffect, useState } from 'react'



export default function App() {


  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("");
      const {} : {} = await rawData.json();
      setData();
    }
    fetchData()
  }, []);

  return (
    <>


    </>
  )
}


