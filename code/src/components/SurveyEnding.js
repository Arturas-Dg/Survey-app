import { React, useState } from 'react'
import Button from './Button'
const SurveyEnding = ({
  nameId,
  nameType,
  mailId,
  mailType,
  genderId,
  nameText,
  mailText,
  genderText,
}) => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [gender, setGender] = useState('')

  const onNameChange = (e) => {
    setName(e.target.value)
    console.log(e.target.value)
  }
  const onMailChange = (e) => {
    setMail(e.target.value)
    console.log(e.target.value)
  }
  const onGenderChange = (e) => {
    setGender(e.target.value)
    console.log(e.target.value)
  }

  const exportData = () => {
    return name, mail, gender
  }

  return (
    <>
      <div className="name">
        <h2>{nameText}</h2>
        <input
          id={nameId}
          type={nameType}
          value={name}
          onChange={onNameChange}
          className="name-input"
        ></input>
      </div>
      <div className="mail">
        <h2>{mailText}</h2>
        <input
          id={mailId}
          type={mailType}
          value={mail}
          onChange={onMailChange}
          className="mail-input"
        ></input>
      </div>
      <div className="gender">
        <h2>{genderText}</h2>
        <select
          className="gender-input"
          id={genderId}
          onChange={onGenderChange}
          value={gender}
        >
          <option disabled={true}></option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <Button className="finish-button" onClick={exportData} />
    </>
  )
}

export default SurveyEnding
