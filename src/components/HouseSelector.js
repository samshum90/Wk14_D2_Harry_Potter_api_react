import React from 'react';

const HouseSelector = (props) => {
        const options = props.houses.map(house => {
          return <option value={house.name} key={house.id}>{house.name}</option>
        })
      
        function handleChange(event) {
          props.onHouseSelected(event.target.value);
        }
      
        return (
          <select id="house-selector" onChange={handleChange} defaultValue="default">
            <option disabled value="default">Choose a house...</option>
            {options}
          </select>
        )
      }
export default HouseSelector;