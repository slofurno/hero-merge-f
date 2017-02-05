import React, { Component, PropTypes } from 'react'
import AttributeGraph from 'components/attributegraph'

const style = {
  maxWidth: 600,
  padding: 15,
  background: 'gainsboro',
  borderRadius: 4,
  marginBottom: 15
}

const halfStyle = {
  display: 'inline-block',
  width: '50%'
}

const noMargin = {
  margin: 0
}

const blockStyle = { background: 'lightgray', margin: '2px 0', padding: 2, width: '100%' }

const up = '\u25b2'
const down = '\u25bc'

class Hero extends Component {
  render() {
    const { hero, selected, onClick } = this.props
    return (
      <div style={style} onClick={onClick}>
        <h3 style={noMargin}>{`${hero.hero_name} (${hero.real_name})`}</h3>
        <span>{hero.gender}</span>
        <div className="flex-directed">

          <div style={{display: 'flex', margin: '0 4px 0 0', flex: 1, flexDirection: 'column'}}>
            <div style={blockStyle}>
              <AttributeGraph attributes={hero.attributes}/>
            </div>
          </div>

          <div style={{display: 'flex', margin: '0 4px 0 0', flex: 1.2, flexDirection: 'column'}}>
            <div style={blockStyle}>
            { hero.powers.map((power,i) => <div key={i}>{`${up} ${power}`} </div>)}
            </div>
            <div style={blockStyle}>
            {hero.weaknesses.map((weakness,i) => <div key={i+hero.powers.length}> {`${down} ${weakness}`} </div>)}

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Hero
