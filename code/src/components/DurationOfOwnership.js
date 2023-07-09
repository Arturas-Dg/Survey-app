import React, { useState } from 'react'
import Button from './Button'

const DurationOfOWnership = ({ formClassName, handleChange }) => {
  const durationOfOWnership = [
    '0-5 years',
    '5-10 years',
    '10-15 years',
    '15 years or longer',
  ]

  return (
    <form className={formClassName}>
      {durationOfOWnership.map((year) => (
        <label htmlFor={year} key={year}>
          <input
            type="radio"
            className="radio"
            id={year}
            name="fav-language"
            value={year}
            onClick={handleChange}
          />
          {year}
        </label>
      ))}
    </form>
  )
}

export default DurationOfOWnership
