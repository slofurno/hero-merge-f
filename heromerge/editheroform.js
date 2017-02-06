import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

const defaultHero = {
  hero_name: '',
  real_name: '',
  gender: 'Male',
  attributes: {
    strength: 0,
    speed: 0,
  }
}

const Toggle = ({options: [a,b], onChange, value }) => (
  <span onClick={() => onChange(value===a ? b : a) }>{value}</span>
)

const renderField = (field) => (
    <div className="input-row">
      <input {...field.input} type="text"/>
      {field.meta.touched && field.meta.error &&
       <span className="error">{field.meta.error}</span>}
    </div>
  )

const renderGender = field => (
    <label>{field.name}<Toggle/></label>
  )

const without = (xs, i) => xs.slice(0,i).concat(xs.slice(i+1))
const toInt = x => x | 0

class EditHero extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    const { handleSubmit, hero, setPowers, setWeaknesses } = this.props
    const { powers, weaknesses } = hero

    return (
      <div>
        <label>hero name<Field name="hero_name" component="input" type="text"/></label>
        <label>real name<Field name="real_name" component="input" type="text"/></label>
        <label>real name<Field name="gender" component="input" type="text"/></label>
        <label>intelligence<Field name="intelligence" component="input" type="text" parse={toInt}/></label>
        <label>strength<Field name="strength" component="input" type="number" parse={toInt}/></label>
        <label>speed<Field name="speed" component="input" type="number" parse={toInt}/></label>
        <label>durability<Field name="durability" component="input" type="number" parse={toInt}/></label>
        <label>power<Field name="power" component="input" type="number" parse={toInt}/></label>
        <label>combat<Field name="combat" component="input" type="number" parse={toInt}/></label>

        <input ref="power" type="text"/><button type="button" onClick={() => setPowers(powers.concat(this.refs.power.value))}>add power</button>
        <div>
          { powers.map((power, i) => <div key={i} onClick={() => setPowers(without(powers, i)) }> {`${power}  x `}</div>) }
        </div>

        <input ref="weakness" type="text"/><button type="button" onClick={() => setWeaknesses(weaknesses.concat(this.refs.weakness.value))}>add weakness</button>
        <div>
          { weaknesses.map((weakness, i) => <div key={i} onClick={() => setWeaknesses(without(weaknesses, i)) }> {`${weakness}  x `}</div>) }
        </div>
        <button type="button" onClick={handleSubmit}>Create</button>
      </div>
    )
  }
}

const form = 'createHero'
export default reduxForm({ form })(EditHero)
