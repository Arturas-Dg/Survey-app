import React, { useState } from 'react'
import Button from './components/Button.js'
import Header from './components/Header.js'

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

const durationOfOWnership = [
  '0-5 years',
  '5-10 years',
  '10-15 years',
  '15 years or longer',
]

const displayAnimalPhotos = animalPhotos.map((animal) => {
  return <img src={animal} className="animal-photo" alt="animal" key={animal} />
})

const scrollFirstQuestion = () => {
  const firstQuestion = document.getElementById('first-question-form')
  firstQuestion.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}

const scrollSecondQuestion = () => {
  const secondQuestion = document.getElementById('second-question-form')
  secondQuestion.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}
const displayDurationOfOwnership = durationOfOWnership.map((year) => (
  <label htmlFor={year} key={year}>
    <input
      type="radio"
      className="radio"
      id={year}
      name="fav-language"
      value={year}
    />
    {year}
  </label>
))

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
      <Header onClick={scrollFirstQuestion} />
      <div className="first-question-form" id="first-question-form">
        <div className="first-question-first-section">
          <h1 className="first-question">
            Which of these pets do you like/love?
          </h1>
          <div className="pet-selection-form">{petDisplay}</div>
          <Button
            type="submit"
            className="continue-button"
            onClick={scrollSecondQuestion}
            text="Proceed"
          />
        </div>
        <div className="pet-images">{displayAnimalPhotos}</div>
      </div>
      <div className="second-question-form" id="second-question-form">
        <h1 className="second-question">
          How long have you been a pet owner for?
        </h1>
        <form className="duration-selection-radio-button">
          {displayDurationOfOwnership}
        </form>
      </div>
    </>
  )
}
