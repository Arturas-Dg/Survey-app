import React from 'react'

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

const PetImages = ({ divClassName }) => {
  return (
    <div className={divClassName}>
      {animalPhotos.map((animal) => (
        <img
          src={animal}
          className="animal-photo"
          alt="animal"
          key={animal}
        ></img>
      ))}
    </div>
  )
}

export default PetImages
