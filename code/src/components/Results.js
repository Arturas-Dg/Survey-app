import React from 'react'

const Results = ({ name, className }) => {
  return (
    <>
      <div className={className}>Thanks for answering, {name}</div>
      {console.log(name)}
    </>
  )
}

export default Results
