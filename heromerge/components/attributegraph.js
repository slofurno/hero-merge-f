import React, { Component, PropTypes } from 'react'

const powers = [
  'intelligence',
  'strength',
  'speed',
  'durability',
  'power',
  'combat'
]

const colors = {
  intelligence: 'deepskyblue',
  strength: 'crimson',
  speed: 'gold',
  durability: 'gray',
  power: 'limegreen',
  combat: 'darkorange'
}

const AttributeGraph = ({attributes, size}) => (
  <div style={size ? {fontSize: size} : {}}>
  { powers.map((power,i) =>
      <div key={i}
        style={{
          borderRadius: 3,
          padding: 3,
          color: 'white',
          width: attributes[power]+'%',
          background: colors[power]
        }}>
      {power}
      </div>)
  }
  </div>
)

export default AttributeGraph
