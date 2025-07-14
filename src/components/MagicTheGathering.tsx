import styled from "styled-components";
import type {Card} from "../interfaces/Cards.ts";

const CardsDiv=styled.div<{pageNr : number}>`
    display: flex;
    flex-flow: row wrap;
    border-radius: 10px;
    border: 3px solid black;
    background-color: ${(props)=>  backgroundColor(props.pageNr)};
    justify-content: space-evenly;
    margin-top: 10px;
`;

const SingleCardDiv=styled.div`
    display: flex;
    flex-direction: column;
    width: 26%;
    padding: 10px;
    border: 3px solid black;
    border-radius: 10px;
    font-size: calc(2px + 0.4vh + 0.4vw);
    text-align: center;
    margin: 10px;
    background-color: azure;
`;

const FormattedImg=styled.img`
    width: 70%;
    padding-top: 10px;
    margin: auto;
`;

function backgroundColor(pageNr:number): string {
    if (pageNr === 1) {
        return "#FFFFC5";
    }
    else if (pageNr === 2) {
        return "#75BFEC";
    }
    else if (pageNr === 3) {
        return "#683BAB";
    }
    else if (pageNr === 4) {
        return "#F94449";
    }
    else if (pageNr === 5) {
        return "#00AB41";
    }
    else {
        return "#FFFFFF";
    }
}


export default function MagicTheGathering(props: {data:Card[]; pageNr:number}) {



    return (
        <CardsDiv pageNr={props.pageNr}>
            {
                props.data.map((card: Card) =>
                    <SingleCardDiv key={card.id}>
                        <h1>{card.name}</h1>
                        <p>Card Type: {card.type}</p>
                        <FormattedImg src={card.imageUrl} alt={`Magic the Gathering card: ${card.name}`} />
                    </SingleCardDiv>
                )
            }
        </CardsDiv>
    );
}
