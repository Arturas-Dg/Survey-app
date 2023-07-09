import React, { useState } from 'react'
import Button from './components/Button.js'
import Header from './components/Header.js'
import PetImages from 'components/PetImages.js'
import PetNames from 'components/PetNames.js'
import Question from 'components/Question.js'
import DurationOfOWnership from 'components/DurationOfOwnership.js'
import SurveyEnding from 'components/SurveyEnding.js'
import Results from 'components/Results.js'

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

const scrollThirdQuestion = () => {
  const thirdQuestion = document.getElementById('last-question-form')
  thirdQuestion.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}

export const App = () => {
  //This is where the selection of favorite pets happen, the function is passed into a React element
  const [favouritePets, setFavouritePets] = useState([])
  const onFavouriteChange = (e) => {
    if (e.target.checked) {
      setFavouritePets([...favouritePets, e.target.value])
    } else {
      setFavouritePets(favouritePets.filter((item) => item !== e.target.value))
    }
  }

  //This is a section that is responsible for

  const [ownershipLength, setOwnershipLength] = useState('')
  const handleChange = (e) => {
    const target = e.target
    if (target.checked) {
      setOwnershipLength(target.value)
    } else {
      setOwnershipLength(
        ownershipLength.filter((item) => item !== e.target.value)
      )
    }
  }

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [gender, setGender] = useState('')

  const onNameChange = (e) => {
    setName(e.target.value)
  }
  const onMailChange = (e) => {
    setMail(e.target.value)
  }
  const onGenderChange = (e) => {
    setGender(e.target.value)
  }
  return (
    <>
      <Header onClick={scrollFirstQuestion} />
      <div className="first-question-form" id="first-question-form">
        <div className="first-question-first-section">
          <Question
            className="first-question"
            text="Which of these pets do you like/love?"
          />
          <PetNames
            divClassName="pet-selection-form"
            onFavouriteChange={onFavouriteChange}
          />
          <Button
            type="submit"
            className="continue-button"
            onClick={scrollSecondQuestion}
            text="Proceed"
          />
        </div>
        <PetImages divClassName="pet-images" />
      </div>
      <div className="second-question-form" id="second-question-form">
        <Question
          className="second-question"
          text=" How long have you been a pet owner for?"
        />
        <DurationOfOWnership
          formClassName="duration-selection-radio-button"
          handleChange={handleChange}
        />
        <Button
          type="submit"
          className="continue-button"
          onClick={scrollThirdQuestion}
          text="Submit your answers"
        />
      </div>
      <div className="last-question-form" id="last-question-form">
        <SurveyEnding
          nameId="name"
          nameType="text"
          mailId="mail"
          mailType="text"
          genderId="gender"
          nameText="What's your name?"
          mailText="your email (optional)"
          genderText="select your gender"
          name={name}
          mail={mail}
          gender={gender}
          onNameChange={onNameChange}
          onMailChange={onMailChange}
          onGenderChange={onGenderChange}
        />
      </div>
      <Results className="results" name={name} />
    </>
  )
}
