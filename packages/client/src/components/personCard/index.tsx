import React from 'react'; 
import styled from 'styled-components'; 


const Card = styled.div`
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    padding: 2%;
`; 

const CardOutline = styled.div`
    background: #FFFFFF;
    border: 2px dashed #FFE81F;
    padding: 2%;
    display: flex;
    flex-direction: column; 
`; 

const Text = styled.div`
    font-size: 16px; 
    color: black; 
    font-style: bold;
   
`; 

const SpanPropData = styled.span`
    color: #FFE81F; 
   

`; 

const Title = styled.span`
    font-weight: bold;
     margin-right: 5%;
`;


interface PersonType{ 

}

 const PersonCard: React.FC<any> = ({people}) => {
     console.log(people.name)
    return (
        <Card> 
            <CardOutline> 
                <Text> <Title>Name:</Title> {people.name} </Text>
                <Text> <Title>Height:</Title>{people?.height} Ft.</Text>
                <Text> <Title>Mass:</Title> {people?.mass} KG </Text>
                <Text><Title>HomeWorld:</Title> {people?.homeworld}</Text>
                <Text><Title>Gender:</Title> {people?.gender}</Text>
            </CardOutline>
        </Card>
    )
}

export default PersonCard; 
