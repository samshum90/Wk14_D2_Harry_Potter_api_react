import React from 'react'

const CharacterSelector = (props) => {
    const options = props.characters.map(character => {
        return <option 
        value={character.name} 
        key={character.id}>
            {character.name}
        </option>
      })

    function handleChange(event) {
        props.onCharacterSelected(event.target.value);
    }

    if(!props.characters.length){
        return null;
    }
          
    return (
        <select id="house-selector" onChange={handleChange} defaultValue="default">
        <option disabled value="default">Choose a character...</option>
        {options}
        </select>
        )
}


export default CharacterSelector;