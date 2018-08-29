import React, { Component } from 'react'
import Link from 'gatsby-link'
import { createClient } from 'contentful'
import contentfulConfig from '../../.contentful.json'

class IndexPage extends Component {
  state = {
    contentfulItems: [],
  }

  componentDidMount() {
    const client = createClient({
      space: contentfulConfig.spaceId,
      accessToken: contentfulConfig.accessToken,
    })

    client
      .getEntries()
      .then(res => {
        this.setState({
          contentfulItems: res.items,
        })
      })
      .catch(err => err.message)
  }

  render() {
    const { contentfulItems } = this.state

    return (
      <div>
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

export default IndexPage
