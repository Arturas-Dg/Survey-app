import React from 'react'

// const pets = [
//   'dog',
//   'cat',
//   'rabbit',
//   'fish',
//   'snake',
//   'guinea pig',
//   'parrot',
//   'hamster',
// ]

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
        <h3 className="first-question">What is your favorite pet?</h3>
      </div>
      <input type="checkbox" id="dog" name="dog" value="dog" />
      <label htmlFor="dog">Dog</label>
    </>
  )
}
