import React, { useState } from 'react'
import Button from './components/Button.js'
import Header from './components/Header.js'
import PetImages from 'components/PetImages.js'
import PetNames from 'components/PetNames.js'
import Question from 'components/Question.js'
import DurationOfOWnership from 'components/DurationOfOwnership.js'

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

export const App = () => {
  return (
    <>
      <Header onClick={scrollFirstQuestion} />
      <div className="first-question-form" id="first-question-form">
        <div className="first-question-first-section">
          <Question
            className="first-question"
            text="Which of these pets do you like/love?"
          />
          <PetNames divClassName="pet-selection-form" />
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
        <DurationOfOWnership formClassName="duration-selection-radio-button" />
        <Button
          type="submit"
          className="continue-button"
          onClick={scrollSecondQuestion}
          text="Move to 3rd question"
        />
      </div>
    </>
  )
}
