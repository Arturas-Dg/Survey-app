import React, { useState } from 'react'

const pets = [
  'dog',
  'cat',
  'rabbit',
  'fish',
  'snake',
  'guinea pig',
  'parrot',
  'hamster',
]

let [likedPet, sedLikedPet] = useState('')

const selectLikedPet = () => {}

const petDisplay = pets.map((pet) => {
  return (
    <label className="pet-selection" htmlFor={pet} key={pet}>
      {pet}
      <input
        className="checkbox"
        type="checkbox"
        id={pet}
        name={pet}
        value={pet}
      />
    </label>
  )
})

export const App = () => {
  return (
    <>
      <div className="header">
        <h1 className="welcome">Welcome!</h1>
        <h2 className="welcome-message">
          This is a survey on pets. If you want to proceed, press Continue.
        </h2>
        <button type="submit" className="continue-button">
          Continue
        </button>
      </div>
      <div className="first-question-form">
        <h1 className="first-question">
          Which of these pets do you like/love?
        </h1>
        <div className="pet-selection-form">{petDisplay}</div>
      </div>
    </>
  )
}
