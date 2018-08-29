import React, { Component } from 'react'
import Link from 'gatsby-link'
import { createClient } from 'contentful'
import contentfulConfig from '../../.contentful.json'

class IndexPage extends Component {
  state = {
    items: [],
  }

  componentDidMount() {
    const client = createClient({
      space: contentfulConfig.spaceId,
      accessToken: contentfulConfig.accessToken,
    })

    client
      .getEntries()
      .then(response => {
        console.log(response.items)
        this.setState({
          items: response.items,
        })
      })
      .catch(console.error)
  }

  render() {
    if (!this.state.items.length) return <p>No items found.</p>

    return (
      <div>
        {/* {this.state.items.map(item => {
          console.log(item)
          return (
            <div>
              <h2>{item.fields.title}</h2>
              <h3>{item.fields.tile1Title}</h3>
              <p>{item.fields.tile1Description}</p>
            </div>
          )
        })} */}
      </div>
    )
  }
}

export default IndexPage
