import React, { Component, PropTypes } from 'react'
import {
  Card,
  CardContent,
  CardControl,
  CardDrawers,
  CardLoadingText,
  CardMessages,
  CardSection
} from 'cf-component-card'

class Hero extends Component {
  render() {
    const { hero } = this.props
    return (
      <Card>
        <CardSection>
          {hero.hero_name}
        </CardSection>
        <CardSection>
          {hero.real_name}
        </CardSection>
      </Card>
    )
  }
}

export default Hero
