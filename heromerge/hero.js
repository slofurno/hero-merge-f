import React, { Component, PropTypes } from 'react'

const style = {
  width: 400,
  padding: 20,
  background: 'gainsboro',
  borderRadius: 4,
  marginBottom: 20
}

class Hero extends Component {
  render() {
    const { hero, selected, onClick } = this.props
    return (
      <div style={style} onClick={onClick}>
        <h3>{`${hero.hero_name} (${hero.real_name})`}</h3>
        <span>{`gender: ${hero.gender}`}</span>
        <h4>attributes</h4>
        <ul>
          { Object.keys(hero.attributes)
            .map((attr,i) => <li key={i}> { `${attr}: ${hero.attributes[attr]}` } </li>) }
        </ul>
        <h4>powers</h4>
        <ul>
          { hero.powers.map((power,i) => <li key={i}> {power} </li>) }
        </ul>
        <h4>weaknesses</h4>
        <ul>
          { hero.weaknesses.map((weakness,i) => <li key={i}> {weakness} </li>) }
        </ul>
      </div>
    )
  }
}

export default Hero
