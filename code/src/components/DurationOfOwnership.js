import React, { useState } from 'react'
import Button from './Button'

const DurationOfOWnership = ({ formClassName }) => {
  const durationOfOWnership = [
    '0-5 years',
    '5-10 years',
    '10-15 years',
    '15 years or longer',
  ]
  const [OwnershipLength, setOwnershipLength] = useState('')
  const handleChange = (e) => {
    const target = e.target
    if (target.checked) {
      setOwnershipLength(target.value)
    } else {
      setOwnershipLength(
        OwnershipLength.filter((item) => item !== e.target.value)
      )
    }
  }

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
