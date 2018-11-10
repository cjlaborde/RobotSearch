import React from 'react'

const Card = ({ name, email, id }) => {
    return (
    <div className='tc bg-near-black dib br3 pa3 ma2 grow bw2 shadow-5 silver'>
      <img alt='robots' src={`https://robohash.org/set_set1/bgset_bg1/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card