import { useEffect, useState } from 'react'
import type {Card} from "./interfaces/Cards.ts";
import MagicTheGathering from './components/MagicTheGathering.tsx';
import styled from "styled-components"


const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
`;

const HeaderDiv=styled.div`
    text-align: center;
    border: 3px solid black;
    padding: 10px;
    background-color: azure;
    border-radius: 10px;
`;

const TopPageDiv=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 15px;
`;

const BottomPageDiv=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 15px;
    margin-top: 10px;
    border: 3px solid black;
    border-radius: 10px;
    background-color: azure;
`;



export default function App() {

  const [data, setData] = useState<Card[]>([])


  /*
  This logic of course does not actually initialize a new page, it just runs the api again,
   but with the next 39 results, which matches up with a color per page
   */
  const [pageNr, setPageNr] = useState( 1)


  function prevPage() {
    if (pageNr > 1) {
      setPageNr(pageNr - 1);
    }
  }
  function nextPage() {
    if (pageNr < 5)
        setPageNr(pageNr + 1);
  }


  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch(`https://api.magicthegathering.io/v1/cards?set=ONE&pageSize=39&page=${pageNr}`);
      const {cards} : {cards : Card[]} = await rawData.json();
      setData(cards);
    }
    fetchData()
        .then(() => console.log("Cards successfully gathered"))
        .catch(err => console.log("Cards could not be gathered" + err))
  }, [pageNr]);

  return (
      <ParentDiv>
          <HeaderDiv>
              <h1>Phyrexia: All Will Be One - Magic The Gathering</h1>
              <TopPageDiv>
                    <button onClick={prevPage}>Previous Page</button>
                    <h2>Page number {pageNr} of 5</h2>
                    <button onClick={nextPage}>Next Page</button>
              </TopPageDiv>
          </HeaderDiv>
          <MagicTheGathering data={data} pageNr={pageNr}/>
          <BottomPageDiv>
                <button onClick={prevPage}>Previous Page</button>
                <h2>Page number {pageNr} of 5</h2>
                <button onClick={nextPage}>Next Page</button>
          </BottomPageDiv>
      </ParentDiv>
  )
}


