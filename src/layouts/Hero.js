import React, { Component } from 'react'
import Nav from '../components/Nav'

class Hero extends Component {
  render() {
    const { contentfulItems } = this.props

    return (
      <div>
        <Nav />
        {contentfulItems.map(item => {
          console.log(item)
          return (
            <div>
              <h2>{item.fields.heroTitle}</h2>
              <h3>{item.fields.heroBox1Title}</h3>
              <p>{item.fields.heroBox2Description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Hero
