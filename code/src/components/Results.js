import React from 'react'

const Results = ({
  favouritePets,
  ownershipLength,
  name,
  mail,
  gender,
  className,
  result,
}) => {
  return (
    <>
      <div className={className} style={{ display: result ? 'block' : 'none' }}>
        <h1>
          Thanks for answering, {name}, your answers have been recorded in our
          system:
        </h1>
        <h2 className="pet-result">
          <div className="answer-pets">
            <div className="answer-pets-text">Your favorite pets are</div>
            <div>{favouritePets.toString()}.</div>
          </div>
          <div className="answer-pets-text2">
            {' '}
            Pet owner for {ownershipLength}.
          </div>
          <div>You're a {gender}</div>
          <div>Your email adress is {mail}</div>
        </h2>
      </div>
      <div></div>
    </>
  )
}

export default Results
