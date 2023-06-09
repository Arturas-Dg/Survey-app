import React, { useState } from 'react'

const PetNames = ({ divClassName, onFavouriteChange }) => {
  const pets = [
    'dogs',
    'cats',
    'rabbits',
    'fishes',
    'snakes',
    'guinea pigs',
    'parrots',
    'hamsters',
  ]

  return (
    <div className={divClassName}>
      {pets.map((pet) => {
        return (
          <label className="pet-selection" htmlFor={pet} key={pet}>
            {pet}
            <input
              className="checkbox"
              type="checkbox"
              onChange={(e) => onFavouriteChange(e)}
              id={pet}
              name={pet}
              value={pet}
            />
          </label>
        )
      })}
    </div>
  )
}

export default PetNames
