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

const animalPhotos = [
  'animalPhotos/cat.jpg',
  'animalPhotos/dog.jpg',
  'animalPhotos/fish.jpg',
  'animalPhotos/guinea pig.jpg',
  'animalPhotos/hamster.jpg',
  'animalPhotos/parrot.jpg',
  'animalPhotos/rabbit.jpg',
  'animalPhotos/snake.jpg',
]

const displayAnimalPhotos = animalPhotos.map((animal) => {
  return <img src={animal} className="animal-photo" alt="animal" key={animal} />
})

const scrollFirstQuestion = () => {
  const firstQuestion = document.getElementById('first-question-form')
  firstQuestion.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  })
}

export const App = () => {
  const [favouritePets, setFavouritePets] = useState([])

  const onFavouriteChange = (e) => {
    if (e.target.checked) {
      setFavouritePets([...favouritePets, e.target.value])
    } else {
      setFavouritePets(favouritePets.filter((item) => item !== e.target.value))
    }
  }

  const petDisplay = pets.map((pet) => {
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
  })
  return (
    <>
      <div className="header">
        <h1 className="welcome">Welcome!</h1>
        <h2 className="welcome-message">
          This is a survey on pets. If you want to proceed, press Continue.
        </h2>
        <button
          type="submit"
          className="continue-button"
          onClick={scrollFirstQuestion}
        >
          Continue
        </button>
      </div>
      <div className="first-question-form" id="first-question-form">
        <div>
          <h1 className="first-question">
            Which of these pets do you like/love?
          </h1>
          <div className="pet-selection-form">{petDisplay}</div>
        </div>
        <div className="pet-images">{displayAnimalPhotos}</div>
      </div>
    </>
  )
}
