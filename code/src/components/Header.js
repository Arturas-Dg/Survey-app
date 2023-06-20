import React from 'react'
import Button from './Button'

const Header = ({ onClick }) => {
  return (
    <div className="header">
      <h1 className="welcome">Welcome!</h1>
      <h2 className="welcome-message">
        This is a survey on pets. If you want to proceed, press Continue.
      </h2>
      <Button
        type="submit"
        className="continue-button"
        onClick={onClick}
        text="Continue"
      />
    </div>
  )
}

export default Header
