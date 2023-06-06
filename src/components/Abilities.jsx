import React from 'react'

function Abilities({ abil }) {
  return (
    <div>
        {abil.abilities?.map(val => (
            <p style={{textTransform: 'capitalize'}}>{val.ability?.name}</p>
        ))}
    </div>
  )
}

export default Abilities