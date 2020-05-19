import React from 'react'

const CharacterDetails = (props) => {
    if(!props.character) return null;
    return(
        <div>
            <h3>Character Details:</h3>
            <img src={props.character.image} alt={props.character.name}/>
            <p>Name: {props.character.name}</p>
            <p>Actor: {props.character.actor}</p>
            <p>Gender: {props.character.gender}</p>
            <p>House: {props.character.house}</p>
            <p>Date Of Birth: {props.character.dateOfBirth}</p>
            <p>Year Of Birth: {props.character.yearOfBirth}</p>
            <p>Ancestry: {props.character.ancestry}</p>
            <p>Eye Colour: {props.character.eyeColour}</p>
            <p>Hair Colour: {props.character.hairColour}</p>
            <p>Patronus: {props.character.patronus}</p>
            <p>Year Of Birth: {props.character.yearOfBirth}</p>
            <p>Year Of Birth: {props.character.yearOfBirth}</p>
        </div>
    )
}

export default CharacterDetails;