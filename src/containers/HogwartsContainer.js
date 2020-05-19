import React from 'react';
import HouseSelector from '../components/HouseSelector';
import CharacterDetail from '../components/CharacterDetail';
import CharacterSelector from '../components/CharacterSelector'
import './HogwartsContainer.css'
import Logo from'./Hogwartscrest.png'


class HogwartsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            characters:[],
            selectedCharacter: '',
            selectedHouse: '',
            houses: [ 
                { id: 1,
                name: "Gryffindor"
                },
                { id: 2,
                name: "Ravenclaw"
                },
                { id: 3,
                name: "Hufflepuff"
                },
                { id: 4,
                name: "Slytherin"
                 }]
        };
        this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
        this.handleHouseSelected = this.handleHouseSelected.bind(this);
    }

    handleCharacterSelected(character) {
        this.setState({ selectedCharacter: character })
      }

    handleHouseSelected(house) {
        this.setState({ selectedHouse: house })

        const url = `http://hp-api.herokuapp.com/api/characters/house/${house}`;
        console.log(url)
        fetch(url)
          .then(res => res.json())
          .then(characters => this.setState({ characters: characters }))
          .catch(err => console.error);
      }
    render(){
        const selectedCharacter = this.state.characters.find(character => character.name === this.state.selectedCharacter)

        
        return(
            <div className="hogwartsContainer">
                <img src={Logo} alt="Hogwarts Crest" />
                <HouseSelector 
                houses={this.state.houses} 
                onHouseSelected={this.handleHouseSelected} 
                />
                <CharacterSelector 
                characters={this.state.characters} 
                onCharacterSelected={this.handleCharacterSelected} 
                />
          
                
                <CharacterDetail character={selectedCharacter} />


            </div>
        )
    }
}

export default HogwartsContainer;