import React from 'react'

export default function Member(props) {
  const { details } = props

  if (!details) {
    return <h3>Loading..</h3>
  }

  return (
    <div className='container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Title: {details.title}</p>
      <p>Badge: {details.badge}</p>
    </div>
  )
}
